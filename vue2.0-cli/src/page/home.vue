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
    <input type="text" value="谢谢" ref="value1"/>
    <button @click="add">按钮</button>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
//  name: 'Home',
  data () {
    return {
      msg: '我是主页信息',
      inputValue: ''
    };
  },
  methods: {
    add () {
      this.inputValue = this.$refs.value1.value;
      console.log(this.inputValue)
    }
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
