'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  BookOpen,
  Globe,
  Brain,
  Target,
  Users,
  Lightbulb,
  Search,
  GraduationCap,
  Palette,
  Calculator,
  FlaskConical,
  BookText
} from 'lucide-react';

// 데이터베이스 구조 정의
const DATABASE_SECTIONS = {
  frameworks: {
    title: '국제 교육 프레임워크',
    icon: Globe,
    description: '55개국 교육과정 및 국제 프레임워크',
    color: 'bg-blue-500',
    items: [
      { region: '아시아/오세아니아', countries: ['한국 2022 개정', '일본', '중국', '싱가포르', '호주', '뉴질랜드', '인도', '대만', '홍콩', 'UAE', '사우디', '카타르', '파키스탄', '방글라데시', '스리랑카', '네팔', '필리핀', '말레이시아', '태국', '인도네시아', '베트남'] },
      { region: '유럽', countries: ['핀란드', '영국', '독일', '프랑스', '스웨덴', '덴마크', '노르웨이', '네덜란드', '스위스', '스페인', '포르투갈', '아일랜드', '벨기에', '오스트리아', '이탈리아', '러시아', '폴란드', '체코', '그리스', '터키', '스코틀랜드'] },
      { region: '아메리카', countries: ['미국 NGSS/CCSS', '캐나다 온타리오', '멕시코', '브라질', '아르헨티나', '칠레', '콜롬비아', '페루', '에콰도르'] },
      { region: '아프리카', countries: ['남아프리카공화국', '이집트', '케냐', '나이지리아', '가나', '모로코'] },
      { region: '국제', countries: ['IB PYP/MYP/DP', '캠브리지 국제'] }
    ]
  },
  conceptBased: {
    title: '개념기반 교육과정',
    icon: Lightbulb,
    description: 'Lynn Erickson, Lois Lanning, Rachel French의 이론',
    color: 'bg-amber-500',
    items: [
      { name: '지식의 구조', description: '사실 → 주제 → 개념 → 원리/일반화 → 이론', source: 'Erickson & Lanning' },
      { name: '과정의 구조', description: '전략 → 기능 → 과정', source: 'Erickson & Lanning' },
      { name: '시너지적 사고', description: '사실적 수준과 개념적 수준을 오가는 깊은 사고', source: 'Erickson' },
      { name: '개념기반 탐구 7단계', description: '관계맺기→집중하기→조사하기→조직하기→일반화하기→전이하기→성찰하기', source: 'French & Marshall' },
      { name: '탐구질문 3단계', description: '(사)사실적 → (개)개념적 → (논)논쟁적', source: 'CBI Model' }
    ]
  },
  thinkingRoutines: {
    title: '사고 루틴',
    icon: Brain,
    description: 'Harvard Project Zero 기반 30+ 사고 루틴',
    color: 'bg-purple-500',
    items: [
      { category: '이해 탐색', routines: ['See-Think-Wonder', 'Think-Pair-Share', 'Chalk Talk', '3-2-1 브릿지', 'Word-Phrase-Sentence'] },
      { category: '조직 및 분석', routines: ['Compare & Contrast', 'Concept Map', 'Y-Chart', 'Venn Diagram', 'Frayer Model'] },
      { category: '종합 및 일반화', routines: ['Headlines', '4Cs (연결-도전-개념-변화)', 'Making Meaning', 'CSI (색상-기호-이미지)'] },
      { category: '심화 및 전이', routines: ['Step Inside', 'What If...?', 'Circle of Viewpoints', 'Creative Hunt'] },
      { category: '성찰', routines: ['I Used to Think... Now I Think...', 'Connect-Extend-Challenge', 'Plus-Minus-Interesting'] }
    ]
  },
  kaganStructures: {
    title: 'Kagan 협동학습 구조',
    icon: Users,
    description: 'Spencer Kagan의 협동학습 구조',
    color: 'bg-green-500',
    items: [
      { name: 'Round Robin', description: '돌아가며 말하기 - 모둠원이 순서대로 자신의 생각을 공유', pies: '참여 균등' },
      { name: 'Think-Pair-Share', description: '생각-짝-공유 - 개인 → 짝 → 전체 순서로 사고 공유', pies: '개별 책무성' },
      { name: 'Numbered Heads Together', description: '번호 머리 맞대기 - 함께 토의 후 불린 번호가 대표 발표', pies: '긍정적 상호의존' },
      { name: 'Jigsaw', description: '전문가 직소 - 각자 맡은 부분을 전문가로 학습 후 가르치기', pies: '동시다발 상호작용' },
      { name: 'Gallery Walk', description: '갤러리 워크 - 결과물 전시 후 돌아다니며 감상/피드백', pies: '참여 균등' },
      { name: 'Four Corners', description: '네 모서리 - 선택지별로 이동하여 같은 입장끼리 토론', pies: '동시다발 상호작용' },
      { name: 'Inside-Outside Circle', description: '안팎 원 - 안쪽/바깥쪽 원이 짝을 바꿔가며 공유', pies: '참여 균등' },
      { name: 'Rally Robin', description: '릴레이 로빈 - 짝끼리 번갈아가며 아이디어 제시', pies: '개별 책무성' },
      { name: 'Stand Up, Hand Up, Pair Up', description: '일어나서 손들고 짝짓기', pies: '동시다발 상호작용' },
      { name: 'Timed Pair Share', description: '시간 제한 짝 공유', pies: '참여 균등' }
    ]
  },
  sixThinkingHats: {
    title: 'De Bono 6색 사고모자',
    icon: Palette,
    description: 'Edward de Bono의 창의적 사고 도구',
    color: 'bg-pink-500',
    items: [
      { color: '하얀 모자', focus: '정보', question: '우리가 알고 있는 사실은 무엇인가요?', description: '객관적 정보와 데이터에 집중' },
      { color: '빨간 모자', focus: '감정', question: '이것에 대해 어떤 느낌이 드나요?', description: '감정, 직관, 느낌 표현' },
      { color: '검은 모자', focus: '비판', question: '어떤 문제점이나 위험이 있을까요?', description: '위험, 문제점, 단점 분석' },
      { color: '노란 모자', focus: '긍정', question: '어떤 좋은 점이 있을까요?', description: '장점, 가치, 이점 탐색' },
      { color: '초록 모자', focus: '창의', question: '새로운 아이디어는 무엇일까요?', description: '창의적 대안, 새로운 가능성' },
      { color: '파란 모자', focus: '과정', question: '다음에는 어떻게 해야 할까요?', description: '사고 과정 조절, 다음 단계 계획' }
    ]
  },
  rosenshine: {
    title: 'Rosenshine의 교수 원리',
    icon: GraduationCap,
    description: 'Barak Rosenshine의 효과적인 수업 10원칙',
    color: 'bg-indigo-500',
    items: [
      { num: 1, name: '매일 복습으로 시작하기', description: '이전 학습 내용을 복습하여 연결', strategy: '전시학습 상기, 퀴즈' },
      { num: 2, name: '새로운 자료를 작은 단계로 제시', description: '인지 부하를 줄이기 위해 작은 단위로', strategy: '청킹, 단계적 제시' },
      { num: 3, name: '질문을 많이 하기', description: '학생 이해도 확인 및 참여 유도', strategy: '발문, 확인 질문' },
      { num: 4, name: '모델과 예시 제공', description: '명시적 시범과 충분한 예시', strategy: '시범, worked examples' },
      { num: 5, name: '학생 연습 안내', description: '교사의 안내 하에 연습', strategy: '스캐폴딩, 피드백' },
      { num: 6, name: '이해도 확인', description: '자주 이해도를 점검', strategy: '형성평가, 확인 질문' },
      { num: 7, name: '높은 성공률 달성', description: '80% 이상의 성공률 목표', strategy: '적절한 난이도, 지원' },
      { num: 8, name: '스캐폴딩 제공', description: '어려운 과제에 임시 지원', strategy: '힌트, 단서, 분해' },
      { num: 9, name: '독립적 연습 요구', description: '자동화를 위한 충분한 연습', strategy: '숙제, 반복 연습' },
      { num: 10, name: '주간/월간 복습', description: '장기 기억을 위한 분산 연습', strategy: '복습 퀴즈, 누적 평가' }
    ]
  },
  wiliamAssessment: {
    title: 'Dylan Wiliam 형성평가',
    icon: Target,
    description: '형성평가의 5가지 핵심 전략',
    color: 'bg-teal-500',
    items: [
      { strategy: '학습 의도와 성공 기준 명확히 하기', description: '학생들이 무엇을 배우고 있고, 성공이 어떤 모습인지 알게 하기', techniques: ['학습 목표 공유', '루브릭 제시', '모범 사례 분석'] },
      { strategy: '효과적인 토론과 학습 증거 이끌어내기', description: '학생 이해도에 대한 증거를 수집하는 토론과 활동', techniques: ['대기 시간', '무작위 호명', '화이트보드', 'Exit Ticket'] },
      { strategy: '학습을 진전시키는 피드백 제공', description: '다음 단계로 나아가게 하는 피드백', techniques: ['구체적 피드백', '즉각적 피드백', '성장 피드백'] },
      { strategy: '학생들을 서로의 학습 자원으로 활성화', description: '동료 평가와 협력 학습', techniques: ['동료 피드백', 'Two Stars & a Wish', '짝 평가'] },
      { strategy: '학생들을 자기 학습의 주인으로 활성화', description: '자기 평가와 메타인지', techniques: ['자기 평가', 'Traffic Light', '학습 일지'] }
    ]
  },
  assessmentStrategies: {
    title: '평가 전략 도구함',
    icon: Target,
    description: '형성평가, 총괄평가, 자기평가 도구',
    color: 'bg-red-500',
    items: [
      { category: '형성평가', tools: ['Exit Ticket (퇴장 티켓)', 'Traffic Light (신호등)', 'Think Aloud', 'Quick Write', 'Thumbs Up/Down', '관찰 체크리스트', '발문'] },
      { category: '동료평가', tools: ['Two Stars and a Wish', 'Gallery Walk 피드백', 'Peer Review 체크리스트', '동료 피드백 양식'] },
      { category: '자기평가', tools: ['학습 일지', '포트폴리오 성찰', '목표 설정 및 점검', 'I Used to Think...', '자기 점검 체크리스트'] },
      { category: '총괄평가', tools: ['GRASPS 수행과제', '루브릭', '포트폴리오', '프로젝트 평가'] }
    ]
  },
  subjectFrameworks: {
    title: '교과별 전문 프레임워크',
    icon: BookText,
    description: '교과 특화 교수학습 프레임워크',
    color: 'bg-orange-500',
    items: [
      { subject: '국어/문해력', frameworks: ['Balanced Literacy (균형적 문해력)', 'Workshop Model (미니레슨-작업-공유)', 'Readers/Writers Workshop'] },
      { subject: '수학', frameworks: ['Singapore Math (CPA 접근)', 'Number Talks', 'CGI (인지적 안내 수업)', '수학적 담화'] },
      { subject: '사회', frameworks: ['C3 Framework (탐구 아크)', '논쟁 수업', '시뮬레이션/역할극'] },
      { subject: '과학', frameworks: ['NGSS (3차원)', '5E 탐구 모형', 'POE (예상-관찰-설명)', 'Argument-Driven Inquiry'] },
      { subject: '융합', frameworks: ['STEAM', 'Maker Education', 'PBL (프로젝트 기반 학습)', 'Design Thinking'] }
    ]
  },
  curriculumDesign: {
    title: '교육과정 설계 모델',
    icon: BookOpen,
    description: '교육과정 설계의 주요 모델',
    color: 'bg-cyan-500',
    items: [
      { name: 'Tyler 모델', year: 1949, approach: '선형적', steps: '목표 → 경험 선정 → 경험 조직 → 평가', description: '목표 중심의 합리적 설계' },
      { name: 'Taba 모델', year: 1962, approach: '귀납적', steps: '진단 → 목표 → 내용 선정/조직 → 경험 선정/조직 → 평가', description: '교사 주도의 상향식 개발' },
      { name: 'Wiggins & McTighe (UbD)', year: 1998, approach: '백워드', steps: '바라는 결과 → 수용 가능한 증거 → 학습 경험 계획', description: '이해 중심 백워드 설계' },
      { name: 'Stenhouse 모델', year: 1975, approach: '과정 중심', steps: '지식의 형식 → 교사의 전문적 판단 → 반성적 실천', description: '교사를 연구자로' },
      { name: 'Wheeler 모델', year: 1967, approach: '순환적', steps: '목표 → 경험 선정 → 내용 선정 → 조직 → 평가 → 목표...', description: '순환적 개선' }
    ]
  },
  edTech: {
    title: '에듀테크 & 혁신 교육',
    icon: FlaskConical,
    description: '테크놀로지 통합 및 혁신적 교수법',
    color: 'bg-violet-500',
    items: [
      { name: 'Flipped Learning', description: '사전 학습 후 교실에서 심화 활동', pillars: 'F(유연성), L(학습문화), I(의도된 내용), P(전문적 교육자)' },
      { name: 'Blended Learning', models: ['Station Rotation', 'Lab Rotation', 'Flipped', 'Flex'], description: '온오프라인 혼합 학습' },
      { name: 'SAMR Model', levels: 'Substitution → Augmentation → Modification → Redefinition', description: '테크놀로지 통합 수준' },
      { name: 'Gamification', elements: ['포인트', '배지', '리더보드', '퀘스트', '레벨', '피드백'], description: '게임 요소 활용' },
      { name: 'Game-Based Learning', description: '실제 게임을 통한 학습', types: ['시뮬레이션', '퍼즐', '전략', '롤플레잉'] }
    ]
  }
};

export default function DatabasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('frameworks');

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            교육 데이터베이스
          </h1>
          <p className="text-gray-600 mt-1">
            세계 55개국 교육과정, 40+ 교육이론, 30+ 사고루틴을 탐색하세요
          </p>
        </div>

        {/* 검색 */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="검색어를 입력하세요..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* 통계 배지 */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="px-3 py-1">
            <Globe className="h-3 w-3 mr-1" /> 55개국 교육과정
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Brain className="h-3 w-3 mr-1" /> 40+ 교육이론
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Lightbulb className="h-3 w-3 mr-1" /> 30+ 사고루틴
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Users className="h-3 w-3 mr-1" /> 10+ 협동학습 구조
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <Target className="h-3 w-3 mr-1" /> 20+ 평가 도구
          </Badge>
        </div>
      </div>

      {/* 탭 컨텐츠 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-gray-100 p-1 rounded-lg">
          {Object.entries(DATABASE_SECTIONS).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-1 px-3 py-2 text-xs data-[state=active]:bg-white"
              >
                <Icon className="h-3 w-3" />
                <span className="hidden sm:inline">{section.title.split(' ')[0]}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* 국제 교육 프레임워크 */}
        <TabsContent value="frameworks" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                {DATABASE_SECTIONS.frameworks.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.frameworks.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {DATABASE_SECTIONS.frameworks.items.map((region, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{region.region}</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 개념기반 교육과정 */}
        <TabsContent value="conceptBased" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                {DATABASE_SECTIONS.conceptBased.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.conceptBased.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {DATABASE_SECTIONS.conceptBased.items.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-amber-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{item.source}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 사고 루틴 */}
        <TabsContent value="thinkingRoutines" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                {DATABASE_SECTIONS.thinkingRoutines.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.thinkingRoutines.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {DATABASE_SECTIONS.thinkingRoutines.items.map((category, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.routines.map((routine, i) => (
                        <Badge key={i} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {routine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Kagan 협동학습 */}
        <TabsContent value="kaganStructures" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                {DATABASE_SECTIONS.kaganStructures.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.kaganStructures.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-3">
                {DATABASE_SECTIONS.kaganStructures.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Badge className="bg-green-600 text-white shrink-0">{item.name}</Badge>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{item.description}</p>
                      <p className="text-xs text-green-700 mt-1">PIES: {item.pies}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 6색 사고모자 */}
        <TabsContent value="sixThinkingHats" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-pink-600" />
                {DATABASE_SECTIONS.sixThinkingHats.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.sixThinkingHats.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {DATABASE_SECTIONS.sixThinkingHats.items.map((hat, idx) => {
                  const colorMap: Record<string, string> = {
                    '하얀 모자': 'bg-gray-100 border-gray-300',
                    '빨간 모자': 'bg-red-100 border-red-300',
                    '검은 모자': 'bg-gray-800 text-white border-gray-900',
                    '노란 모자': 'bg-yellow-100 border-yellow-300',
                    '초록 모자': 'bg-green-100 border-green-300',
                    '파란 모자': 'bg-blue-100 border-blue-300'
                  };
                  return (
                    <div key={idx} className={`p-4 rounded-lg border-2 ${colorMap[hat.color]}`}>
                      <h4 className="font-bold">{hat.color}</h4>
                      <p className="text-sm font-medium mt-1">{hat.focus}</p>
                      <p className="text-xs mt-2 italic">&quot;{hat.question}&quot;</p>
                      <p className="text-xs mt-1 opacity-75">{hat.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rosenshine 원리 */}
        <TabsContent value="rosenshine" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                {DATABASE_SECTIONS.rosenshine.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.rosenshine.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {DATABASE_SECTIONS.rosenshine.items.map((item) => (
                  <div key={item.num} className="flex gap-3 p-3 bg-indigo-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full shrink-0 font-bold text-sm">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-xs text-indigo-600 mt-1">전략: {item.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dylan Wiliam 형성평가 */}
        <TabsContent value="wiliamAssessment" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-600" />
                {DATABASE_SECTIONS.wiliamAssessment.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.wiliamAssessment.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {DATABASE_SECTIONS.wiliamAssessment.items.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-teal-500 pl-4 py-2">
                    <h4 className="font-semibold text-teal-900">{idx + 1}. {item.strategy}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.techniques.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-teal-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 평가 전략 */}
        <TabsContent value="assessmentStrategies" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                {DATABASE_SECTIONS.assessmentStrategies.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.assessmentStrategies.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {DATABASE_SECTIONS.assessmentStrategies.items.map((category, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 교과별 프레임워크 */}
        <TabsContent value="subjectFrameworks" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
              <CardTitle className="flex items-center gap-2">
                <BookText className="h-5 w-5 text-orange-600" />
                {DATABASE_SECTIONS.subjectFrameworks.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.subjectFrameworks.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {DATABASE_SECTIONS.subjectFrameworks.items.map((item, idx) => {
                  const iconMap: Record<string, typeof Calculator> = {
                    '국어/문해력': BookOpen,
                    '수학': Calculator,
                    '사회': Globe,
                    '과학': FlaskConical,
                    '융합': Lightbulb
                  };
                  const Icon = iconMap[item.subject] || BookOpen;
                  return (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-orange-600" />
                        <h4 className="font-semibold text-gray-900">{item.subject}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.frameworks.map((fw, i) => (
                          <Badge key={i} className="bg-orange-100 text-orange-800">
                            {fw}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 교육과정 설계 모델 */}
        <TabsContent value="curriculumDesign" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-cyan-600" />
                {DATABASE_SECTIONS.curriculumDesign.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.curriculumDesign.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {DATABASE_SECTIONS.curriculumDesign.items.map((model, idx) => (
                  <div key={idx} className="border rounded-lg p-4 bg-cyan-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{model.name}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline">{model.year}</Badge>
                        <Badge className="bg-cyan-600">{model.approach}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{model.description}</p>
                    <p className="text-xs text-cyan-700 mt-2 font-mono">{model.steps}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 에듀테크 */}
        <TabsContent value="edTech" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-violet-600" />
                {DATABASE_SECTIONS.edTech.title}
              </CardTitle>
              <CardDescription>{DATABASE_SECTIONS.edTech.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {DATABASE_SECTIONS.edTech.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-violet-900">{item.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    {'pillars' in item && (
                      <p className="text-xs text-violet-600 mt-2">원칙: {item.pillars}</p>
                    )}
                    {'models' in item && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.models?.map((m, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{m}</Badge>
                        ))}
                      </div>
                    )}
                    {'levels' in item && (
                      <p className="text-xs text-violet-600 mt-2">{item.levels}</p>
                    )}
                    {'elements' in item && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.elements?.map((e, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{e}</Badge>
                        ))}
                      </div>
                    )}
                    {'types' in item && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.types?.map((t, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
