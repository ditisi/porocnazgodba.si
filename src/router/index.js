import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "*",
    component: NotFoundPage,
    meta: {
      title: "Not Found",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
