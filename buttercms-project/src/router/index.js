import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import CustomersHome from "@/components/BlogHome";
import CustomerPage from "@/components/BlogPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-page",
      component: BlogPage
    }
  ]
});
