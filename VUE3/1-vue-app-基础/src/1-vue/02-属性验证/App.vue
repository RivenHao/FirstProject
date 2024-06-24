<template>
    <div>
        <Navbar :title=title left="返回" right="success" :leftshow="true" :rightshow="false"></Navbar>
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