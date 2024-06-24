<template>
    <div>
        B
        <BChild></BChild>
    </div>
</template>

<script>
import BChild from './BChild.vue';
export default {
    data() {
        return {
            title:'B'
        }
    },
    components:{
        BChild
    },
    methods:{

    }
}
</script>