<template>
  <div>
    <select v-model="type">
      <option :value="1">APP订票</option>
      <option :value="0">前台兑换</option>
    </select>
    <ul>
      <li v-for="item in filterCinemaList(type)" :key="item.cinemaId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      type:1
    }
  },
  mounted(){
    // 判断是否有数据，没有则请求
    if (this.cinemaList.length===0){
      // 请求数据
      this.getCinemaList()
    } else{
      // 已经缓存
    }
  },
  methods:{
    ...mapActions('CinemaModule',["getCinemaList"])
  },
  computed:{
    ...mapState('CinemaModule',['cinemaList']),
    ...mapGetters('CinemaModule',["filterCinemaList"])
  }
  // computed:{
  //   filterCinemaList(){
  //     return this.$store.state.cinemaList.filter(item=>item.eTicketFlag===this.type)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    li{
      padding: 10px;
    }
  }
</style>