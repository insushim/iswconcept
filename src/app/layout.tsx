import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '전북형 개념기반탐구 AI 수업설계 시스템',
  description:
    'AI와 함께 7단계 개념기반탐구 수업을 손쉽게 설계하세요. 교수학습지도안, 수업 대본, PPT, 학습지가 자동으로 생성됩니다.',
  keywords: ['개념기반탐구', 'CBI', '수업설계', 'AI', '전북', '초등교육'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
