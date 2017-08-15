import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: (resolve) => require(["@/pages/Hello"], resolve)
    },
    {
      path: "/about",
      name: "About",
      component: (resolve) => require(["@/pages/About"], resolve)
    },
    {
      path: "/chat/bottom-bar",
      name: "Bottom Bar",
      component: (resolve) => require(["@/pages/chat/BottomBar"], resolve)
    },
    {
      path: "/chat",
      name: "Chat",
      component: (resolve) => require(["@/pages/chat/Chat"], resolve)
    },
    {
      path: "/chat/container",
      name: "Container",
      component: (resolve) => require(["@/pages/chat/Container"], resolve)
    },
    {
      path: "/chat/message",
      name: "Message",
      component: (resolve) => require(["@/pages/chat/Message"], resolve)
    },
    {
      path: "/chat/top-bar",
      name: "Top Bar",
      component: (resolve) => require(["@/pages/chat/TopBar"], resolve)
    }
  ]
})
