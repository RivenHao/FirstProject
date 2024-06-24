<template>
    <div>
        <Navbar></Navbar>
        <!-- <Home v-if="which==='首页'"></Home>
        <List v-else-if="which==='列表'"></List>
        <Centers v-else/> -->

        <!-- 内部数据都会被缓存 include可以设置哪些可以被缓存-->
        <!-- 内置动态组件component 通过is动态绑定 -->
        <!-- <keep-alive include="home,list">
            <component :is="which"/>
        </keep-alive> -->

        <!-- <keep-alive :include="/home|list/">
            <component :is="which"/>
        </keep-alive> -->
        
        <!-- <keep-alive :include="['home','list']">
            <component :is="which"/>
        </keep-alive> -->
        
        <!-- exclude排除  -->
        <keep-alive exclude="home,list">
            <component :is="which"/>
        </keep-alive>

        <Tabar></Tabar>
    </div>
</template>

<script>
import Home from "./views/Home.vue"
import List from './views/List.vue'
import Navbar from './Navbar.vue';
import Tabar from './Tabar.vue';
import Centers from './views/Centers.vue';
import store from "./store";

var obj = {
        "首页":"Home",
        "列表":"List",
        "我的":"Centers"
}

export default {
    
    data() {
        return {
            navTitle:'首页',
            which:'Home'
        }
    },
    provide(){
        return{
            navTitle:this.navTitle,
            app:this
        }
    },
    components:{
        Navbar,
        Tabar,
        Home,
        List,
        Centers
    },
    methods:{
        
    },
    mounted(){
        store.subscribe((value)=>{
            this.which = obj[value]
        })
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