import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FriendList from '@/components/FriendList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/friends/list',
      name: 'FriendList',
      component: FriendList,
      secure: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  router.options.routes.forEach((route) => {
    if (to.matched[0].path === route.path && route.secure && !router.app.logged_on) {
      return next('/')
    }
  })
  next()
})

export default router
