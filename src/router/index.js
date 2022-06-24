import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ProfileView from '@/views/ProfileView'
import LoginView from '@/views/LoginView'


const routes = [
  {path:'/', component:HomeView},
  {path:'/profil', component:ProfileView},
  {path:'/bejelentkezes', component:LoginView}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
