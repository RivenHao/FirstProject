<template>
  <div>
    <button @click="handleBack">返回</button>
    detail
    <div>猜你喜欢</div>
    <div @click="handleClick">电影1</div>
  </div>
</template>

<script setup>
import {CHANGE_TABBAR} from '../store/type'
import {onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import {mapMutations, useStore} from 'vuex'
const store = useStore()
const router = useRouter()
onBeforeMount(()=>{
    store.commit("TabbarModule/changeTabbar",false)
})
onBeforeUnmount(()=>{
    store.commit("TabbarModule/changeTabbar",true)
})
const handleBack = (()=>{
    router.back()
})
const handleClick = (()=>{
    router.push('/detail/6789')
})
</script>