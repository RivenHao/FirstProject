<template>
    <div>
        <button>{{left}}</button>
        {{computedTitle}}
        <button @click="handleright">{{right}}</button>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    methods:{
        handleright(){
            console.log(this.title)
            this.title ='2222' // 报错，父组件传来的无法修改
        }
    },
    computed:{
        computedTitle(){
            return this.title+'!'
        }
    },
    props:[
        "title",
        "left",
        "right"
    ]
}
</script>