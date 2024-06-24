<template>
  <div>
    <!-- 路由容器 -->
    <router-view></router-view>
    <Tabbar v-show="store.isTabbarShow"></Tabbar>
  </div>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import Tabbar from './components/Tabbar.vue'
import useTabbarStore from './store/tabbarStore'
// store 是一个reactive包装的对象，解构后会失去响应式
// const {isTabbarShow} = useTabbarStore() 无效
// const {isTabbarShow} = storeToRefs(store) 使用refs形式可行
const store = useTabbarStore()
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