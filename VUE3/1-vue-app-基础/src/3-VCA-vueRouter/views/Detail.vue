<template>
  <div>
    <button @click="handleBack">返回</button>
    detail
    <div>猜你喜欢</div>
    <div @click="handleClick">电影1</div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
const route = useRoute()
const router = useRouter()
onMounted(()=>{
    console.log(route.params.filmId) // 当前匹配到的路由对象
})
const handleBack = ()=>{
    router.back() // 返回
}
const handleClick=()=>{
    router.push('/detail/6789')
}
onBeforeRouteUpdate((to, from, next)=>{
    console.log(to.params.filmId)
})
</script>