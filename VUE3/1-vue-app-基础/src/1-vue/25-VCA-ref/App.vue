<template>
  <div>
    {{ myname }}
    <button @click="handleClick">change</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'
export default {
    setup(){
        // ref 基本类型
        const myname = ref("wxh") // value值为
        const handleClick = ()=>{
            myname.value = 'zhangsan'
        }
        return{
            myname,
            handleClick
        }
    }
}
</script>