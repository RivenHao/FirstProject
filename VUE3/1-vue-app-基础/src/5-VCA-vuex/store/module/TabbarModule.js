import { CHANGE_TABBAR } from '../type'

const TabbarModule = {
    namespaced:true,
    state(){
        return{
            isTabbarShow:true
        }
    },
    mutations:{
        [CHANGE_TABBAR](state,payload){
            state.isTabbarShow = payload
        }
    }
}

export default TabbarModule