import {ref, computed} from 'vue'
function UseSearch(obj){
    const text = ref('')
    const computedList = computed(()=>
            obj.datalist.filter(item=>item.includes(text.value))
        )
    return {
        text,
        computedList
    }
}

export default UseSearch