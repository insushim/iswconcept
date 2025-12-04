import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';

// 캐싱을 위한 메모리 저장소 (비용 최적화)
const responseCache = new Map<string, { data: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1시간 캐시

export class GeminiClient {
  private model: GenerativeModel;
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY || '';

    if (!this.apiKey) {
      throw new Error('GEMINI_API_KEY가 설정되지 않았습니다.');
    }

    const genAI = new GoogleGenerativeAI(this.apiKey);
    this.model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });
  }

  // 캐시 키 생성
  private generateCacheKey(prompt: string): string {
    // 프롬프트의 해시를 생성 (간단한 해시)
    let hash = 0;
    for (let i = 0; i < prompt.length; i++) {
      const char = prompt.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return `gemini_${hash}`;
  }

  // 캐시에서 응답 가져오기
  private getFromCache(key: string): string | null {
    const cached = responseCache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }
    responseCache.delete(key);
    return null;
  }

  // 캐시에 저장
  private setCache(key: string, data: string): void {
    // 캐시 크기 제한 (100개)
    if (responseCache.size >= 100) {
      const firstKey = responseCache.keys().next().value;
      if (firstKey) responseCache.delete(firstKey);
    }
    responseCache.set(key, { data, timestamp: Date.now() });
  }

  // 텍스트 생성
  async generate(prompt: string, useCache: boolean = false): Promise<string> {
    // 캐시 확인
    if (useCache) {
      const cacheKey = this.generateCacheKey(prompt);
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        console.log('Using cached response');
        return cached;
      }
    }

    try {
      const result = await this.model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      // 캐시 저장
      if (useCache) {
        const cacheKey = this.generateCacheKey(prompt);
        this.setCache(cacheKey, text);
      }

      return text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('AI 응답 생성 중 오류가 발생했습니다.');
    }
  }

  // JSON 응답 생성 (파싱 포함)
  async generateJSON<T>(prompt: string, useCache: boolean = false): Promise<T> {
    const response = await this.generate(prompt, useCache);

    // JSON 추출 (마크다운 코드 블록 제거)
    let jsonStr = response;

    // ```json ... ``` 패턴 제거
    const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    try {
      return JSON.parse(jsonStr) as T;
    } catch (error) {
      console.error('JSON Parse Error:', error);
      console.error('Raw response:', response);
      throw new Error('AI 응답을 파싱하는 중 오류가 발생했습니다.');
    }
  }

  // 스트리밍 생성 (실시간 진행 상황 표시용)
  async *generateStream(prompt: string): AsyncGenerator<string> {
    try {
      const result = await this.model.generateContentStream(prompt);

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        yield chunkText;
      }
    } catch (error) {
      console.error('Gemini Stream Error:', error);
      throw new Error('AI 스트리밍 생성 중 오류가 발생했습니다.');
    }
  }
}

// 싱글톤 인스턴스 (서버사이드에서 재사용)
let geminiInstance: GeminiClient | null = null;

export function getGeminiClient(): GeminiClient {
  if (!geminiInstance) {
    geminiInstance = new GeminiClient();
  }
  return geminiInstance;
}
