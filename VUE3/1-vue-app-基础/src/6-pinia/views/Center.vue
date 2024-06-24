<template>
  <div>
    center
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("你确定要离开吗")
    if(!answer) return false
    next()
  },
}
</script>