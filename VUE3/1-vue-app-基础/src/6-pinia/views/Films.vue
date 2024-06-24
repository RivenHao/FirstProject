<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in looplist" :key="item.id">
            <img :src="item.imgUrl" :alt="item.title" style="width: 100%;">
        </van-swipe-item>
    </van-swipe>
    <div>
        <ul>
            <router-link custom to="/films/nowplaying" v-slot="{isActive,navigate}">
                <li  @click="navigate">
                    <span :class="isActive?'wxhactive':''">正在热映</span>
                </li>
            </router-link>
            <router-link custom to="/films/comingsoon" v-slot="{isActive,navigate}">
                <li  @click="navigate">
                    <span :class="isActive?'wxhactive':''">即将上映</span>
                </li>
            </router-link>
        </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const looplist = ref([
    {
        "id":1,
        "imgUrl":'../../../public/img/yn.png',
        "title":"永恩"
    },
    {
        "id":2,
        "imgUrl":"../../../public/img/lks.png",
        "title":"拉克丝"
    },
    {
        "id":3,
        "imgUrl":"../../../public/img/al.png",
        "title":"阿狸"
    },
    {
        "id":4,
        "imgUrl":"../../../public/img/zk.png",
        "title":"扎克"
    },
    {
        "id":5,
        "imgUrl":"../../../public/img/ns.png",
        "title":"诺手"
    }
])
</script>

<style scoped lang="scss">
ul{
    list-style: none;
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    li{
        flex: 1;
        span{
            padding: 10px 0;
        }
    }
}
.wxhactive{
    color: red;
    border-bottom: red 3px solid;
}
</style>