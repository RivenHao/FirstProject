<template>
  <div>
    <div class="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
export default {
    props:{
        loop:{
            type:Boolean,
            default:true
        },
        slidesPerView:{
            type:Number,
            default:1
        },
        spaceBetween:{
            type:Number,
            default:0
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper', {
            loop: this.loop, // 循环模式选项
            slidesPerView:this.slidesPerView,
            spaceBetween:this.spaceBetween,
            // observer:true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            on:{
                slideChange:()=>{
                    // console.log(this.activeIndex)
                    this.$emit("MyslideChange")
                }
            }
        })
    }
}
</script>   
<style scoped>
.swiper{
    width:600px;
    height:400px;
}
</style>