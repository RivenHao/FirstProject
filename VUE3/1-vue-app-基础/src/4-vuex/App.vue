<template>
  <div>
    <!-- 路由容器 -->
    <router-view></router-view>
    <Tabbar v-show="isTabbarShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
import {mapState} from 'vuex'
export default{
  components:{
    Tabbar
  },
  mounted(){
    // console.log(this.$store.state.isTabbarShow)
  },
  // computed:{
  //   isTabbarShow(){
  //     return this.$store.state.isTabbarShow
  //   }
  // }
  // computed:mapState(['isTabbarShow'])
  computed:{
    ...mapState('TabbarModule',['isTabbarShow']),
    // 自定义
    // aaa(){}
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
    list-style: none;
}
</style>