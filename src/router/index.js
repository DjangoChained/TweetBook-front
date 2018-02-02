import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/services/auth'
import Index from '@/components/Index'
import Wall from '@/components/Wall'
import Feed from '@/components/Feed'
import FriendList from '@/components/FriendList'
import FriendSearch from '@/components/FriendSearch'
import Settings from '@/components/Settings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/wall',
      name: 'Wall',
      component: Wall
    },
    {
      path: '/friends/list',
      name: 'FriendList',
      component: FriendList
    },
    {
      path: '/friends/search/:text',
      name: 'FriendSearch',
      component: FriendSearch
    },
    {
      path: '/friends',
      redirect: '/friends/list'
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/logout',
      redirect: to => {
        return auth.logout() ? '/' : false
      }
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
