<template>
  <div>
    <select v-model="type">
      <option :value="1">APP订票</option>
      <option :value="0">前台兑换</option>
    </select>
    <ul>
      <li v-for="item in store.getters['CinemaModule/filterCinemaList'](type)" :key="item.cinemaId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { mapActions, mapState, mapGetters, useStore } from 'vuex'
import {ref, onMounted} from 'vue'
const store = useStore()
const type = ref(1)
onMounted(()=>{
  if (store.state.CinemaModule.cinemaList.length===0){
      // 请求数据
      store.dispatch("CinemaModule/getCinemaList")
    } else{
      // 已经缓存
    }
})
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    li{
      padding: 10px;
    }
  }
</style>