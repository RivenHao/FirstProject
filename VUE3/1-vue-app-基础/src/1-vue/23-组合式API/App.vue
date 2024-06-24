<template>
  <div>
    app
    <div>{{ obj.myname }}</div>
    <div>{{ obj.myage }}</div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup(){
        // 函数式写法
        // console.log("setup")

        const obj = reactive({
            myname:"wxh",
            myage:27
        }) // 响应式对象

        const handleClick=()=>{
            // console.log('click')
            obj.myname='aaa'
            obj.myage=100
        } // 函数方法
        
        return {
            obj,
            handleClick
        }
    }
}
</script>