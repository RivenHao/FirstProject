<template>
    <div>
        <label>{{ label }}</label>
        <input :type="type" v-model="value">
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:''
        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'text'
        }
    }
}
</script>