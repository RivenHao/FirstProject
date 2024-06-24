<template>
  <div>
    <button @click="isshow=!isshow">change</button>
    <Transition>
      <div v-show="isshow">aaaa</div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
      return {
          isshow:true
      }
  }
}
</script>

<style>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
html,body{
  overflow-x: hidden;
}
</style>