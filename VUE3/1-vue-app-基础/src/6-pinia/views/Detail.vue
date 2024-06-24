<template>
  <div>
    <button @click="handleBack">返回</button>
    detail
    <div>猜你喜欢</div>
    <div @click="handleClick">电影1</div>
  </div>
</template>

<script setup>
import {onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import useTabbarStore from '../store/tabbarStore';
const router = useRouter()
const store = useTabbarStore()
onBeforeMount(()=>{
    // store.isTabbarShow=false
    // store.$patch({
    //     isTabbarShow : false
    // })
    store.change(false)
})
onBeforeUnmount(()=>{
    // store.isTabbarShow = true
    // store.$patch({
    //     isTabbarShow : true
    // })
    // store.$reset()
    store.change(true)
})
const handleBack = (()=>{
    router.back()
})
const handleClick = (()=>{
    router.push('/detail/6789')
})
</script>