import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home';
import News from '../page/news';
import Info from '../page/info';
import List from '../page/list';
import Detial from '../components/detial';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // children: [
      //   {path: '/home/login', component: Login},
      //   {path: '/home/reg', component: Reg}
      // ]
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/detial/:id',
      name: 'Detial',
      component: Detial,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    }
  ]
});
