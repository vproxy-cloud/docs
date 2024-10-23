import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',  // 為了靜態匯出添加此行
  basePath: process.env.NODE_ENV === 'production' ? '/docs' : '',  // 替換成您的 GitHub 儲存庫名稱
  images: {
    unoptimized: true
  }
};

export default withMDX(config);