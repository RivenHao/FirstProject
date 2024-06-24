<template>
    <div class="navbar" style="color: red;">
        <button>{{left}}</button>
        {{title}}
        <!-- 将属性透传到$attrs上 -->
        <button @click="handleright" v-bind="$attrs">{{right}}</button>
    </div>
</template>

<script>
export default {
    inheritAttrs:false, // 取消透传
    props:{
        title:String,
        left:String,
        right:String
    }
}
</script>