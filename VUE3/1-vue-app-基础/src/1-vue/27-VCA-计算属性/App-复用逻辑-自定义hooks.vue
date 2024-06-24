<template>
    <div>
        <input type="text" v-model="text">
        <ul>
            <li v-for="data in computedList" :key="data">
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, reactive, toRefs, ref } from 'vue'
import UseSearch from './common'
export default {
    setup(){
        const obj =reactive({
            datalist:[]
        })

        setTimeout(()=>{
            obj.datalist=['aaa','bbb','ccc','abc','bca','cba','cde']
        },2000)
         
        // const {text,computedList} = UseSearch(obj)

        return {
            // text,
            // computedList
            ...UseSearch(obj)
        }
    }
    
}
</script>