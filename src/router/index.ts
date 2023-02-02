import { createRouter, createWebHistory } from 'vue-router'
import ChallengeDetails from '../views/ChallengeDetails.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: () => import('../views/Challenges.vue')
    },
    { path: '/challenges/:id', component: ChallengeDetails  }
  ]
})

export default router
