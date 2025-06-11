import { createRouter, createWebHistory } from 'vue-router'

// Store
import store from '@/store/store'

// Components
import MainLayout from '@/components/layout/MainLayout/MainLayout.vue'
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/build',
          name: 'build',
          component: () => import('@/views/BuildView.vue'),
        },
        {
          path: '/research',
          name: 'research',
          component: () => import('@/views/ResearchView.vue'),
        },
        {
          path: '/resources',
          name: 'resources',
          component: () => import('@/views/ResourcesView.vue'),
        },
        {
          path: '/assignments',
          name: 'assignments',
          component: () => import('@/views/AssignmentsView.vue'),
        },
        {
          path: '/map',
          name: 'map',
          component: () => import('@/views/MapView.vue'),
        },
        {
          path: '/military',
          name: 'military',
          component: () => import('@/views/MilitaryView.vue'),
        },
        {
          path: '/diplomacy',
          name: 'diplomacy',
          component: () => import('@/views/DiplomacyView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('@/views/SignupView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, _from, next) => {
  console.log('before Each')

  const isLoggedIn = store((state) => state.isLoggedIn)

  if (to.name !== 'login' && to.name !== 'signup' && !isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
