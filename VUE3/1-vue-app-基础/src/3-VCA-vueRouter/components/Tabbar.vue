<template>
  <div class="tab">
    <ul>
        <!-- <li><a href="#/cinemas"></a>电影</li>
        <li>影院</li>
        <li>我的</li> -->

        <!-- <li><router-link to="/films" active-class="wxhactive">电影</router-link></li>
        <li><router-link to="/cinemas" active-class="wxhactive">影院</router-link></li>
        <li><router-link to="/center" active-class="wxhactive">我的</router-link></li> -->

        <router-link custom to="/films" v-slot="{isActive,navigate}">
            <li :class="isActive?'wxhactive':''" @click="navigate">电影</li>
        </router-link>
        <router-link custom to="/cinemas" v-slot="{isActive,navigate}">
            <li :class="isActive?'wxhactive':''" @click="navigate">影院</li>
        </router-link>
        <router-link custom to="/center" v-slot="{isActive,navigate}">
            <li :class="isActive?'wxhactive':''" @click="navigate">我的</li>
        </router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.tab{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: white;
    z-index: 100;
    ul{
        display: flex;
        li{
            flex: 1;
        }
    }
}
.wxhactive{
    color: red;
}
</style>