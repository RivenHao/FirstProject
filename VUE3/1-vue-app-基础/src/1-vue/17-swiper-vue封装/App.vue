<template>
  <div>
    app
    <Myswiper v-if="datalist.length" :loop="true" :slides-per-view="3" :space-between="50" @MyslideChange="handleChange">
      <Myswiperitem v-for="data in datalist" :key="data">{{ data }}</Myswiperitem>
    </Myswiper>
  </div>
</template>

<script>
import Myswiper from './Myswiper.vue'
import Myswiperitem from './Myswiperitem.vue'
export default {
  data() {
      return {
          datalist:[]
      }
  },
  components:{
    Myswiper,
    Myswiperitem
  },
  mounted(){
    setTimeout(() => {
      this.datalist=['aaa','bbb','ccc']
    }, 2000);
  },
  methods:{
    handleChange(){
      console.log("app")
    }
  }
}
</script>

<style scoped>

</style>