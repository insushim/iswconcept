// Firebase REST API를 사용한 서버사이드 Firestore 접근
// Admin SDK 없이 작동 (서비스 계정 키 불필요)

const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

interface FirestoreDocument {
  name?: string;
  fields?: Record<string, FirestoreValue>;
  createTime?: string;
  updateTime?: string;
}

interface FirestoreValue {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  timestampValue?: string;
  arrayValue?: { values?: FirestoreValue[] };
  mapValue?: { fields?: Record<string, FirestoreValue> };
  nullValue?: null;
}

// Firestore 값을 JavaScript 값으로 변환
function convertFirestoreValue(value: FirestoreValue): unknown {
  if (value.stringValue !== undefined) return value.stringValue;
  if (value.integerValue !== undefined) return parseInt(value.integerValue);
  if (value.doubleValue !== undefined) return value.doubleValue;
  if (value.booleanValue !== undefined) return value.booleanValue;
  if (value.timestampValue !== undefined) return value.timestampValue;
  if (value.nullValue !== undefined) return null;
  if (value.arrayValue?.values) {
    return value.arrayValue.values.map(convertFirestoreValue);
  }
  if (value.mapValue?.fields) {
    return convertFirestoreFields(value.mapValue.fields);
  }
  return null;
}

// Firestore 필드들을 JavaScript 객체로 변환
function convertFirestoreFields(fields: Record<string, FirestoreValue>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(fields)) {
    result[key] = convertFirestoreValue(value);
  }
  return result;
}

// JavaScript 값을 Firestore 값으로 변환
function toFirestoreValue(value: unknown): FirestoreValue {
  if (value === null || value === undefined) {
    return { nullValue: null };
  }
  if (typeof value === 'string') {
    return { stringValue: value };
  }
  if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      return { integerValue: value.toString() };
    }
    return { doubleValue: value };
  }
  if (typeof value === 'boolean') {
    return { booleanValue: value };
  }
  if (value instanceof Date) {
    return { timestampValue: value.toISOString() };
  }
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map(toFirestoreValue) } };
  }
  if (typeof value === 'object') {
    const fields: Record<string, FirestoreValue> = {};
    for (const [k, v] of Object.entries(value)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { nullValue: null };
}

// JavaScript 객체를 Firestore 필드로 변환
function toFirestoreFields(obj: Record<string, unknown>): Record<string, FirestoreValue> {
  const fields: Record<string, FirestoreValue> = {};
  for (const [key, value] of Object.entries(obj)) {
    fields[key] = toFirestoreValue(value);
  }
  return fields;
}

// 문서 ID 추출
function extractDocId(name: string): string {
  const parts = name.split('/');
  return parts[parts.length - 1];
}

// 수업 조회
export async function getServerLesson(lessonId: string): Promise<Record<string, unknown> | null> {
  try {
    const response = await fetch(`${FIRESTORE_BASE_URL}/lessons/${lessonId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Firestore error: ${response.status}`);
    }

    const doc: FirestoreDocument = await response.json();

    if (!doc.fields) {
      return null;
    }

    const data = convertFirestoreFields(doc.fields);
    return {
      id: lessonId,
      ...data,
    };
  } catch (error) {
    console.error('getServerLesson error:', error);
    throw error;
  }
}

// 자료 조회
export async function getServerMaterial(lessonId: string, type: string): Promise<Record<string, unknown> | null> {
  try {
    // 구조화된 쿼리 사용
    const queryUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:runQuery`;

    const response = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: 'materials' }],
          where: {
            compositeFilter: {
              op: 'AND',
              filters: [
                {
                  fieldFilter: {
                    field: { fieldPath: 'lesson_id' },
                    op: 'EQUAL',
                    value: { stringValue: lessonId },
                  },
                },
                {
                  fieldFilter: {
                    field: { fieldPath: 'type' },
                    op: 'EQUAL',
                    value: { stringValue: type },
                  },
                },
                {
                  fieldFilter: {
                    field: { fieldPath: 'is_latest' },
                    op: 'EQUAL',
                    value: { booleanValue: true },
                  },
                },
              ],
            },
          },
          limit: 1,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Firestore query error: ${response.status}`);
    }

    const results = await response.json();

    if (!results[0]?.document) {
      return null;
    }

    const doc = results[0].document;
    const data = convertFirestoreFields(doc.fields || {});

    return {
      id: extractDocId(doc.name),
      ...data,
    };
  } catch (error) {
    console.error('getServerMaterial error:', error);
    throw error;
  }
}

// 자료 목록 조회
export async function getServerMaterials(lessonId: string): Promise<Record<string, unknown>[]> {
  try {
    const queryUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents:runQuery`;

    const response = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        structuredQuery: {
          from: [{ collectionId: 'materials' }],
          where: {
            compositeFilter: {
              op: 'AND',
              filters: [
                {
                  fieldFilter: {
                    field: { fieldPath: 'lesson_id' },
                    op: 'EQUAL',
                    value: { stringValue: lessonId },
                  },
                },
                {
                  fieldFilter: {
                    field: { fieldPath: 'is_latest' },
                    op: 'EQUAL',
                    value: { booleanValue: true },
                  },
                },
              ],
            },
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Firestore query error: ${response.status}`);
    }

    const results = await response.json();

    return results
      .filter((r: { document?: FirestoreDocument }) => r.document)
      .map((r: { document: FirestoreDocument }) => {
        const doc = r.document;
        const data = convertFirestoreFields(doc.fields || {});
        return {
          id: extractDocId(doc.name!),
          ...data,
        };
      });
  } catch (error) {
    console.error('getServerMaterials error:', error);
    return [];
  }
}

// 자료 저장
export async function saveServerMaterial(
  lessonId: string,
  type: string,
  title: string,
  content: Record<string, unknown>
): Promise<string> {
  try {
    // 1. 기존 자료의 is_latest를 false로 변경 (기존 자료 찾기)
    const existingMaterial = await getServerMaterial(lessonId, type);

    if (existingMaterial && existingMaterial.id) {
      // 기존 자료 업데이트
      const updateUrl = `${FIRESTORE_BASE_URL}/materials/${existingMaterial.id}?updateMask.fieldPaths=is_latest`;
      await fetch(updateUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            is_latest: { booleanValue: false },
          },
        }),
      });
    }

    // 2. 새 자료 추가
    const createUrl = `${FIRESTORE_BASE_URL}/materials`;
    const newMaterial = {
      lesson_id: lessonId,
      type,
      title,
      content,
      is_latest: true,
      version: ((existingMaterial?.version as number) || 0) + 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const response = await fetch(createUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: toFirestoreFields(newMaterial),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create material: ${response.status} - ${errorText}`);
    }

    const doc: FirestoreDocument = await response.json();
    return extractDocId(doc.name!);
  } catch (error) {
    console.error('saveServerMaterial error:', error);
    throw error;
  }
}

// 수업 업데이트
export async function updateServerLesson(
  lessonId: string,
  updates: Record<string, unknown>
): Promise<Record<string, unknown>> {
  try {
    updates.updated_at = new Date().toISOString();

    const fieldPaths = Object.keys(updates).map(k => `updateMask.fieldPaths=${k}`).join('&');
    const updateUrl = `${FIRESTORE_BASE_URL}/lessons/${lessonId}?${fieldPaths}`;

    const response = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: toFirestoreFields(updates),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update lesson: ${response.status}`);
    }

    const doc: FirestoreDocument = await response.json();
    const data = convertFirestoreFields(doc.fields || {});

    return {
      id: lessonId,
      ...data,
    };
  } catch (error) {
    console.error('updateServerLesson error:', error);
    throw error;
  }
}

// 수업 삭제
export async function deleteServerLesson(lessonId: string): Promise<void> {
  try {
    // 1. 관련 자료 삭제
    const materials = await getServerMaterials(lessonId);
    for (const material of materials) {
      if (material.id) {
        await fetch(`${FIRESTORE_BASE_URL}/materials/${material.id}`, {
          method: 'DELETE',
        });
      }
    }

    // 2. 수업 삭제
    const response = await fetch(`${FIRESTORE_BASE_URL}/lessons/${lessonId}`, {
      method: 'DELETE',
    });

    if (!response.ok && response.status !== 404) {
      throw new Error(`Failed to delete lesson: ${response.status}`);
    }
  } catch (error) {
    console.error('deleteServerLesson error:', error);
    throw error;
  }
}
