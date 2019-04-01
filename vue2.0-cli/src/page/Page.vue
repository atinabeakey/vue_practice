<template>
  <div class="container">
    <w-f-column itemW="200">
      <template slot-scope="{columnNum,columnIndex}">
        <water-follow :list="list" :columnNum="columnNum" :columnIndex="columnIndex">
          <template slot-scope="{item,index}">
            <div class="my-box" :style="{height:item+'px'}">{{item}}-{{index}}</div>
          </template>
        </water-follow>
      </template>
    </w-f-column>
  </div>
</template>

<script>
import WFColumn from '../waterFollow/WFColumn'
import WaterFollow from '../waterFollow/WaterFollow'
export default {
  name: 'page',
  components: {WaterFollow, WFColumn},
  data () {
    return {
      list: []
    }
  },
  created () {
    // 有初始数据
    for (let i = 0; i < 50; i++) {
      this.list.push(Math.floor(Math.random() * 301 + 200))
    }
  },
  mounted () {
    // 模拟网络请求
    window.setTimeout(() => {
      this.list = []
      for (let i = 0; i < 50; i++) {
        this.list.push(Math.floor(Math.random() * 301 + 200))
      }
    }, 1000)
    // -- 分割 --
    // 模拟数据不断变化
    // window.setInterval(() => {
    //   this.list = []
    //   for (let i = 0; i < 50; i++) {
    //     this.list.push(Math.floor(Math.random() * 301 + 200))
    //   }
    // }, 1000)
  }
}
</script>

<style scoped lang="scss">
  .container{
    width: 100%;
    background: gray;
    .my-box{
      width: 200px;
      background: #000;
      margin-bottom: 20px;
      color: #fff;
    }
  }
</style>