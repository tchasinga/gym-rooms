/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add file-loader rule for MP4 files
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/videos/', // adjust the publicPath as needed
            outputPath: 'static/videos/', // adjust the outputPath as needed
            esModule: false,
          },
        },
      });
  
      // Fix for serverless environments, like Vercel
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  