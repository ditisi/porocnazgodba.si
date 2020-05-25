import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Maintenance from "../views/Maintenance.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "maintenance",
    component: Maintenance,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    meta: {
      title: "Blog",
    },
  },
  {
    path: "/blog/:id",
    component: BlogPost,
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
