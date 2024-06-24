<template>
  <div>
    <button>返回</button>
    {{ title }}
    <button>首页</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const title = ref('列表')
        return {
            title
        }
    }
}
</script>