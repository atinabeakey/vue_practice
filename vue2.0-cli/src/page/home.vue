<template>
  <div class="home">
    <head-top></head-top>
    <p>{{msg}}</p>

  </div>
</template>

<script>
//  import headTop from 'header/head.vue';
// import headTop from 'header/head.vue';
export default {
//  name: 'Home',
  data () {
    return {
      msg: '我是主页信息'
    };
  },
//  components: {headTop}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
