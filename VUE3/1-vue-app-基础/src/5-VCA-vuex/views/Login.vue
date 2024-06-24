<template>
  <div>
    Login
    <button @click="handleClick">登录</button>
  </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            localStorage.setItem('token','aaa')
            this.$router.push('/')
        }
    }
}
</script>