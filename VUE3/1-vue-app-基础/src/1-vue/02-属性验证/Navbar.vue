<template>
    <div>
        <button v-show="leftshow">{{left}}</button>
        {{title}}
        <button @click="handleright" v-show="rightshow">{{right}}</button>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        left:[String,Number],
        right:{
            required:true,
            // 校验函数
            validator(value){
                return ['success','warning','danger'].includes(value) 
            }
        },
        leftshow:{
            required:true, // 是否必须
            type:Boolean, // 类型
            default:true // 默认
        },
        rightshow:Boolean
    }
}
</script>