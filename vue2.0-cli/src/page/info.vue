<template>
  <div class="home common">
    <p>{{msg}}</p>
    <ul>
      <router-link tag="li" to="/detial/001">
        <a>换热站1</a>
      </router-link>
      <router-link tag="li" to="/detial/002">
        <a>换热站2</a>
      </router-link>
    </ul>
    <div class="box"></div>
  </div>
</template>
<script>
//  import Detial from '../components/detial';
export default {
//  name: 'Home',
  data () {
    return {
      msg: '我是主页信息'
    };
  },
  components:{

  }

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  height:1000px;
  width:100%;
  background: #f0ad4e;
}

</style>
