<template>
  <div>
    <button @click="handleClick">返回</button>
    {{ computedTitle }}
    <button>首页</button>
  </div>
</template>

<script>
import { computed, getCurrentInstance, reactive } from 'vue'
export default {
    props:{
        title:String
    },
    setup({title},{emit}){
        const _this = getCurrentInstance() // 拿到当前组件实例
        const computedTitle = computed(()=>title)
        const handleClick = ()=>{
            console.log(_this.parent)
            console.log(_this.root)
            emit("leftevent","child")
        }
        return {
            computedTitle,
            handleClick
        }
    }
}
</script>