<template>
  <div>
    app
    <Child>
        <div>这是一个插槽</div>
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