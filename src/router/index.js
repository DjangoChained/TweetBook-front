import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/services/auth'
import Index from '@/components/Index'
import Wall from '@/components/Wall'
import Feed from '@/components/Feed'
import ViewPost from '@/components/ViewPost'
import FriendList from '@/components/FriendList'
import FriendSearch from '@/components/FriendSearch'
import Settings from '@/components/Settings'
import Logout from '@/components/Logout'
import NotFound from '@/components/NotFound'

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
      path: '/post/:id',
      name: 'ViewPost',
      component: ViewPost
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
      name: 'Logout',
      component: Logout
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
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
