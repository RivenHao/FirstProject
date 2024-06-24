<template>
  <div>
    <ul>
        <!-- <router-link custom :to="'/detail/'+item.filmId" v-slot="{navigate}" v-for="item in dataList" :key="item.filmId">
            <li  @click="navigate">
                {{item.name}}
            </li>
        </router-link> -->
        <li v-for="item in dataList" :key="item-filmId" @click="handleClick(item.filmId)">
            {{ item.name }}
        </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
const router = useRouter()
const dataList = ref([]) 
onMounted(async ()=>{
    const res = await axios({
        url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8844293",
        headers:{
            'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17186926435998557484023809","bc":"110100"}',
            'X-Host':'mall.film-ticket.film.list'
        }
    })
    dataList.value = res.data.data.films
})
const handleClick = (id)=>{
    router.push({
        name:'detail',
        params:{
            filmId:id
        }
    })
}
</script>

<style lang="scss" scoped>
ul{
    li{
        padding: 10px;
    }
}
</style>