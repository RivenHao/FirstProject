<template>
    <div>
        <button @click="handleClick">{{ title }}</button>
        <button @click="handleClick2">{{ title }}-2</button>
        <button @click="$emit('event3',title)">{{ title }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'children'
        }
    },
    methods:{
        handleClick(){
            console.log(this.title)
            this.$emit("event",this.title)
        },
        handleClick2(){
            this.$emit("event2")
        }
    }
}
</script>