<template>
  <div>
    <!-- app
    <Child>
        <template v-slot:first>
            <div>这是一个插槽111</div>
        </template>
        <template #second>
            <div>这是一个插槽222</div>
        </template>
        <div>33333</div>
    </Child> -->
    <Child>
       <template #left>
        <div>
          <span><i></i></span>
        </div>
       </template>
       <template #right>
        <div>
          <span><i></i></span>
        </div>
       </template>
    </Child>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
    components:{
        Child
    },
    data() {
        return {
            
        }
    },
}
</script>