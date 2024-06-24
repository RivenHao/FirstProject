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
// import Centers from './views/Centers.vue';
// import Home from "./views/Home.vue";
// import List from './views/List.vue';
// 异步加载组件
import loadingComponent from './components/loadingComponent.vue';
import errorComponent from './components/errorComponent.vue';
import { defineAsyncComponent } from 'vue';
import Navbar from './Navbar.vue';
import Tabar from './Tabar.vue';
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
        // 异步加载组件
        Home:defineAsyncComponent(()=>import('./views/Home.vue')),
        List:defineAsyncComponent(()=>import('./views/List.vue')),
        Centers:defineAsyncComponent({
            // 加载函数
            loader:()=> import('./views/Centers.vue'),
            // 加载异步组件时使用的组件
            loadingComponent: loadingComponent,
            // 展示加载组件前的延迟时间，默认为200ms
            delay:200,
            // 加载失败后的组件
            errorComponent: errorComponent,
            // 如果提供一个timeout时间限制，并超时了，也会显示这里配置的报错组件，默认：Infinity
            timeout:1000
        })
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