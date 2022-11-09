import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../Home.vue');

const PhaserIndex = () => import('../demo/phaser/Index.vue');

// main page
const Main = () => import('../views/main.vue');
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
  {
    path: '/phaser',
    name: 'phaser',
    component: PhaserIndex,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
