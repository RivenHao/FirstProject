<template>
    <div>
        <button>返回</button>
        <span>{{ app.navTitle }}</span>
        <button>首页</button>
    </div>
</template>

<script>
export default {
    inject:[
        "navTitle",
        "app"
    ],
    data() {
        return {

        }
    },
    methods:{

    }
}
</script>

<style scoped>
div{
     display: flex;
     justify-content: space-between;
     width: 100%;
     height: 50px;
     line-height: 50px;
     background: gray;
}
</style>