<template>
    <div>
        <!-- once 只触发一次 -->
        <Children @event.once="handleEvent" @event2="handleEvent2" @event3="handleEvent3"></Children>
    </div>
</template>

<script>
import Children from './Children.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        Children
    },
    methods:{
        handleEvent(data){
            console.log('parent',data)
        },
        handleEvent2(){
            console.log('2')
        },
        handleEvent3(data){
            console.log(data)
        }
    }
}
</script>