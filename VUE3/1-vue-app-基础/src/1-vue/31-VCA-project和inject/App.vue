<template>
  <div>
    <Navbar v-if="show"></Navbar>
    <component :is="which"></component>
  </div>
</template>

<script>
import List from './List.vue';
import Detail from './Detail.vue';
import Navbar from './Navbar.vue';
import { provide, ref } from 'vue';
export default {
    components:{
        Navbar,
        Detail,
        List
    },
    setup(){
        const which = ref('List')
        const show = ref(true)
        // provide
        provide('which',which)
        provide('show',show)
        return{
            which,
            show
        }
    }
}
</script>