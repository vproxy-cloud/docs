import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '', 
  images: {
    unoptimized: true
  },
  experimental: {
    allowedRevalidateHeaderKeys: []
  }
};

export default withMDX(config);
