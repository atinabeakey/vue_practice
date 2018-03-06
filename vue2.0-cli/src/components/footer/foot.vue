<template>
  <ul id = 'foot'>
    <router-link tag="li" to="/">
      <a>首页</a>
      <i class="fa fa-home fa-fw"></i>
    </router-link>
    <router-link tag="li" to="/news">
      <a>新闻</a>
      <i class="fa fa-book fa-fw"></i>
    </router-link>
    <router-link tag="li" to="/info">
      <a>信息</a>
      <i class="fa fa-pencil fa-fw"></i>
    </router-link>
    <router-link tag="li" to="/list">
      <a>列表</a>
      <i class="fa fa-cog fa-fw"></i>
    </router-link>
   <!-- <li>
      <a class="list-group-item" href="#">首页</a>
      <i class="fa fa-home fa-fw"></i>
    </li>-->
  </ul>
</template>
<script>
export default {

};
</script>
<style scoped>
  #foot {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #dfdee7;
    position: fixed;
    bottom:0;
  }
  #foot li{
    font-size: 14px;
    width:25%;
    float: left;
  }
  #foot li a, #foot li i{
    display: block;
    width:100%;
    height:20px;
  }
  #foot li a{
    margin-top:-7px;
  }
  #foot li i{
    margin-top:10px;
  }
  #foot .router-link-exact-active a,#foot .router-link-exact-active i{
    color: #177fd8;
  }
</style>
