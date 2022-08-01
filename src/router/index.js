import { createRouter, createWebHistory } from "vue-router";
import Counter from '../components/Counter.vue';
import Employees from '../components/Employees.vue';
import UserList from '../components/UserList.vue';
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:'/counter',
      name:"counter",
      component:Counter
    },
    {
      path:'/employees',
      name:'employees',
      component:Employees  
    },
    {
      path:'/users',
      name:"UserList",
      component:UserList
    }
  ],
});

export default router;
