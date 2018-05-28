import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index' 
import Intro from '@/components/intro/Intro'
import KindContent from '@/components/kind/KindContent'
import Content from '@/components/content/Content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
        
    },
    {
      path:'/index',
      component:Index,
    },
    {
      path:'/intro/:id',
      component:Intro
    },
    {
      path:'/content/:id/:cid',
      component:Content
    },
    {
      path:'/kind/:type',
      component:KindContent
    }

  ]
})
