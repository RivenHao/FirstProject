<template>
  <div>
    <input type="text" v-model="state.mytext">
    <button @click="handleAdd">Add</button>
    <ul>
        <li v-for="data,index in state.datalist" :key="data">
            {{ index }}--{{ data }}
            <button @click="handleDel(index)">Del</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup(){
        const state = reactive({
            datalist:['aaa','bbb'],
            mytext:''
        })

         
        const handleAdd=()=>{
            // console.log('Add')
            state.datalist.push(state.mytext)
        }
        
        const handleDel = (index)=>{
            state.datalist.splice(index,1)
        }
        return {
            state,
            handleAdd,
            handleDel
        }
    }
}
</script>