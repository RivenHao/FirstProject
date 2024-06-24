<template>
    <div>
        <button @click="handleClick">{{ title }}</button>
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
        }
    }
}
</script>