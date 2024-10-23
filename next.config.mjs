import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/docs' : '',  // 替換 'docs' 為您的儲存庫名稱
  images: {
    unoptimized: true
  },
  // 添加這個設定
  experimental: {
    appDir: true,
    allowedRevalidateHeaderKeys: []
  }
};

export default withMDX(config);