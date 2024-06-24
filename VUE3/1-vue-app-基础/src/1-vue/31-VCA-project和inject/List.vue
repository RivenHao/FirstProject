<template>
  <div>
    <ul>
        <li v-for="data in dataList" :key="data" @click="handleClick">
            {{ data }}
        </li>
    </ul>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
    setup(){
        const which = inject('which')
        // const show = inject('show')
        const dataList = ref(['aaa','bbb','ccc'])
        const handleClick = ()=>{
            // 让父组件的which变为Detail
            which.value="Detail"
            // show.value=false
        }
        return{
            dataList,
            handleClick
        }
    }
}
</script>