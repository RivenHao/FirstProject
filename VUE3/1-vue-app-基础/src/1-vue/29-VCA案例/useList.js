import { ref, watch } from 'vue'
import axios from 'axios'

function uselist(){
    const select = ref('kerwin')
    const list = ref([])

    watch(select,async (value)=>{
        var res = await axios.get('db.json')
        list.value = res.data.news
        list.value = list.value.filter(item=>item.content.includes(value))
    },{immediate:true})

    return {
        select,
        list
    }
}
export default uselist