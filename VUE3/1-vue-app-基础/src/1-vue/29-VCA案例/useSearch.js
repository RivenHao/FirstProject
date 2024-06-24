import {ref, computed} from 'vue'
function useSearch(datalist){
    const text = ref('')
    const computedList = computed(()=>
            datalist.value.filter(item=>item.content.includes(text.value))
        )
    return {
        text,
        computedList
    }
}

export default useSearch