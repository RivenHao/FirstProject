<template>
  <div>
    <input type="text" v-model="mytext">
    <button @click="handleAdd">Add</button>
    <ul>
        <li v-for="data,index in datalist" :key="data">
            {{ index }}--{{ data }}
            <button @click="handleDel(index)">Del</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'
export default {
    setup(){
        const mylocation = ref("hangzhou")
        const state = reactive({
            datalist:['aaa','bbb'],
            mytext:'',
            // 将ref转为reactive
            mylocation:mylocation
        })

         
        const handleAdd=()=>{
            // console.log('Add')
            state.datalist.push(state.mytext)
        }
        
        const handleDel = (index)=>{
            state.datalist.splice(index,1)
        }
        return {
            // mytext:toRef(state,"mytext"),
            ...toRefs(state),
            // state,
            handleAdd,
            handleDel
        }
    }
}
</script>