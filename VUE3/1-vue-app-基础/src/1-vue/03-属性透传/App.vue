<template>
    <div>
        <Navbar :title=title left="返回" right="首页" class="navbar" style="background-color: yellow;"></Navbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    data() {
        return {
            title:'电影'
        }
    },
    components:{
        Navbar
    }
}
</script>