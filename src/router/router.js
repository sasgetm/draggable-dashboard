import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import AddCard from '@/pages/AddCard';
import CardPage from '@/pages/CardPage';


const routes = [
  {
     path: '/',
     component: Main,
  },
  {
     path: '/add-card',
     component: AddCard
  },
  {
     path: '/cards/:id',
     component: CardPage,
  },
];

// console.log(process);

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;