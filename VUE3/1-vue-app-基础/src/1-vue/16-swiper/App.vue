<template>
  <div>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in datalist" :key="data">
              {{ data }}
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
// import {Pagination} from 'swiper'
// import 'swiper/components/pagination/pagination.min.css'
// Swiper.use([Pagination])
export default {
  data() {
      return {
          datalist:[]
      }
  },
  mounted(){
    setTimeout(()=>{
      this.datalist = ['aaa','bbb','ccc']
      this.$nextTick(()=>{
        var mySwiper = new Swiper ('.swiper', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        on:{
          slideChange:function(){
            console.log(this.activeIndex)
          }
        }
      })      
      })
      // dom属于异步更新，需要在updated中进行初始化
      // var mySwiper = new Swiper ('.swiper', {
      //   loop: true, // 循环模式选项
      //   // 如果需要分页器
      //   pagination: {
      //       el: '.swiper-pagination',
      //   },
      //   on:{
      //     slideChange:function(){
      //       console.log(this.activeIndex)
      //     }
      //   }
      // })      
    },2000)
  },
  updated(){
    // 但是会频繁触发，影响性能，建议使用$nexttick
    // var mySwiper = new Swiper ('.swiper', {
    //     loop: true, // 循环模式选项
    //     observer:true,
    //     // 如果需要分页器
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    //     on:{
    //       slideChange:function(){
    //         console.log(this.activeIndex)
    //       }
    //     }
    // })      
  }
}
</script>

<style scoped>
.swiper{
  width:600px;
  height: 400px;
}
</style>