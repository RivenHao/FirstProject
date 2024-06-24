<template>
    <div>
        <input type="text" v-model="text">
        <select v-model="select">
            <option value="aaa">aaa</option>
            <option value="bbb">bbb</option>
            <option value="ccc">ccc</option>
        </select>
    </div>
</template>

<script>
import { computed, reactive, ref, toRefs, watch } from 'vue'
export default {
    setup(){
        const text = ref('')
        const select=ref('aaa')
        // // 1-写法1
        // watch(text,(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // })
        // // 2-写法2
        // watch(()=>text.value,(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // })
        // // 3-监听多个数据源
        // watch([text,select],(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // })
        // // 4深度侦听
        // watch([text,select],(newValue,oldValue)=>{
        //     console.log(newValue,oldValue)
        // },{immediate:true})

        const state = reactive({
            mytexte:''
        })
        watch(state,()=>{
            // state 任意改变都会触发
        })
        watch(()=>state.mytext,()=>{
            // state.mytext 改变才会触发
        })
        return {
            text,
            select
        }
    }
    
}
</script>