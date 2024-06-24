<template>
  <div>

  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'
export default {
    setup(){
        onBeforeMount(()=>{
            // dom创建前
        })
        onMounted(()=>{
            // 订阅，ajax，dom创建后
        })
        onBeforeUpdate(()=>{
            // 更新之前
        })
        onUpdated(()=>{
            // 更新后
        })
    }
}
</script>