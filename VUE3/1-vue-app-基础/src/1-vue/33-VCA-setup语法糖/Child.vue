<template>
  <div>
    {{title}} 
    {{ props.title }}
    <button @click="handleClick">right</button>
  </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
const emit = defineEmits(["right"])
const props = defineProps({
    title:{
        type:String,
        default:"00000"
    }
})
const handleClick = ()=>{
    emit("right","Child")
}
</script>