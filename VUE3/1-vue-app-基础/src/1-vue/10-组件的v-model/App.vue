<template>
  <div>
    {{ title }}
    <!-- <input type="text" v-model="title"> -->
    <input type="text" :value="title" @input="title=$event.target.value">
  </div>
</template>

<script>
export default {
    data() {
        return {
            title:''
        }
    },
    methods:{
        // handleInput(evt){
        //     console.log(evt.target.value)
        //     this.title = evt.target.value
        // }
    }
}
</script>