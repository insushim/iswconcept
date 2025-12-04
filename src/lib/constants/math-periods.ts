// 수학 차시별 학습목표 및 성취기준 데이터
import { UnitLessons } from './lesson-periods';

// ==================== 수학 3학년 ====================
export const MATH_3_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'math_3_1_1': {
    unitId: 'math_3_1_1',
    unitName: '1. 덧셈과 뺄셈',
    periods: [
      { id: 'math_3_1_1_1', period: 1, title: '세 자리 수의 덧셈', objectives: ['받아올림이 없는 세 자리 수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_2', period: 2, title: '받아올림이 있는 덧셈 (1)', objectives: ['받아올림이 한 번 있는 세 자리 수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_3', period: 3, title: '받아올림이 있는 덧셈 (2)', objectives: ['받아올림이 여러 번 있는 세 자리 수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_4', period: 4, title: '세 자리 수의 뺄셈', objectives: ['받아내림이 없는 세 자리 수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_5', period: 5, title: '받아내림이 있는 뺄셈 (1)', objectives: ['받아내림이 한 번 있는 세 자리 수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_6', period: 6, title: '받아내림이 있는 뺄셈 (2)', objectives: ['받아내림이 여러 번 있는 세 자리 수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-01] 세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_7', period: 7, title: '덧셈과 뺄셈의 관계', objectives: ['덧셈과 뺄셈의 관계를 이해할 수 있다.'], achievementStandards: ['[4수01-02] 덧셈과 뺄셈의 관계를 이해하고 문제 해결에 활용할 수 있다.'], duration: 40 },
      { id: 'math_3_1_1_8', period: 8, title: '덧셈과 뺄셈 활용', objectives: ['덧셈과 뺄셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-02] 덧셈과 뺄셈의 관계를 이해하고 문제 해결에 활용할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_1_2': {
    unitId: 'math_3_1_2',
    unitName: '2. 평면도형',
    periods: [
      { id: 'math_3_1_2_1', period: 1, title: '선분, 반직선, 직선', objectives: ['선분, 반직선, 직선을 구별할 수 있다.'], achievementStandards: ['[4수02-01] 선분, 반직선, 직선을 이해하고 구별할 수 있다.'], duration: 40 },
      { id: 'math_3_1_2_2', period: 2, title: '각 알아보기', objectives: ['각의 의미를 알고 각을 그릴 수 있다.'], achievementStandards: ['[4수02-02] 각의 개념을 알고 직각을 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_2_3', period: 3, title: '직각 알아보기', objectives: ['직각을 알고 직각을 찾을 수 있다.'], achievementStandards: ['[4수02-02] 각의 개념을 알고 직각을 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_2_4', period: 4, title: '직각삼각형', objectives: ['직각삼각형의 의미를 알고 찾을 수 있다.'], achievementStandards: ['[4수02-03] 직각삼각형, 직사각형, 정사각형을 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_3_1_2_5', period: 5, title: '직사각형', objectives: ['직사각형의 성질을 알 수 있다.'], achievementStandards: ['[4수02-03] 직각삼각형, 직사각형, 정사각형을 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_3_1_2_6', period: 6, title: '정사각형', objectives: ['정사각형의 성질을 알 수 있다.'], achievementStandards: ['[4수02-03] 직각삼각형, 직사각형, 정사각형을 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_1_3': {
    unitId: 'math_3_1_3',
    unitName: '3. 나눗셈',
    periods: [
      { id: 'math_3_1_3_1', period: 1, title: '똑같이 나누기', objectives: ['똑같이 나누기 상황을 이해할 수 있다.'], achievementStandards: ['[4수01-03] 나눗셈의 의미를 알고, 곱셈과 나눗셈의 관계를 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_3_2', period: 2, title: '나눗셈의 의미', objectives: ['나눗셈의 의미를 이해할 수 있다.'], achievementStandards: ['[4수01-03] 나눗셈의 의미를 알고, 곱셈과 나눗셈의 관계를 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_3_3', period: 3, title: '나눗셈식 알아보기', objectives: ['나눗셈식을 읽고 쓸 수 있다.'], achievementStandards: ['[4수01-03] 나눗셈의 의미를 알고, 곱셈과 나눗셈의 관계를 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_3_4', period: 4, title: '곱셈과 나눗셈의 관계', objectives: ['곱셈과 나눗셈의 관계를 알 수 있다.'], achievementStandards: ['[4수01-03] 나눗셈의 의미를 알고, 곱셈과 나눗셈의 관계를 이해할 수 있다.'], duration: 40 },
      { id: 'math_3_1_3_5', period: 5, title: '곱셈구구로 나눗셈하기', objectives: ['곱셈구구를 이용하여 나눗셈을 할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_3_6', period: 6, title: '나눗셈 활용', objectives: ['나눗셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_1_4': {
    unitId: 'math_3_1_4',
    unitName: '4. 곱셈',
    periods: [
      { id: 'math_3_1_4_1', period: 1, title: '(몇십)×(몇)', objectives: ['(몇십)×(몇)을 계산할 수 있다.'], achievementStandards: ['[4수01-05] (두 자리 수)×(한 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_4_2', period: 2, title: '(두 자리 수)×(한 자리 수) (1)', objectives: ['올림이 없는 (두 자리 수)×(한 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-05] (두 자리 수)×(한 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_4_3', period: 3, title: '(두 자리 수)×(한 자리 수) (2)', objectives: ['올림이 있는 (두 자리 수)×(한 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-05] (두 자리 수)×(한 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_1_4_4', period: 4, title: '곱셈 활용', objectives: ['곱셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-05] (두 자리 수)×(한 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_1_5': {
    unitId: 'math_3_1_5',
    unitName: '5. 길이와 시간',
    periods: [
      { id: 'math_3_1_5_1', period: 1, title: '1cm보다 작은 단위', objectives: ['1mm의 의미를 알 수 있다.'], achievementStandards: ['[4수03-01] 1mm, 1km의 단위를 알고, 필요에 따라 적절한 단위를 선택하여 길이를 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_1_5_2', period: 2, title: '1m보다 큰 단위', objectives: ['1km의 의미를 알 수 있다.'], achievementStandards: ['[4수03-01] 1mm, 1km의 단위를 알고, 필요에 따라 적절한 단위를 선택하여 길이를 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_1_5_3', period: 3, title: '길이의 덧셈과 뺄셈', objectives: ['길이의 덧셈과 뺄셈을 할 수 있다.'], achievementStandards: ['[4수03-01] 1mm, 1km의 단위를 알고, 필요에 따라 적절한 단위를 선택하여 길이를 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_1_5_4', period: 4, title: '1분보다 작은 단위', objectives: ['초의 의미를 알 수 있다.'], achievementStandards: ['[4수03-02] 초의 단위를 알고, 시간을 초 단위까지 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_1_5_5', period: 5, title: '시간의 덧셈', objectives: ['시간의 덧셈을 할 수 있다.'], achievementStandards: ['[4수03-03] 시간의 덧셈과 뺄셈을 할 수 있다.'], duration: 40 },
      { id: 'math_3_1_5_6', period: 6, title: '시간의 뺄셈', objectives: ['시간의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수03-03] 시간의 덧셈과 뺄셈을 할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_1_6': {
    unitId: 'math_3_1_6',
    unitName: '6. 분수와 소수',
    periods: [
      { id: 'math_3_1_6_1', period: 1, title: '똑같이 나누기', objectives: ['전체를 똑같이 나눌 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_1_6_2', period: 2, title: '분수 알아보기', objectives: ['분수의 의미를 알 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_1_6_3', period: 3, title: '분수로 나타내기', objectives: ['전체에 대한 부분을 분수로 나타낼 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_1_6_4', period: 4, title: '분수의 크기 비교', objectives: ['분모가 같은 분수의 크기를 비교할 수 있다.'], achievementStandards: ['[4수01-07] 분모가 같은 분수의 크기를 비교할 수 있다.'], duration: 40 },
      { id: 'math_3_1_6_5', period: 5, title: '소수 알아보기', objectives: ['소수의 의미를 알 수 있다.'], achievementStandards: ['[4수01-08] 소수를 이해하고 읽고 쓸 수 있다.'], duration: 40 },
      { id: 'math_3_1_6_6', period: 6, title: '소수의 크기 비교', objectives: ['소수의 크기를 비교할 수 있다.'], achievementStandards: ['[4수01-09] 소수의 크기를 비교할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'math_3_2_1': {
    unitId: 'math_3_2_1',
    unitName: '1. 곱셈',
    periods: [
      { id: 'math_3_2_1_1', period: 1, title: '(세 자리 수)×(한 자리 수)', objectives: ['(세 자리 수)×(한 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-05] (두 자리 수)×(한 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_1_2', period: 2, title: '(몇십)×(몇십)', objectives: ['(몇십)×(몇십)을 계산할 수 있다.'], achievementStandards: ['[4수01-10] (두 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_1_3', period: 3, title: '(두 자리 수)×(두 자리 수) (1)', objectives: ['올림이 없는 (두 자리 수)×(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-10] (두 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_1_4', period: 4, title: '(두 자리 수)×(두 자리 수) (2)', objectives: ['올림이 있는 (두 자리 수)×(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-10] (두 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_1_5', period: 5, title: '곱셈 활용', objectives: ['곱셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-10] (두 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_2_2': {
    unitId: 'math_3_2_2',
    unitName: '2. 나눗셈',
    periods: [
      { id: 'math_3_2_2_1', period: 1, title: '(몇십)÷(몇)', objectives: ['(몇십)÷(몇)을 계산할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_2_2', period: 2, title: '(두 자리 수)÷(한 자리 수) (1)', objectives: ['나머지가 없는 (두 자리 수)÷(한 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_2_3', period: 3, title: '(두 자리 수)÷(한 자리 수) (2)', objectives: ['나머지가 있는 (두 자리 수)÷(한 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_2_4', period: 4, title: '나눗셈의 검산', objectives: ['나눗셈의 검산을 할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_3_2_2_5', period: 5, title: '나눗셈 활용', objectives: ['나눗셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-04] 곱셈구구를 이용하여 두 자리 수를 한 자리 수로 나누는 나눗셈의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_2_3': {
    unitId: 'math_3_2_3',
    unitName: '3. 원',
    periods: [
      { id: 'math_3_2_3_1', period: 1, title: '원의 중심, 반지름, 지름', objectives: ['원의 중심, 반지름, 지름을 알 수 있다.'], achievementStandards: ['[4수02-04] 원의 중심, 반지름, 지름을 이해하고, 원의 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_3_2_3_2', period: 2, title: '원의 성질', objectives: ['원의 성질을 알 수 있다.'], achievementStandards: ['[4수02-04] 원의 중심, 반지름, 지름을 이해하고, 원의 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_3_2_3_3', period: 3, title: '컴퍼스로 원 그리기', objectives: ['컴퍼스를 사용하여 원을 그릴 수 있다.'], achievementStandards: ['[4수02-05] 컴퍼스를 이용하여 여러 가지 모양을 그릴 수 있다.'], duration: 40 },
      { id: 'math_3_2_3_4', period: 4, title: '원을 이용한 모양 그리기', objectives: ['원을 이용하여 여러 가지 모양을 그릴 수 있다.'], achievementStandards: ['[4수02-05] 컴퍼스를 이용하여 여러 가지 모양을 그릴 수 있다.'], duration: 40 },
    ]
  },
  'math_3_2_4': {
    unitId: 'math_3_2_4',
    unitName: '4. 분수',
    periods: [
      { id: 'math_3_2_4_1', period: 1, title: '분수로 나타내기', objectives: ['전체와 부분의 관계를 분수로 나타낼 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_2_4_2', period: 2, title: '단위분수', objectives: ['단위분수를 알 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_2_4_3', period: 3, title: '진분수, 가분수, 대분수', objectives: ['진분수, 가분수, 대분수를 구별할 수 있다.'], achievementStandards: ['[4수01-06] 분수를 이해하고, 분수의 종류를 알 수 있다.'], duration: 40 },
      { id: 'math_3_2_4_4', period: 4, title: '분수의 크기 비교', objectives: ['분모가 같은 분수의 크기를 비교할 수 있다.'], achievementStandards: ['[4수01-07] 분모가 같은 분수의 크기를 비교할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_2_5': {
    unitId: 'math_3_2_5',
    unitName: '5. 들이와 무게',
    periods: [
      { id: 'math_3_2_5_1', period: 1, title: '들이 비교하기', objectives: ['여러 가지 방법으로 들이를 비교할 수 있다.'], achievementStandards: ['[4수03-04] 들이와 무게의 단위를 알고, 측정할 수 있다.'], duration: 40 },
      { id: 'math_3_2_5_2', period: 2, title: '들이의 단위', objectives: ['들이의 단위 L와 mL를 알 수 있다.'], achievementStandards: ['[4수03-04] 들이와 무게의 단위를 알고, 측정할 수 있다.'], duration: 40 },
      { id: 'math_3_2_5_3', period: 3, title: '들이의 덧셈과 뺄셈', objectives: ['들이의 덧셈과 뺄셈을 할 수 있다.'], achievementStandards: ['[4수03-05] 들이와 무게의 덧셈과 뺄셈을 할 수 있다.'], duration: 40 },
      { id: 'math_3_2_5_4', period: 4, title: '무게 비교하기', objectives: ['여러 가지 방법으로 무게를 비교할 수 있다.'], achievementStandards: ['[4수03-04] 들이와 무게의 단위를 알고, 측정할 수 있다.'], duration: 40 },
      { id: 'math_3_2_5_5', period: 5, title: '무게의 단위', objectives: ['무게의 단위 kg, g, t를 알 수 있다.'], achievementStandards: ['[4수03-04] 들이와 무게의 단위를 알고, 측정할 수 있다.'], duration: 40 },
      { id: 'math_3_2_5_6', period: 6, title: '무게의 덧셈과 뺄셈', objectives: ['무게의 덧셈과 뺄셈을 할 수 있다.'], achievementStandards: ['[4수03-05] 들이와 무게의 덧셈과 뺄셈을 할 수 있다.'], duration: 40 },
    ]
  },
  'math_3_2_6': {
    unitId: 'math_3_2_6',
    unitName: '6. 자료의 정리',
    periods: [
      { id: 'math_3_2_6_1', period: 1, title: '자료를 분류하기', objectives: ['자료를 기준에 따라 분류할 수 있다.'], achievementStandards: ['[4수04-01] 자료를 수집, 분류, 정리하여 목적에 맞는 그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_2_6_2', period: 2, title: '표로 나타내기', objectives: ['자료를 표로 나타낼 수 있다.'], achievementStandards: ['[4수04-01] 자료를 수집, 분류, 정리하여 목적에 맞는 그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_3_2_6_3', period: 3, title: '그림그래프 알아보기', objectives: ['그림그래프를 읽을 수 있다.'], achievementStandards: ['[4수04-02] 그림그래프를 알고 그릴 수 있다.'], duration: 40 },
      { id: 'math_3_2_6_4', period: 4, title: '그림그래프 그리기', objectives: ['자료를 그림그래프로 나타낼 수 있다.'], achievementStandards: ['[4수04-02] 그림그래프를 알고 그릴 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 수학 4학년 ====================
export const MATH_4_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'math_4_1_1': {
    unitId: 'math_4_1_1',
    unitName: '1. 큰 수',
    periods: [
      { id: 'math_4_1_1_1', period: 1, title: '만 알아보기', objectives: ['만의 의미를 알 수 있다.'], achievementStandards: ['[4수01-11] 큰 수의 범위를 억, 조까지 확장하고, 십진기수법을 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_1_2', period: 2, title: '십만, 백만, 천만', objectives: ['십만, 백만, 천만을 알 수 있다.'], achievementStandards: ['[4수01-11] 큰 수의 범위를 억, 조까지 확장하고, 십진기수법을 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_1_3', period: 3, title: '억과 조', objectives: ['억과 조를 알 수 있다.'], achievementStandards: ['[4수01-11] 큰 수의 범위를 억, 조까지 확장하고, 십진기수법을 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_1_4', period: 4, title: '뛰어 세기', objectives: ['큰 수를 뛰어 셀 수 있다.'], achievementStandards: ['[4수01-11] 큰 수의 범위를 억, 조까지 확장하고, 십진기수법을 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_1_5', period: 5, title: '큰 수의 크기 비교', objectives: ['큰 수의 크기를 비교할 수 있다.'], achievementStandards: ['[4수01-12] 큰 수의 크기를 비교할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_1_2': {
    unitId: 'math_4_1_2',
    unitName: '2. 각도',
    periods: [
      { id: 'math_4_1_2_1', period: 1, title: '각도 알아보기', objectives: ['각도의 의미를 알 수 있다.'], achievementStandards: ['[4수02-06] 각의 크기를 각도라 하고, 1°를 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_2_2', period: 2, title: '각도 재기', objectives: ['각도기로 각도를 잴 수 있다.'], achievementStandards: ['[4수02-07] 각도기를 이용하여 각도를 측정하고, 각도의 합과 차를 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_2_3', period: 3, title: '각 그리기', objectives: ['주어진 각도의 각을 그릴 수 있다.'], achievementStandards: ['[4수02-07] 각도기를 이용하여 각도를 측정하고, 각도의 합과 차를 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_2_4', period: 4, title: '각도의 합과 차', objectives: ['각도의 합과 차를 구할 수 있다.'], achievementStandards: ['[4수02-07] 각도기를 이용하여 각도를 측정하고, 각도의 합과 차를 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_2_5', period: 5, title: '삼각형의 세 각의 크기의 합', objectives: ['삼각형의 세 각의 크기의 합이 180°임을 알 수 있다.'], achievementStandards: ['[4수02-08] 삼각형의 세 각의 크기의 합이 180°임을 알 수 있다.'], duration: 40 },
      { id: 'math_4_1_2_6', period: 6, title: '사각형의 네 각의 크기의 합', objectives: ['사각형의 네 각의 크기의 합이 360°임을 알 수 있다.'], achievementStandards: ['[4수02-09] 사각형의 네 각의 크기의 합이 360°임을 알 수 있다.'], duration: 40 },
    ]
  },
  'math_4_1_3': {
    unitId: 'math_4_1_3',
    unitName: '3. 곱셈과 나눗셈',
    periods: [
      { id: 'math_4_1_3_1', period: 1, title: '(세 자리 수)×(두 자리 수)', objectives: ['(세 자리 수)×(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-13] (세 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_3_2', period: 2, title: '곱셈 활용', objectives: ['곱셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-13] (세 자리 수)×(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_3_3', period: 3, title: '(두 자리 수)÷(두 자리 수)', objectives: ['(두 자리 수)÷(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-14] (두, 세 자리 수)÷(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_3_4', period: 4, title: '(세 자리 수)÷(두 자리 수) (1)', objectives: ['몫이 한 자리 수인 (세 자리 수)÷(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-14] (두, 세 자리 수)÷(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_3_5', period: 5, title: '(세 자리 수)÷(두 자리 수) (2)', objectives: ['몫이 두 자리 수인 (세 자리 수)÷(두 자리 수)를 계산할 수 있다.'], achievementStandards: ['[4수01-14] (두, 세 자리 수)÷(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_1_3_6', period: 6, title: '나눗셈 활용', objectives: ['나눗셈을 실생활 문제에 활용할 수 있다.'], achievementStandards: ['[4수01-14] (두, 세 자리 수)÷(두 자리 수)의 계산 원리를 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_1_4': {
    unitId: 'math_4_1_4',
    unitName: '4. 평면도형의 이동',
    periods: [
      { id: 'math_4_1_4_1', period: 1, title: '평면도형 밀기', objectives: ['평면도형을 밀 수 있다.'], achievementStandards: ['[4수02-10] 평면도형의 이동을 이용하여 규칙적인 무늬를 꾸밀 수 있다.'], duration: 40 },
      { id: 'math_4_1_4_2', period: 2, title: '평면도형 뒤집기', objectives: ['평면도형을 뒤집을 수 있다.'], achievementStandards: ['[4수02-10] 평면도형의 이동을 이용하여 규칙적인 무늬를 꾸밀 수 있다.'], duration: 40 },
      { id: 'math_4_1_4_3', period: 3, title: '평면도형 돌리기', objectives: ['평면도형을 돌릴 수 있다.'], achievementStandards: ['[4수02-10] 평면도형의 이동을 이용하여 규칙적인 무늬를 꾸밀 수 있다.'], duration: 40 },
      { id: 'math_4_1_4_4', period: 4, title: '무늬 만들기', objectives: ['평면도형의 이동을 이용하여 무늬를 만들 수 있다.'], achievementStandards: ['[4수02-10] 평면도형의 이동을 이용하여 규칙적인 무늬를 꾸밀 수 있다.'], duration: 40 },
    ]
  },
  'math_4_1_5': {
    unitId: 'math_4_1_5',
    unitName: '5. 막대그래프',
    periods: [
      { id: 'math_4_1_5_1', period: 1, title: '막대그래프 알아보기', objectives: ['막대그래프를 알 수 있다.'], achievementStandards: ['[4수04-03] 자료를 막대그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_5_2', period: 2, title: '막대그래프 해석하기', objectives: ['막대그래프를 읽고 해석할 수 있다.'], achievementStandards: ['[4수04-03] 자료를 막대그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_5_3', period: 3, title: '막대그래프 그리기', objectives: ['자료를 막대그래프로 나타낼 수 있다.'], achievementStandards: ['[4수04-03] 자료를 막대그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_5_4', period: 4, title: '막대그래프 활용', objectives: ['막대그래프를 실생활에 활용할 수 있다.'], achievementStandards: ['[4수04-03] 자료를 막대그래프로 나타낼 수 있다.'], duration: 40 },
    ]
  },
  'math_4_1_6': {
    unitId: 'math_4_1_6',
    unitName: '6. 규칙 찾기',
    periods: [
      { id: 'math_4_1_6_1', period: 1, title: '수의 배열에서 규칙 찾기', objectives: ['수의 배열에서 규칙을 찾을 수 있다.'], achievementStandards: ['[4수05-01] 다양한 현상에서 두 양 사이의 대응 관계를 찾아 식으로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_6_2', period: 2, title: '도형의 배열에서 규칙 찾기', objectives: ['도형의 배열에서 규칙을 찾을 수 있다.'], achievementStandards: ['[4수05-01] 다양한 현상에서 두 양 사이의 대응 관계를 찾아 식으로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_6_3', period: 3, title: '계산식에서 규칙 찾기', objectives: ['계산식에서 규칙을 찾을 수 있다.'], achievementStandards: ['[4수05-01] 다양한 현상에서 두 양 사이의 대응 관계를 찾아 식으로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_1_6_4', period: 4, title: '규칙을 찾아 문제 해결하기', objectives: ['규칙을 찾아 문제를 해결할 수 있다.'], achievementStandards: ['[4수05-01] 다양한 현상에서 두 양 사이의 대응 관계를 찾아 식으로 나타낼 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'math_4_2_1': {
    unitId: 'math_4_2_1',
    unitName: '1. 분수의 덧셈과 뺄셈',
    periods: [
      { id: 'math_4_2_1_1', period: 1, title: '진분수의 덧셈', objectives: ['진분수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-15] 분모가 같은 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_1_2', period: 2, title: '진분수의 뺄셈', objectives: ['진분수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-15] 분모가 같은 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_1_3', period: 3, title: '대분수의 덧셈', objectives: ['대분수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-15] 분모가 같은 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_1_4', period: 4, title: '대분수의 뺄셈', objectives: ['대분수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-15] 분모가 같은 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_1_5', period: 5, title: '분수의 덧셈과 뺄셈 활용', objectives: ['분수의 덧셈과 뺄셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[4수01-15] 분모가 같은 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_2_2': {
    unitId: 'math_4_2_2',
    unitName: '2. 삼각형',
    periods: [
      { id: 'math_4_2_2_1', period: 1, title: '이등변삼각형', objectives: ['이등변삼각형의 성질을 알 수 있다.'], achievementStandards: ['[4수02-11] 이등변삼각형과 정삼각형을 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_2_2', period: 2, title: '정삼각형', objectives: ['정삼각형의 성질을 알 수 있다.'], achievementStandards: ['[4수02-11] 이등변삼각형과 정삼각형을 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_2_3', period: 3, title: '예각삼각형과 둔각삼각형', objectives: ['예각삼각형과 둔각삼각형을 알 수 있다.'], achievementStandards: ['[4수02-12] 예각삼각형과 둔각삼각형을 이해하고 분류할 수 있다.'], duration: 40 },
      { id: 'math_4_2_2_4', period: 4, title: '삼각형 분류하기', objectives: ['여러 기준으로 삼각형을 분류할 수 있다.'], achievementStandards: ['[4수02-12] 예각삼각형과 둔각삼각형을 이해하고 분류할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_2_3': {
    unitId: 'math_4_2_3',
    unitName: '3. 소수의 덧셈과 뺄셈',
    periods: [
      { id: 'math_4_2_3_1', period: 1, title: '소수 두 자리 수', objectives: ['소수 두 자리 수를 알 수 있다.'], achievementStandards: ['[4수01-16] 소수의 자릿값을 이해하고, 소수의 크기를 비교할 수 있다.'], duration: 40 },
      { id: 'math_4_2_3_2', period: 2, title: '소수 세 자리 수', objectives: ['소수 세 자리 수를 알 수 있다.'], achievementStandards: ['[4수01-16] 소수의 자릿값을 이해하고, 소수의 크기를 비교할 수 있다.'], duration: 40 },
      { id: 'math_4_2_3_3', period: 3, title: '소수의 크기 비교', objectives: ['소수의 크기를 비교할 수 있다.'], achievementStandards: ['[4수01-16] 소수의 자릿값을 이해하고, 소수의 크기를 비교할 수 있다.'], duration: 40 },
      { id: 'math_4_2_3_4', period: 4, title: '소수의 덧셈', objectives: ['소수의 덧셈을 할 수 있다.'], achievementStandards: ['[4수01-17] 소수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_3_5', period: 5, title: '소수의 뺄셈', objectives: ['소수의 뺄셈을 할 수 있다.'], achievementStandards: ['[4수01-17] 소수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_4_2_3_6', period: 6, title: '소수의 덧셈과 뺄셈 활용', objectives: ['소수의 덧셈과 뺄셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[4수01-17] 소수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_2_4': {
    unitId: 'math_4_2_4',
    unitName: '4. 사각형',
    periods: [
      { id: 'math_4_2_4_1', period: 1, title: '수직과 수선', objectives: ['수직과 수선을 알 수 있다.'], achievementStandards: ['[4수02-13] 수직과 평행을 이해하고, 수직이나 평행인 관계를 찾을 수 있다.'], duration: 40 },
      { id: 'math_4_2_4_2', period: 2, title: '평행과 평행선', objectives: ['평행과 평행선을 알 수 있다.'], achievementStandards: ['[4수02-13] 수직과 평행을 이해하고, 수직이나 평행인 관계를 찾을 수 있다.'], duration: 40 },
      { id: 'math_4_2_4_3', period: 3, title: '평행선 사이의 거리', objectives: ['평행선 사이의 거리를 알 수 있다.'], achievementStandards: ['[4수02-13] 수직과 평행을 이해하고, 수직이나 평행인 관계를 찾을 수 있다.'], duration: 40 },
      { id: 'math_4_2_4_4', period: 4, title: '사다리꼴', objectives: ['사다리꼴의 성질을 알 수 있다.'], achievementStandards: ['[4수02-14] 사다리꼴, 평행사변형, 마름모를 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_4_5', period: 5, title: '평행사변형', objectives: ['평행사변형의 성질을 알 수 있다.'], achievementStandards: ['[4수02-14] 사다리꼴, 평행사변형, 마름모를 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_4_6', period: 6, title: '마름모', objectives: ['마름모의 성질을 알 수 있다.'], achievementStandards: ['[4수02-14] 사다리꼴, 평행사변형, 마름모를 이해하고 성질을 탐구할 수 있다.'], duration: 40 },
    ]
  },
  'math_4_2_5': {
    unitId: 'math_4_2_5',
    unitName: '5. 꺾은선그래프',
    periods: [
      { id: 'math_4_2_5_1', period: 1, title: '꺾은선그래프 알아보기', objectives: ['꺾은선그래프를 알 수 있다.'], achievementStandards: ['[4수04-04] 자료를 꺾은선그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_2_5_2', period: 2, title: '꺾은선그래프 해석하기', objectives: ['꺾은선그래프를 읽고 해석할 수 있다.'], achievementStandards: ['[4수04-04] 자료를 꺾은선그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_2_5_3', period: 3, title: '꺾은선그래프 그리기', objectives: ['자료를 꺾은선그래프로 나타낼 수 있다.'], achievementStandards: ['[4수04-04] 자료를 꺾은선그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_4_2_5_4', period: 4, title: '꺾은선그래프 활용', objectives: ['꺾은선그래프를 실생활에 활용할 수 있다.'], achievementStandards: ['[4수04-04] 자료를 꺾은선그래프로 나타낼 수 있다.'], duration: 40 },
    ]
  },
  'math_4_2_6': {
    unitId: 'math_4_2_6',
    unitName: '6. 다각형',
    periods: [
      { id: 'math_4_2_6_1', period: 1, title: '다각형 알아보기', objectives: ['다각형의 의미를 알 수 있다.'], achievementStandards: ['[4수02-15] 다각형을 이해하고 다각형의 이름을 알 수 있다.'], duration: 40 },
      { id: 'math_4_2_6_2', period: 2, title: '정다각형 알아보기', objectives: ['정다각형의 의미를 알 수 있다.'], achievementStandards: ['[4수02-16] 정다각형을 이해하고, 정다각형의 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_6_3', period: 3, title: '대각선', objectives: ['대각선의 의미를 알고 그릴 수 있다.'], achievementStandards: ['[4수02-17] 대각선의 의미를 알고, 대각선의 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_4_2_6_4', period: 4, title: '모양 만들기', objectives: ['다각형을 이용하여 여러 가지 모양을 만들 수 있다.'], achievementStandards: ['[4수02-18] 모양 조각으로 여러 가지 모양을 만들 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 수학 5학년 ====================
export const MATH_5_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'math_5_1_1': {
    unitId: 'math_5_1_1',
    unitName: '1. 자연수의 혼합 계산',
    periods: [
      { id: 'math_5_1_1_1', period: 1, title: '덧셈과 뺄셈이 섞여 있는 식', objectives: ['덧셈과 뺄셈이 섞여 있는 식을 계산할 수 있다.'], achievementStandards: ['[6수01-01] 자연수의 혼합 계산을 할 수 있다.'], duration: 40 },
      { id: 'math_5_1_1_2', period: 2, title: '곱셈과 나눗셈이 섞여 있는 식', objectives: ['곱셈과 나눗셈이 섞여 있는 식을 계산할 수 있다.'], achievementStandards: ['[6수01-01] 자연수의 혼합 계산을 할 수 있다.'], duration: 40 },
      { id: 'math_5_1_1_3', period: 3, title: '덧셈, 뺄셈, 곱셈이 섞여 있는 식', objectives: ['덧셈, 뺄셈, 곱셈이 섞여 있는 식을 계산할 수 있다.'], achievementStandards: ['[6수01-01] 자연수의 혼합 계산을 할 수 있다.'], duration: 40 },
      { id: 'math_5_1_1_4', period: 4, title: '덧셈, 뺄셈, 나눗셈이 섞여 있는 식', objectives: ['덧셈, 뺄셈, 나눗셈이 섞여 있는 식을 계산할 수 있다.'], achievementStandards: ['[6수01-01] 자연수의 혼합 계산을 할 수 있다.'], duration: 40 },
      { id: 'math_5_1_1_5', period: 5, title: '괄호가 있는 식의 계산', objectives: ['괄호가 있는 식을 계산할 수 있다.'], achievementStandards: ['[6수01-01] 자연수의 혼합 계산을 할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_1_2': {
    unitId: 'math_5_1_2',
    unitName: '2. 약수와 배수',
    periods: [
      { id: 'math_5_1_2_1', period: 1, title: '약수', objectives: ['약수의 의미를 알고 구할 수 있다.'], achievementStandards: ['[6수01-02] 약수와 배수의 관계를 이해하고, 약수와 배수를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_2_2', period: 2, title: '배수', objectives: ['배수의 의미를 알고 구할 수 있다.'], achievementStandards: ['[6수01-02] 약수와 배수의 관계를 이해하고, 약수와 배수를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_2_3', period: 3, title: '약수와 배수의 관계', objectives: ['약수와 배수의 관계를 알 수 있다.'], achievementStandards: ['[6수01-02] 약수와 배수의 관계를 이해하고, 약수와 배수를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_2_4', period: 4, title: '공약수와 최대공약수', objectives: ['공약수와 최대공약수를 구할 수 있다.'], achievementStandards: ['[6수01-03] 최대공약수와 최소공배수를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_2_5', period: 5, title: '공배수와 최소공배수', objectives: ['공배수와 최소공배수를 구할 수 있다.'], achievementStandards: ['[6수01-03] 최대공약수와 최소공배수를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_2_6', period: 6, title: '약수와 배수 활용', objectives: ['약수와 배수를 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-03] 최대공약수와 최소공배수를 구할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_1_3': {
    unitId: 'math_5_1_3',
    unitName: '3. 규칙과 대응',
    periods: [
      { id: 'math_5_1_3_1', period: 1, title: '두 양 사이의 관계', objectives: ['두 양 사이의 관계를 알 수 있다.'], achievementStandards: ['[6수05-01] 두 양의 크기를 비교하는 상황을 나눗셈이나 분수로 나타내고, 비의 개념을 이해할 수 있다.'], duration: 40 },
      { id: 'math_5_1_3_2', period: 2, title: '대응 관계를 식으로 나타내기', objectives: ['대응 관계를 식으로 나타낼 수 있다.'], achievementStandards: ['[6수05-01] 두 양의 크기를 비교하는 상황을 나눗셈이나 분수로 나타내고, 비의 개념을 이해할 수 있다.'], duration: 40 },
      { id: 'math_5_1_3_3', period: 3, title: '대응 관계를 활용하기', objectives: ['대응 관계를 활용하여 문제를 해결할 수 있다.'], achievementStandards: ['[6수05-01] 두 양의 크기를 비교하는 상황을 나눗셈이나 분수로 나타내고, 비의 개념을 이해할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_1_4': {
    unitId: 'math_5_1_4',
    unitName: '4. 약분과 통분',
    periods: [
      { id: 'math_5_1_4_1', period: 1, title: '크기가 같은 분수', objectives: ['크기가 같은 분수를 알 수 있다.'], achievementStandards: ['[6수01-04] 분수를 약분하고 통분할 수 있다.'], duration: 40 },
      { id: 'math_5_1_4_2', period: 2, title: '약분', objectives: ['분수를 약분할 수 있다.'], achievementStandards: ['[6수01-04] 분수를 약분하고 통분할 수 있다.'], duration: 40 },
      { id: 'math_5_1_4_3', period: 3, title: '통분', objectives: ['분수를 통분할 수 있다.'], achievementStandards: ['[6수01-04] 분수를 약분하고 통분할 수 있다.'], duration: 40 },
      { id: 'math_5_1_4_4', period: 4, title: '분수의 크기 비교', objectives: ['분모가 다른 분수의 크기를 비교할 수 있다.'], achievementStandards: ['[6수01-05] 분모가 다른 분수의 크기를 비교할 수 있다.'], duration: 40 },
      { id: 'math_5_1_4_5', period: 5, title: '분수와 소수의 관계', objectives: ['분수와 소수의 관계를 알 수 있다.'], achievementStandards: ['[6수01-06] 분수와 소수의 관계를 알 수 있다.'], duration: 40 },
    ]
  },
  'math_5_1_5': {
    unitId: 'math_5_1_5',
    unitName: '5. 분수의 덧셈과 뺄셈',
    periods: [
      { id: 'math_5_1_5_1', period: 1, title: '분모가 다른 진분수의 덧셈', objectives: ['분모가 다른 진분수의 덧셈을 할 수 있다.'], achievementStandards: ['[6수01-07] 분모가 다른 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_1_5_2', period: 2, title: '분모가 다른 진분수의 뺄셈', objectives: ['분모가 다른 진분수의 뺄셈을 할 수 있다.'], achievementStandards: ['[6수01-07] 분모가 다른 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_1_5_3', period: 3, title: '분모가 다른 대분수의 덧셈', objectives: ['분모가 다른 대분수의 덧셈을 할 수 있다.'], achievementStandards: ['[6수01-07] 분모가 다른 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_1_5_4', period: 4, title: '분모가 다른 대분수의 뺄셈', objectives: ['분모가 다른 대분수의 뺄셈을 할 수 있다.'], achievementStandards: ['[6수01-07] 분모가 다른 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_1_5_5', period: 5, title: '분수의 덧셈과 뺄셈 활용', objectives: ['분수의 덧셈과 뺄셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-07] 분모가 다른 분수의 덧셈과 뺄셈을 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_1_6': {
    unitId: 'math_5_1_6',
    unitName: '6. 다각형의 둘레와 넓이',
    periods: [
      { id: 'math_5_1_6_1', period: 1, title: '정다각형의 둘레', objectives: ['정다각형의 둘레를 구할 수 있다.'], achievementStandards: ['[6수03-01] 직사각형의 둘레와 넓이, 정사각형의 둘레와 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_2', period: 2, title: '넓이의 단위', objectives: ['넓이의 단위를 알 수 있다.'], achievementStandards: ['[6수03-02] 1㎠와 1㎡의 관계를 이해하고, 넓이의 단위를 사용할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_3', period: 3, title: '직사각형의 넓이', objectives: ['직사각형의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-01] 직사각형의 둘레와 넓이, 정사각형의 둘레와 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_4', period: 4, title: '평행사변형의 넓이', objectives: ['평행사변형의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-03] 평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_5', period: 5, title: '삼각형의 넓이', objectives: ['삼각형의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-03] 평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_6', period: 6, title: '사다리꼴의 넓이', objectives: ['사다리꼴의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-03] 평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_5_1_6_7', period: 7, title: '마름모의 넓이', objectives: ['마름모의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-03] 평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'math_5_2_1': {
    unitId: 'math_5_2_1',
    unitName: '1. 수의 범위와 어림하기',
    periods: [
      { id: 'math_5_2_1_1', period: 1, title: '이상과 이하', objectives: ['이상과 이하를 알 수 있다.'], achievementStandards: ['[6수01-08] 이상, 이하, 초과, 미만을 알고, 수의 범위를 이용하여 문제를 해결할 수 있다.'], duration: 40 },
      { id: 'math_5_2_1_2', period: 2, title: '초과와 미만', objectives: ['초과와 미만을 알 수 있다.'], achievementStandards: ['[6수01-08] 이상, 이하, 초과, 미만을 알고, 수의 범위를 이용하여 문제를 해결할 수 있다.'], duration: 40 },
      { id: 'math_5_2_1_3', period: 3, title: '올림', objectives: ['올림을 알고 활용할 수 있다.'], achievementStandards: ['[6수01-09] 올림, 버림, 반올림을 이해하고, 어림한 결과를 문제 상황에 맞게 해석할 수 있다.'], duration: 40 },
      { id: 'math_5_2_1_4', period: 4, title: '버림', objectives: ['버림을 알고 활용할 수 있다.'], achievementStandards: ['[6수01-09] 올림, 버림, 반올림을 이해하고, 어림한 결과를 문제 상황에 맞게 해석할 수 있다.'], duration: 40 },
      { id: 'math_5_2_1_5', period: 5, title: '반올림', objectives: ['반올림을 알고 활용할 수 있다.'], achievementStandards: ['[6수01-09] 올림, 버림, 반올림을 이해하고, 어림한 결과를 문제 상황에 맞게 해석할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_2_2': {
    unitId: 'math_5_2_2',
    unitName: '2. 분수의 곱셈',
    periods: [
      { id: 'math_5_2_2_1', period: 1, title: '(분수)×(자연수)', objectives: ['(분수)×(자연수)를 계산할 수 있다.'], achievementStandards: ['[6수01-10] 분수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_2_2', period: 2, title: '(자연수)×(분수)', objectives: ['(자연수)×(분수)를 계산할 수 있다.'], achievementStandards: ['[6수01-10] 분수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_2_3', period: 3, title: '(진분수)×(진분수)', objectives: ['(진분수)×(진분수)를 계산할 수 있다.'], achievementStandards: ['[6수01-10] 분수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_2_4', period: 4, title: '(대분수)×(대분수)', objectives: ['(대분수)×(대분수)를 계산할 수 있다.'], achievementStandards: ['[6수01-10] 분수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_2_5', period: 5, title: '분수의 곱셈 활용', objectives: ['분수의 곱셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-10] 분수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_2_3': {
    unitId: 'math_5_2_3',
    unitName: '3. 합동과 대칭',
    periods: [
      { id: 'math_5_2_3_1', period: 1, title: '합동', objectives: ['합동의 의미를 알 수 있다.'], achievementStandards: ['[6수02-01] 합동의 의미를 이해하고, 합동인 도형을 찾을 수 있다.'], duration: 40 },
      { id: 'math_5_2_3_2', period: 2, title: '합동인 도형의 성질', objectives: ['합동인 도형의 성질을 알 수 있다.'], achievementStandards: ['[6수02-02] 합동인 도형의 성질을 이해하고 활용할 수 있다.'], duration: 40 },
      { id: 'math_5_2_3_3', period: 3, title: '선대칭도형', objectives: ['선대칭도형을 알 수 있다.'], achievementStandards: ['[6수02-03] 선대칭도형과 점대칭도형을 이해하고, 그릴 수 있다.'], duration: 40 },
      { id: 'math_5_2_3_4', period: 4, title: '선대칭도형의 성질', objectives: ['선대칭도형의 성질을 알 수 있다.'], achievementStandards: ['[6수02-03] 선대칭도형과 점대칭도형을 이해하고, 그릴 수 있다.'], duration: 40 },
      { id: 'math_5_2_3_5', period: 5, title: '점대칭도형', objectives: ['점대칭도형을 알 수 있다.'], achievementStandards: ['[6수02-03] 선대칭도형과 점대칭도형을 이해하고, 그릴 수 있다.'], duration: 40 },
      { id: 'math_5_2_3_6', period: 6, title: '점대칭도형의 성질', objectives: ['점대칭도형의 성질을 알 수 있다.'], achievementStandards: ['[6수02-03] 선대칭도형과 점대칭도형을 이해하고, 그릴 수 있다.'], duration: 40 },
    ]
  },
  'math_5_2_4': {
    unitId: 'math_5_2_4',
    unitName: '4. 소수의 곱셈',
    periods: [
      { id: 'math_5_2_4_1', period: 1, title: '(소수)×(자연수)', objectives: ['(소수)×(자연수)를 계산할 수 있다.'], achievementStandards: ['[6수01-11] 소수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_4_2', period: 2, title: '(자연수)×(소수)', objectives: ['(자연수)×(소수)를 계산할 수 있다.'], achievementStandards: ['[6수01-11] 소수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_4_3', period: 3, title: '(소수)×(소수)', objectives: ['(소수)×(소수)를 계산할 수 있다.'], achievementStandards: ['[6수01-11] 소수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_4_4', period: 4, title: '곱의 소수점 위치', objectives: ['곱의 소수점 위치를 알 수 있다.'], achievementStandards: ['[6수01-11] 소수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_5_2_4_5', period: 5, title: '소수의 곱셈 활용', objectives: ['소수의 곱셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-11] 소수의 곱셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_5_2_5': {
    unitId: 'math_5_2_5',
    unitName: '5. 직육면체',
    periods: [
      { id: 'math_5_2_5_1', period: 1, title: '직육면체', objectives: ['직육면체를 알 수 있다.'], achievementStandards: ['[6수02-04] 직육면체와 정육면체를 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_5_2_5_2', period: 2, title: '정육면체', objectives: ['정육면체를 알 수 있다.'], achievementStandards: ['[6수02-04] 직육면체와 정육면체를 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_5_2_5_3', period: 3, title: '직육면체의 성질', objectives: ['직육면체의 성질을 알 수 있다.'], achievementStandards: ['[6수02-04] 직육면체와 정육면체를 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_5_2_5_4', period: 4, title: '직육면체의 전개도', objectives: ['직육면체의 전개도를 그릴 수 있다.'], achievementStandards: ['[6수02-05] 직육면체의 전개도를 그릴 수 있다.'], duration: 40 },
      { id: 'math_5_2_5_5', period: 5, title: '정육면체의 전개도', objectives: ['정육면체의 전개도를 그릴 수 있다.'], achievementStandards: ['[6수02-05] 직육면체의 전개도를 그릴 수 있다.'], duration: 40 },
    ]
  },
  'math_5_2_6': {
    unitId: 'math_5_2_6',
    unitName: '6. 평균과 가능성',
    periods: [
      { id: 'math_5_2_6_1', period: 1, title: '평균', objectives: ['평균의 의미를 알고 구할 수 있다.'], achievementStandards: ['[6수04-01] 평균의 의미를 이해하고, 평균을 구할 수 있다.'], duration: 40 },
      { id: 'math_5_2_6_2', period: 2, title: '평균 구하기', objectives: ['평균을 여러 가지 방법으로 구할 수 있다.'], achievementStandards: ['[6수04-01] 평균의 의미를 이해하고, 평균을 구할 수 있다.'], duration: 40 },
      { id: 'math_5_2_6_3', period: 3, title: '평균 활용하기', objectives: ['평균을 활용하여 문제를 해결할 수 있다.'], achievementStandards: ['[6수04-02] 평균을 활용하여 문제를 해결할 수 있다.'], duration: 40 },
      { id: 'math_5_2_6_4', period: 4, title: '일이 일어날 가능성', objectives: ['일이 일어날 가능성을 비교할 수 있다.'], achievementStandards: ['[6수04-03] 사건이 일어날 가능성을 말로 표현하거나, 0과 1 사이의 수로 표현할 수 있다.'], duration: 40 },
      { id: 'math_5_2_6_5', period: 5, title: '가능성을 수로 나타내기', objectives: ['가능성을 수로 나타낼 수 있다.'], achievementStandards: ['[6수04-03] 사건이 일어날 가능성을 말로 표현하거나, 0과 1 사이의 수로 표현할 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 수학 6학년 ====================
export const MATH_6_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'math_6_1_1': {
    unitId: 'math_6_1_1',
    unitName: '1. 분수의 나눗셈',
    periods: [
      { id: 'math_6_1_1_1', period: 1, title: '(분수)÷(자연수)', objectives: ['(분수)÷(자연수)를 계산할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_1_2', period: 2, title: '(자연수)÷(분수)', objectives: ['(자연수)÷(분수)를 계산할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_1_3', period: 3, title: '(분수)÷(분수)', objectives: ['(분수)÷(분수)를 계산할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_1_4', period: 4, title: '분수의 나눗셈 활용', objectives: ['분수의 나눗셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_1_2': {
    unitId: 'math_6_1_2',
    unitName: '2. 각기둥과 각뿔',
    periods: [
      { id: 'math_6_1_2_1', period: 1, title: '각기둥', objectives: ['각기둥을 알 수 있다.'], achievementStandards: ['[6수02-06] 각기둥과 각뿔을 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_6_1_2_2', period: 2, title: '각기둥의 성질', objectives: ['각기둥의 성질을 알 수 있다.'], achievementStandards: ['[6수02-06] 각기둥과 각뿔을 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_6_1_2_3', period: 3, title: '각기둥의 전개도', objectives: ['각기둥의 전개도를 그릴 수 있다.'], achievementStandards: ['[6수02-07] 각기둥의 전개도를 그릴 수 있다.'], duration: 40 },
      { id: 'math_6_1_2_4', period: 4, title: '각뿔', objectives: ['각뿔을 알 수 있다.'], achievementStandards: ['[6수02-06] 각기둥과 각뿔을 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'math_6_1_2_5', period: 5, title: '각뿔의 성질', objectives: ['각뿔의 성질을 알 수 있다.'], achievementStandards: ['[6수02-06] 각기둥과 각뿔을 이해하고, 그 성질을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_1_3': {
    unitId: 'math_6_1_3',
    unitName: '3. 소수의 나눗셈',
    periods: [
      { id: 'math_6_1_3_1', period: 1, title: '(소수)÷(자연수)', objectives: ['(소수)÷(자연수)를 계산할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_3_2', period: 2, title: '(자연수)÷(소수)', objectives: ['(자연수)÷(소수)를 계산할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_3_3', period: 3, title: '(소수)÷(소수)', objectives: ['(소수)÷(소수)를 계산할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_3_4', period: 4, title: '몫을 반올림하여 나타내기', objectives: ['몫을 반올림하여 나타낼 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_1_3_5', period: 5, title: '소수의 나눗셈 활용', objectives: ['소수의 나눗셈을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_1_4': {
    unitId: 'math_6_1_4',
    unitName: '4. 비와 비율',
    periods: [
      { id: 'math_6_1_4_1', period: 1, title: '두 수의 비교', objectives: ['두 수를 비교할 수 있다.'], achievementStandards: ['[6수05-01] 두 양의 크기를 비교하는 상황을 나눗셈이나 분수로 나타내고, 비의 개념을 이해할 수 있다.'], duration: 40 },
      { id: 'math_6_1_4_2', period: 2, title: '비', objectives: ['비의 의미를 알 수 있다.'], achievementStandards: ['[6수05-01] 두 양의 크기를 비교하는 상황을 나눗셈이나 분수로 나타내고, 비의 개념을 이해할 수 있다.'], duration: 40 },
      { id: 'math_6_1_4_3', period: 3, title: '비율', objectives: ['비율의 의미를 알 수 있다.'], achievementStandards: ['[6수05-02] 비율을 이해하고, 비율을 분수, 소수, 백분율로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_4_4', period: 4, title: '백분율', objectives: ['백분율을 알 수 있다.'], achievementStandards: ['[6수05-02] 비율을 이해하고, 비율을 분수, 소수, 백분율로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_4_5', period: 5, title: '비율 활용', objectives: ['비율을 실생활에 활용할 수 있다.'], achievementStandards: ['[6수05-03] 비율이 사용되는 실생활 상황을 찾아 비율로 해결할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_1_5': {
    unitId: 'math_6_1_5',
    unitName: '5. 여러 가지 그래프',
    periods: [
      { id: 'math_6_1_5_1', period: 1, title: '띠그래프', objectives: ['띠그래프를 알 수 있다.'], achievementStandards: ['[6수04-04] 자료를 띠그래프나 원그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_5_2', period: 2, title: '띠그래프 그리기', objectives: ['띠그래프를 그릴 수 있다.'], achievementStandards: ['[6수04-04] 자료를 띠그래프나 원그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_5_3', period: 3, title: '원그래프', objectives: ['원그래프를 알 수 있다.'], achievementStandards: ['[6수04-04] 자료를 띠그래프나 원그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_5_4', period: 4, title: '원그래프 그리기', objectives: ['원그래프를 그릴 수 있다.'], achievementStandards: ['[6수04-04] 자료를 띠그래프나 원그래프로 나타낼 수 있다.'], duration: 40 },
      { id: 'math_6_1_5_5', period: 5, title: '그래프 해석하기', objectives: ['여러 가지 그래프를 해석할 수 있다.'], achievementStandards: ['[6수04-05] 목적에 맞게 자료를 수집, 분류, 정리하여 그래프로 나타내고, 그래프를 해석할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_1_6': {
    unitId: 'math_6_1_6',
    unitName: '6. 직육면체의 부피와 겉넓이',
    periods: [
      { id: 'math_6_1_6_1', period: 1, title: '직육면체의 부피 비교', objectives: ['직육면체의 부피를 비교할 수 있다.'], achievementStandards: ['[6수03-04] 직육면체의 부피와 겉넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_6_1_6_2', period: 2, title: '부피의 단위', objectives: ['부피의 단위를 알 수 있다.'], achievementStandards: ['[6수03-05] 1㎤와 1㎥의 관계를 이해하고, 부피의 단위를 사용할 수 있다.'], duration: 40 },
      { id: 'math_6_1_6_3', period: 3, title: '직육면체의 부피', objectives: ['직육면체의 부피를 구할 수 있다.'], achievementStandards: ['[6수03-04] 직육면체의 부피와 겉넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_6_1_6_4', period: 4, title: '직육면체의 겉넓이', objectives: ['직육면체의 겉넓이를 구할 수 있다.'], achievementStandards: ['[6수03-04] 직육면체의 부피와 겉넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_6_1_6_5', period: 5, title: '부피와 겉넓이 활용', objectives: ['부피와 겉넓이를 실생활에 활용할 수 있다.'], achievementStandards: ['[6수03-04] 직육면체의 부피와 겉넓이를 구할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'math_6_2_1': {
    unitId: 'math_6_2_1',
    unitName: '1. 분수의 나눗셈',
    periods: [
      { id: 'math_6_2_1_1', period: 1, title: '(분수)÷(분수) 복습', objectives: ['(분수)÷(분수)를 복습할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_2_1_2', period: 2, title: '분수의 나눗셈 문제 해결', objectives: ['분수의 나눗셈 문제를 해결할 수 있다.'], achievementStandards: ['[6수01-12] 분수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_2_2': {
    unitId: 'math_6_2_2',
    unitName: '2. 소수의 나눗셈',
    periods: [
      { id: 'math_6_2_2_1', period: 1, title: '(소수)÷(소수) 복습', objectives: ['(소수)÷(소수)를 복습할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
      { id: 'math_6_2_2_2', period: 2, title: '소수의 나눗셈 문제 해결', objectives: ['소수의 나눗셈 문제를 해결할 수 있다.'], achievementStandards: ['[6수01-13] 소수의 나눗셈을 이해하고 계산할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_2_3': {
    unitId: 'math_6_2_3',
    unitName: '3. 공간과 입체',
    periods: [
      { id: 'math_6_2_3_1', period: 1, title: '쌓기나무', objectives: ['쌓기나무로 쌓은 모양을 알 수 있다.'], achievementStandards: ['[6수02-08] 쌓기나무로 쌓은 모양을 위, 앞, 옆에서 보고 그릴 수 있다.'], duration: 40 },
      { id: 'math_6_2_3_2', period: 2, title: '위, 앞, 옆에서 본 모양', objectives: ['위, 앞, 옆에서 본 모양을 그릴 수 있다.'], achievementStandards: ['[6수02-08] 쌓기나무로 쌓은 모양을 위, 앞, 옆에서 보고 그릴 수 있다.'], duration: 40 },
      { id: 'math_6_2_3_3', period: 3, title: '쌓기나무의 개수', objectives: ['쌓기나무의 개수를 구할 수 있다.'], achievementStandards: ['[6수02-09] 위, 앞, 옆에서 본 모양을 보고 쌓기나무로 쌓을 수 있다.'], duration: 40 },
      { id: 'math_6_2_3_4', period: 4, title: '공간 감각 활용', objectives: ['공간 감각을 활용하여 문제를 해결할 수 있다.'], achievementStandards: ['[6수02-09] 위, 앞, 옆에서 본 모양을 보고 쌓기나무로 쌓을 수 있다.'], duration: 40 },
    ]
  },
  'math_6_2_4': {
    unitId: 'math_6_2_4',
    unitName: '4. 비례식과 비례배분',
    periods: [
      { id: 'math_6_2_4_1', period: 1, title: '비례식', objectives: ['비례식을 알 수 있다.'], achievementStandards: ['[6수05-04] 비례식을 이해하고, 비례식의 성질을 이용하여 간단한 비례식을 풀 수 있다.'], duration: 40 },
      { id: 'math_6_2_4_2', period: 2, title: '비례식의 성질', objectives: ['비례식의 성질을 알 수 있다.'], achievementStandards: ['[6수05-04] 비례식을 이해하고, 비례식의 성질을 이용하여 간단한 비례식을 풀 수 있다.'], duration: 40 },
      { id: 'math_6_2_4_3', period: 3, title: '비례식 풀기', objectives: ['비례식을 풀 수 있다.'], achievementStandards: ['[6수05-04] 비례식을 이해하고, 비례식의 성질을 이용하여 간단한 비례식을 풀 수 있다.'], duration: 40 },
      { id: 'math_6_2_4_4', period: 4, title: '비례배분', objectives: ['비례배분을 할 수 있다.'], achievementStandards: ['[6수05-05] 비례배분을 알고, 이를 활용하여 문제를 해결할 수 있다.'], duration: 40 },
      { id: 'math_6_2_4_5', period: 5, title: '비례배분 활용', objectives: ['비례배분을 활용하여 문제를 해결할 수 있다.'], achievementStandards: ['[6수05-05] 비례배분을 알고, 이를 활용하여 문제를 해결할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_2_5': {
    unitId: 'math_6_2_5',
    unitName: '5. 원의 넓이',
    periods: [
      { id: 'math_6_2_5_1', period: 1, title: '원주와 지름의 관계', objectives: ['원주와 지름의 관계를 알 수 있다.'], achievementStandards: ['[6수03-06] 원주율을 알고, 원주와 지름을 구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_5_2', period: 2, title: '원주율', objectives: ['원주율을 알 수 있다.'], achievementStandards: ['[6수03-06] 원주율을 알고, 원주와 지름을 구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_5_3', period: 3, title: '원주 구하기', objectives: ['원주를 구할 수 있다.'], achievementStandards: ['[6수03-06] 원주율을 알고, 원주와 지름을 구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_5_4', period: 4, title: '원의 넓이 구하기', objectives: ['원의 넓이를 구할 수 있다.'], achievementStandards: ['[6수03-07] 원의 넓이를 구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_5_5', period: 5, title: '원의 넓이 활용', objectives: ['원의 넓이를 활용하여 문제를 해결할 수 있다.'], achievementStandards: ['[6수03-07] 원의 넓이를 구할 수 있다.'], duration: 40 },
    ]
  },
  'math_6_2_6': {
    unitId: 'math_6_2_6',
    unitName: '6. 원기둥, 원뿔, 구',
    periods: [
      { id: 'math_6_2_6_1', period: 1, title: '원기둥', objectives: ['원기둥을 알 수 있다.'], achievementStandards: ['[6수02-10] 원기둥, 원뿔, 구를 이해하고 그 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_6_2', period: 2, title: '원기둥의 전개도', objectives: ['원기둥의 전개도를 그릴 수 있다.'], achievementStandards: ['[6수02-11] 원기둥의 전개도를 그릴 수 있다.'], duration: 40 },
      { id: 'math_6_2_6_3', period: 3, title: '원뿔', objectives: ['원뿔을 알 수 있다.'], achievementStandards: ['[6수02-10] 원기둥, 원뿔, 구를 이해하고 그 성질을 탐구할 수 있다.'], duration: 40 },
      { id: 'math_6_2_6_4', period: 4, title: '구', objectives: ['구를 알 수 있다.'], achievementStandards: ['[6수02-10] 원기둥, 원뿔, 구를 이해하고 그 성질을 탐구할 수 있다.'], duration: 40 },
    ]
  },
};

// 전체 수학 차시 데이터 통합
export const MATH_LESSONS: Record<string, UnitLessons> = {
  ...MATH_3_LESSONS,
  ...MATH_4_LESSONS,
  ...MATH_5_LESSONS,
  ...MATH_6_LESSONS,
};
