<template>
    <div>
        <button>返回</button>
        <span>{{ Title }}</span>
        <button>首页</button>
    </div>
</template>

<script>
import store from './store'

export default {
    data() {
        return {
            Title:'首页'
        }
    },
    mounted(){
        // 订阅
        store.subscribe((value)=>{
            this.Title = value
        })
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