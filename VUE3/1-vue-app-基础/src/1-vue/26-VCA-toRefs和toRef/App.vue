<template>
  <div>
    {{ obj.myname }}
    {{ computedName }}
  </div>
</template>

<script>
import { computed, reactive, ref, toRef, toRefs } from 'vue'
export default {
    setup(){
      const obj = reactive({
        myname:'wxh'
      })

      const computedName = computed(()=>obj.myname.substring(0,1).toUpperCase()+obj.myname.substring(1))

      return {
        obj,
        computedName
      }
    }
}
</script>