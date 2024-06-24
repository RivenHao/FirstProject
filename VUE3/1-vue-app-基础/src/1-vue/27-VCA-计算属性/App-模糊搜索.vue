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
import { computed, reactive, toRefs } from 'vue'
export default {
    setup(){
        const obj =reactive({
            datalist:['aaa','bbb','ccc','abc','bca','cba'],
            text:''
        })
        const computedList = computed(()=>
            obj.datalist.filter(item=>item.includes(obj.text))
        )
        return {
            ...toRefs(obj),
            computedList
        }
    }
    
}
</script>