import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import City from "../views/City.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/weather/:state/:city",
    name: "city",
    component: City,
    meta: {
      title: "Weather",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title} | The Local Weather`;
  next();
});

export default router;
