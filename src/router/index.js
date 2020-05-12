import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    meta: {
      title: "Blog"
    }
  },
  {
    path: "/blog/:id",
    component: BlogPost
  },
  {
    path: "*",
    component: NotFoundPage,
    meta: {
      title: "Not Found"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
