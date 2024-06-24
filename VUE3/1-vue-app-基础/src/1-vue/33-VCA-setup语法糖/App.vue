<template>
  <div>
    {{ msg }}
    <button @click="handleClick">...</button>
    <ul>
        <li v-for="data in obj.dataList" :key="data">
            {{ data }}
        </li>
    </ul>
    {{ computedName }}
    <Child title="111" @right="handleright"/>
  </div>
</template>

<script setup>
import { computed, reactive,ref,toRefs } from "vue"
import Child from './Child.vue'
const msg = ref("hello")
const obj = reactive({
    dataList:['aaa','bbb'],
    name:'zhangsan',
    age:29
})
const handleright = (value)=>{
    console.log(value)
}
const computedName = computed(()=>obj.name+'111')
const handleClick = ()=>{
    console.log(msg)
}
</script>