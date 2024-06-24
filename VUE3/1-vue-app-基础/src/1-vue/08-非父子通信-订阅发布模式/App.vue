<template>
    <div>
        <Navbar></Navbar>
        <Tabar></Tabar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Tabar
 from './Tabar.vue';
export default {
    data() {
        return {
            navTitle:'首页'
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
        Tabar
    },
    methods:{
        
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