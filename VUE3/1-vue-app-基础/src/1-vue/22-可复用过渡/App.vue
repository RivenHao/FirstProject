<template>
      <div>
    <button @click="isshow=!isshow">change</button>
    <wxhTransition myname="rtl">
      <div v-show="isshow">aaaa</div>
    </wxhTransition>
  </div>
</template>

<script>
import wxhTransition from './wxhTransition.vue'
export default {
    components:{
        wxhTransition
    },
    data() {
        return {
            isshow:true
        }
    }
}
</script>

<style>

</style>