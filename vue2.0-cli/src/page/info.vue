<template>
  <div class="info common">
    <p>{{msg}}</p>
    <ul>

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
      msg: '我是信息'
    };
  },
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
