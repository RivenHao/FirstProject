<template>
    <div>
        <Navbar :title=title left="返回" right="首页"></Navbar>

        <!-- <Navbar v-bind="{
            'title':'返回',
            'left':'电影',
            'right':'首页'
        }"></Navbar> -->

        <!-- <Navbar v-bind="proobj"></Navbar> -->

    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    data() {
        return {
            title:'电影',
            proobj:{
                'title':'返回',
                'left':'电影',
                'right':'首页'
            }
        }
    },
    components:{
        Navbar
    }
}
</script>