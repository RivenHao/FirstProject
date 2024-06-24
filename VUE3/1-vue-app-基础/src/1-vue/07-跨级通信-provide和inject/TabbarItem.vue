<template>
    <li @click="handleClick">
        {{item}}
    </li>
</template>

<script>
export default {
    props:[
        "item"
    ],
    // provide和inject的选项式方法为非响应式，需要使用可以传整个app过来，但是不推荐，因此使用组合式api
    inject:[
        "navTitle",
        "app"
    ],
    data() {
        return {
            
        }
    },
    methods:{
        handleClick(){
            this.app.navTitle = this.item
        }
    }
}
</script>

<style scoped>

</style>