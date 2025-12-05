import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 캐시 비활성화 - 항상 최신 데이터 제공
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store, must-revalidate',
        },
      ],
    },
  ],
};

export default nextConfig;
