import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Signup from '../views/Signup.vue'
import SignupAdmin from '../views/SignupAdmin.vue'
import ResidentPage from '../views/ResidentPage.vue'
import RequestCert from '../views/RequestCert.vue'
import ApplicationCert from '../views/ApplicationCert.vue'
import PersonalInfoCert from '../views/PersonalInfoCert.vue'

const routes: Array<RouteRecordRaw> = [
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
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/signup-admin',
    name: 'SignupAdmin',
    component: SignupAdmin
  },
  {
    path: '/resident',
    name: 'ResidentPage',
    component: ResidentPage
  },
  {
    path: '/requestcert',
    name: 'RequestCert',
    component: RequestCert
  },
  {
    path: '/applicationcert',
    name: 'ApplicationCert',
    component: ApplicationCert
  },
  {
    path: '/personalinfo',
    name: 'PersonalInfo',
    component: PersonalInfoCert
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
