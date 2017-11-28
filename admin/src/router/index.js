import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'
Vue.use(Router)

const router= new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/index",
      name: "index",
      component: resolve => require(['@/view/index/index'], resolve),
      redirect: "/home",
      meta: {
        title: '首页',
        requiresAuth: false
      },
      children: [
        {
          path: "/home",
          name: "主页",
          component: resolve => require(['@/view/home/home'], resolve),
          meta: {
            title: "主页",
          }
        },
        {
          path: "/site",
          name: "按摩椅状态",
          component: resolve => require(['@/view/site/site'], resolve),
          meta: {
            title: "按摩椅状态",
          }
        },

      ]
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/view/login/login'], resolve),
      meta: {
        title: "后台登入", //登入验证
      }
    },
  ]
})

// -----动画开始-----
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true});
    next();

})

//-----动画消失-----
router.afterEach(function (to,from) {
  setTimeout(function() {
    store.dispatch('showLoading', {isLoading: false})
   
  }, 2000);
    
})
export default router;