<template>
  <div>
    app
    <div v-mydirect="'red'">aaa</div>
    <div v-mydirect="'yellow'">bbb</div>
    <div v-mydirect="whichColor">ccc</div>
  </div>
</template>

<script>
export default {
  // 局部定义
  directives:{
    // mydirect:{
    //   // 钩子函数mounted创建时触发
    //   mounted(el,binding){
    //     console.log("当前节点插入到父节点时调用",el)
    //     el.style.background = binding.value
    //   },
    //   // 更新时触发
    //   updated(el,binding){
    //     el.style.background = binding.value
    //   } 
    mydirect(el,binding){
      el.style.background=binding.value
    }
  },
  data() {
      return {
          whichColor:'blue'
      }
  }
}
</script>

<style scoped>

</style>