import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
    redirect: "/Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/NotFound",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
