<template>
  <div>
    <button @click="isshow=!isshow">change</button>
    <!-- appear 第一次出现也有动画
         transition 只能有一个子元素
         in-out 先进后出
         out-in 先出后进
    -->
    <Transition name="wxh" appear mode="in-out">
      <div v-if="isshow">aaaa</div>
      <div v-else>bbbb</div>
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
.wxh-enter-active{
  animation: wxhanimate 1s;
}
.wxh-leave-active{
  animation: wxhanimate 1s reverse;
}
@keyframes wxhanimate{
  0%{
    transform: translateX(100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>