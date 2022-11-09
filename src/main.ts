import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import { getPlatform } from './util/common';

const app = createApp(App);
app.config.globalProperties.$isMobile = getPlatform() === 'mobile';
app.use(router).mount('#app');
