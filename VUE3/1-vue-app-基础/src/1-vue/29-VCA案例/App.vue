<template>
  <div>
    <select name="" id="" v-model="select">
        <option value="kerwin">kerwin</option>
        <option value="gangdaner">gangdaner</option>
        <option value="tiechui">tiechui</option>
    </select>
    <input type="text" v-model="text">
    <ul>
        <li v-for="item in computedList" :key="item.id">
            {{ item.content }}
        </li>
    </ul>
  </div>
</template>

<script>
import uselist from './useList'
import useSearch from './useSearch'

export default {
    setup(){
        const {select,list} = uselist()
        const {text,computedList} = useSearch(list)
        return{
            select,
            list,
            text,
            computedList
        }
    }
}
</script> 