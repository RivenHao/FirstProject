<template>
    <li @click="handleClick">
        {{item}}
    </li>
</template>

<script>
import store from './store'
export default {
    props:[
        "item"
    ],
    data() {
        return {
            
        }
    },
    methods:{
        handleClick(){
            store.publish(this.item)
        }
    }
}
</script>

<style scoped>

</style>