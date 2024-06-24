<template>
    <div>
        <input type="text" v-model="item">
        <button @click="handleAdd">Add</button>

        <!-- <ul> -->
            <TransitionGroup tag="ul" name="wxh">
                <!-- key不能是索引 -->
                <li v-for="data,index in datalist" :key="data">
                    {{ data }}
                    <button @click="handleDel(index)">Del</button>
                </li>
            </TransitionGroup>
        <!-- </ul> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            item:'',
            datalist:['aaa','bbb']
        }
    },
    methods:{
        handleAdd(){
            this.datalist.push(this.item)
            this.item=''
        },
        handleDel(index){
            this.datalist.splice(index,1)
        }
    }
}
</script>

<style>
.wxh-move{
    transition: all 1s ease;
}
.wxh-leave-active {
  position: absolute;
}
.wxh-enter-active{
    animation: wxhanimate 1s;
}
.wxh-leave-active{
    animation: wxhanimate 1s reverse;
}
@keyframes wxhanimate{
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
</style>