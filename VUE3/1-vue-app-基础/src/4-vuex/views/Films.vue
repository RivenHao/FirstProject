<template>
  <div>
    <div style="height: 100px; text-align: center;width: 100%; line-height: 100px;">轮播</div>
    <div>
        <ul>
            <router-link custom to="/films/nowplaying" v-slot="{isActive,navigate}">
                <li  @click="navigate">
                    <span :class="isActive?'wxhactive':''">正在热映</span>
                </li>
            </router-link>
            <router-link custom to="/films/comingsoon" v-slot="{isActive,navigate}">
                <li  @click="navigate">
                    <span :class="isActive?'wxhactive':''">即将上映</span>
                </li>
            </router-link>
        </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
ul{
    list-style: none;
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    li{
        flex: 1;
        span{
            padding: 10px 0;
        }
    }
}
.wxhactive{
    color: red;
    border-bottom: red 3px solid;
}
</style>