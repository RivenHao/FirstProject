import {createStore} from 'vuex'
import TabbarModule from './module/TabbarModule'
import CinemaModule from './module/CinemaModule'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    plugins:[createPersistedState({
        // reducer:(state)=>state.TabbarModule.isTabbarShow
        reducer:(state)=>{
            return{
                isTabbarShow:state.TabbarModule.isTabbarShow
            }
        }
    })],
    modules:{
        TabbarModule,
        CinemaModule
    }
})

export default store