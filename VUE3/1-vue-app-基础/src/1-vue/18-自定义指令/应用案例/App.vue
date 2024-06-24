<template>
  <div>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,index) in datalist" :key="data" v-swiper="{index:index,length:datalist.length}">
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
  directives:{
    swiper:{
      mounted(el,bingding){
        let {index,length} = bingding.value
        if(index===length-1){
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
        }
      }
    }
  },
  mounted(){
    setTimeout(()=>{
      this.datalist = ['aaa','bbb','ccc'] 
    },2000)
  }
}
</script>

<style scoped>
.swiper{
  width:600px;
  height: 400px;
}
</style>