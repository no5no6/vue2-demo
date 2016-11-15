import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import store from './store/'
import Index from './views/Index'
import routes from './router/index'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

router.beforeEach(({meta, path}, from, next) => {
    let {auth = true} = meta
    let isLogin = Boolean(store.state.User.name);

    let TABLES = JSON.parse(localStorage.getItem('ROOT_DATABASE'))
    if(!TABLES){
      localStorage.setItem('ROOT_DATABASE', '{"USERS_TBL": []}');
    }
// localStorage.clear();
    if (auth && !isLogin && path !== '/login') {
      return next({ path: '/login' });
    }
    next();
})

const app = new Vue({
  store,
  router
}).$mount('#app')
