import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
const useCinemaStore = defineStore("cinema",()=>{
    
    const cinemaList = ref([])
    const getCinemaList =async ()=>{
        // 发生请求
        const res =  await axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1690",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17186926435998557484023809","bc":"110100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        })
        cinemaList.value = res.data.data.cinemas
    }
    const filterCinemaList = computed(()=>
        (type)=>{
            return cinemaList.value.filter(item=>item.eTicketFlag===type)
        }
    )
    return{
        cinemaList,
        getCinemaList,
        filterCinemaList
    }

})

export default useCinemaStore