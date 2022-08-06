import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from '../views/PageNotFound.vue';
import Profile from '../views/Profile.vue';
import RoomView from '../views/RoomView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:'/profile/:uuid',
      name:"profile",
      component:Profile
    },
    {
      path:'/room/:roomid',
      name:'room',
      component:RoomView
    },
    {
      path: '/:pathMatch(.*)*',
      name:"PageNotFound",
      component:PageNotFound
    }
  ],
});

export default router;
