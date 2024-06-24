<template>
  <div>
    <button @click="handleBack">返回</button>
    detail
    <div>猜你喜欢</div>
    <div @click="handleClick">电影1</div>
  </div>
</template>

<script>
import {CHANGE_TABBAR} from '../store/type'
import {mapMutations} from 'vuex'
export default {
    beforeMount(){
        // this.$store.state.isTabbarShow = false
        // this.$store.commit("hideTabbar")
        this.$store.commit(CHANGE_TABBAR,false)
    },
    mounted(){
        console.log(this.$route.params.filmId) // 当前匹配到的路由对象
        // console.log(this.$route.query.filmId) // 当前匹配到的路由对象 query方式
    },
    beforeUnmount(){
        // this.$store.state.isTabbarShow = true
        // this.$store.commit("showTabbar")
        // this.$store.commit(CHANGE_TABBAR,true)
        this.changeTabbar(true)
    },
    methods:{
        ...mapMutations('TabbarModule',[CHANGE_TABBAR]),
        handleBack(){
            this.$router.back() // 返回
            // this.$router.go(-1)
            // this.$router.forward()
        },
        handleClick(){
            // 此时跳转的还是detail组件，mounted生命周期不会再次触发，只会触发更新，解决方案使用watch监听或者beforeRouteUpdate
            this.$router.push('/detail/6789')
        }
    },
    // watch:{
    //     "$route.params":function(){
    //         console.log("猜你喜欢带来的参数", this.$route.params.filmId)
    //     }
    // },
    // 路由更新之前
    beforeRouteUpdate(to, from, next) {
        console.log(to.params.filmId)
    },
}
</script>