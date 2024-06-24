<template>
    <div>
        <Navbar></Navbar>

        <keep-alive exclude="home,list">
            <Transition name="wxh" mode="out-in">
                <component :is="which"/>
            </Transition>
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
    .wxh-enter-active{
    animation: wxhanimate 1s;
    }
    .wxh-leave-active{
    animation: wxhanimate 1s reverse;
    }
    @keyframes wxhanimate{
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
    }
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
</style>