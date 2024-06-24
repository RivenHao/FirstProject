// 页面有多个需要共享的状态，引入vuex，便于维护
// 缓存部分异步数据，减少后端服务的访问，增加用户体验

import {createStore} from 'vuex'
import { CHANGE_TABBAR } from './type'
import axios from 'axios'
const store = createStore({
    state(){
        return{
            isTabbarShow:true,
            cinemaList:[]
        }
    },
    // 唯一修改状态的位置，同步
    mutations:{
        // showTabbar(state){
        //     state.isTabbarShow = true
        // },
        // hideTabbar(state){
        //     state.isTabbarShow = false
        // }
        [CHANGE_TABBAR](state,payload){
            state.isTabbarShow = payload
        },
        changeCinemaList(state,payload){
            state.cinemaList = payload
        }
    },
    // 同步加异步
    actions:{
        async getCinemaList(store){
            // 发生请求
            const res =  await axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1690",
                headers:{
                    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"17186926435998557484023809","bc":"110100"}',
                    'X-Host':'mall.film-ticket.cinema.list'
                }
            })
            store.commit("changeCinemaList",res.data.data.cinemas)
        }
    },
    // getters store 的计算属性
    getters:{
        filterCinemaList(state){
            return (type)=>{ 
                return state.cinemaList.filter(item=>item.eTicketFlag===type)
            }
        }
    }
})

export default store