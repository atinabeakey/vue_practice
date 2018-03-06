<template>
  <div id="app">
    <head-top></head-top>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
// import headTop from './components/header/head';
// import Foot from './components/footer/foot';
export default {
  name: 'App',
  data () {
    return {
      msg: '我是数据',
    };
  },
  components: {
    headTop: () => import('./components/header/head'),
    Foot: () => import('./components/footer/foot')
  }
};
</script>

<style>
  @import '../src/style/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
