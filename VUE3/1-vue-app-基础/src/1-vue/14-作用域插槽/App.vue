<template>
  <div>
    <input type="text" v-model="text">
    <Nowplaying v-slot="myprops">
      <ul>
        <li v-for="data in myprops.mylist" :key="data.id">
          <!-- <img :src="data.img" alt="" style="width: 100px;"> -->
          <div v-if="data.nm.includes(text)&&text!=''" style="color: red;">
            {{ data.nm }}
          </div>
          <div v-else>
            {{ data.nm }}
          </div>
        </li>
      </ul>
    </Nowplaying>
  </div>
</template>

<script>
import Nowplaying from './Nowplaying.vue';
export default {
    components:{
        Nowplaying
    },
    data() {
        return {
            text:''
        }
    },
}
</script>