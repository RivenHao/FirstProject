<template>
    <div>
        <button @click="handleClick">app</button>
        <input ref="myinput">
        <div ref="mydiv"></div>
        <Children ref="mychild"/>
        <Field label="用户名" type="text" ref="username"></Field>
        <Field label="密码" type="passwaord" ref="password"></Field>
        <Field label="年龄" type="number" ref="age"></Field>
        <button @click="handleRegist">注册</button>
        <button @click="handleReset">重置</button>
    </div>
</template>

<script>
import Children from './Children.vue';
import Field from './Field.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        Children,
        Field
    },
    methods:{
        handleClick(){
            console.log(this.$refs.mychild.title)
            this.$refs.mychild.title = 'mychildren'
        },
        handleRegist(){
            console.log(this.$refs.username.value)
        },
        handleReset(){
            this.$refs.username.value = ''
            this.$refs.password.value = ''
            this.$refs.age.value = ''
        }
    }
}
</script>