<template>
    <div>
        BChild--<button @click="handleClick">父click</button>
        BChild--<button @click="handleClick2">祖先click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'Bchildren'
        }
    },
    methods:{
        handleClick(){
            console.log(this.$parent.title)
        },
        handleClick2(){
            console.log(this.$parent.$parent.title)
            console.log(this.$root.title)
        }
    }
}
</script>