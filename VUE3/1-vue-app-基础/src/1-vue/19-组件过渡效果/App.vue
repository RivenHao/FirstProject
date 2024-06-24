<template>
  <div>
    <button @click="isshow=!isshow">change</button>
    <Transition enter-active-class="animate_animated animate__bounceIn" leave-active-class="animate_animated animate__bounceOut">
      <div v-show="isshow">aaaa</div>
    </Transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
      return {
          isshow:true
      }
  }
}
</script>

<style>

</style>