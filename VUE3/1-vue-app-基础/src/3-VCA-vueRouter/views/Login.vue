<template>
  <div>
    Login
    <button @click="handleClick">登录</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const handleClick=()=>{
  localStorage.setItem('token','aaa')
  router.push('/')
}
</script>