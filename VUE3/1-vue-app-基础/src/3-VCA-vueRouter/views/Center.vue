<template>
  <div>
    center
  </div>
</template>

<script setup>
import { onBeforeRouteLeave, } from 'vue-router';
onBeforeRouteLeave(()=>{
  const answer = window.confirm("你确定要离开吗")
  if(!answer) return false
})
</script>