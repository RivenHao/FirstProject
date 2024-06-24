<template>
  <div>
    <Navbar title="首页" @leftevent="handleLeft"></Navbar>
    <Navbar title="影院"></Navbar>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from './Navbar.vue';
export default {
    components:{
        Navbar
    },
    setup(){
        const mynav = ref(null)
        const handleLeft = (value)=>{
            console.log("left",value)
            console.log(mynav)
        }
        return{
            handleLeft,
            mynav
        }
    }
}
</script>