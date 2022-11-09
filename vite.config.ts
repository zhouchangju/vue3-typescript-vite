import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// console.error('vue plugin', vue());

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/test/3d/wencai/' : './',
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      // '@': path.resolve(__dirname, '/'),
      // '@assets': path.resolve(__dirname, 'public/assets'),
      // '@models': path.resolve(__dirname, 'src/assets/models'),
      // '@images': path.resolve(__dirname, 'public/assets/images'),
    },
  },
  // 务必要设置host，否则手机通过电脑网络上网时，无法访问到电脑启动的服务
  server: {
    host: '0.0.0.0',
  },
});
