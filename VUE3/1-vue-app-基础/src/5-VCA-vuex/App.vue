<template>
  <div>
    <!-- 路由容器 -->
    <router-view></router-view>
    <Tabbar v-show="store.state.TabbarModule.isTabbarShow"></Tabbar>
  </div>
</template>

<script setup>
import Tabbar from './components/Tabbar.vue'
import {mapState, useStore} from 'vuex'
const store = useStore()
  
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