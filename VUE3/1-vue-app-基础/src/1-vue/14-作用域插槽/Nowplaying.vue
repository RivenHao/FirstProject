<template>
  <div>
    <slot :mylist="dataList" :a="1" :b="a">
      <ul>
      <li v-for="item in dataList" :key="item.id">
        {{ item.nm }}
      </li>
    </ul>
    </slot>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dataList:[]
    }
  },
  mounted(){
    // console.log(axios)
    axios.get("test.json").then(res=>{
      this.dataList = res.data.data.hot 
    })

  }

}
</script>