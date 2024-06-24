<template>
  <div>
    center
  </div>
</template>

<script>
export default {
  // 进入路由之前
  // async beforeRouteEnter(to, from, next) {
  //   let isAuthenticated = await localStorage.getItem("token")
  //   if(isAuthenticated){
  //     next()
  //   }else{
  //     next({
  //       name:'Login'
  //     })
  //   }
  // },
  // 路由更新之前
  // beforeRouteUpdate(to, from, next) {
  //   next();
  // },
  // 离开路由之前
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("你确定要离开吗")
    if(!answer) return false
    next()
  },
}
</script>