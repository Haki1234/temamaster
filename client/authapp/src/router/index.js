import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventCreate from "@/views/EventCreate.vue"
import EventList from "@/views/EventList.vue"
import EventShow from "@/views/EventShow.vue"
import Daily from "@/components/Daily.vue"
import Rates from "@/components/Rates.vue"
import NotFound from "@/components/NotFound.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Wellcome",
    component: () => import("../views/Wellcome.vue")
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue")
  },
  {
    path: "/events",
    name: "event-list",
    component: EventList,
    meta: {
      requiresAuth: true
    }
  },
  ,
  {
    path: "/events/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/events/event/create",
    name: "event-create",
    component: EventCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/daily",
    name: "daily",
    component: Daily,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/rates",
    name: "rates",
    component: Rates,
    meta: {
      requiresAuth: true
    }
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash};
    }
  },
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
