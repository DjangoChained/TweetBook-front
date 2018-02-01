import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/services/auth'
import Index from '@/components/Index'
import FriendList from '@/components/FriendList'
import FriendSearch from '@/components/FriendSearch'

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
    },
    {
      path: '/friends/search/:text',
      name: 'FriendSearch',
      component: FriendSearch,
      secure: true
    },
    {
      path: '/friends',
      redirect: '/friends/list'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    if (!auth.authenticated) {
      return next('/')
    }
  } else {
    if (auth.authenticated) {
      return next('/feed')
    }
  }
  next()
})

export default router
