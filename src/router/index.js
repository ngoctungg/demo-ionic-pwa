import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import DemoCameraPreview from '../views/Camera/DemoCameraPreview';
import DemoCamera from '../views/Camera/DemoCamera';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/demoCameraPreview',
    name: 'DemoCameraPreview',
    component: DemoCameraPreview
  },
  {
    path: '/democamera',
    name: 'DemoCamera',
    component: DemoCamera
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
