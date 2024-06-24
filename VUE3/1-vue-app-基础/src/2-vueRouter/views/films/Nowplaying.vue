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

<script>
import axios from 'axios'
export default{
    data() {
        return {
            dataList:[]
        }
    },
    async mounted(){
        const res = await axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8844293",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17186926435998557484023809","bc":"110100"}',
                'X-Host':'mall.film-ticket.film.list'
            }
        })
        console.log(res.data)
        this.dataList = res.data.data.films
        console.log(this.dataList)
    },
    methods:{
        handleClick(id){
            // location.href = "#/detail"
            // 第一种写法-路径+路由参数
            // this.$router.push(`/detail/${id}`)
            // 第二种写法 -路径+路由参数 对象写法
            this.$router.push({
                name:'detail',
                params:{
                    filmId:id
                }
            })

            // 第二种 -路径+query query传参   /detail?filmId=**
            // this.$router.push({
            //     path:'/detail',
            //     query:{
            //         filmId:id
            //     }
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    li{
        padding: 10px;
    }
}
</style>