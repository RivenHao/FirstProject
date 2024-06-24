import { defineStore } from "pinia";

// 第一个参数是唯一的store ID
const useTabbarStore = defineStore("tabbar",{
    // option store
    state:()=>{
        return{
            isTabbarShow:true
        }
    },
    // getters
    // actions
    actions:{
        change(value){
            this.isTabbarShow = value
        }
    }
})

export default useTabbarStore