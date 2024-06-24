import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Films from '../views/Films.vue';
// import Cinemas from '../views/Cinemas.vue';
// import Center from '../views/Center.vue';
import NotFound from '../views/NotFound.vue'
import Comingsoon from '../views/films/Comingsoon.vue'
import Nowplaying from '../views/films/Nowplaying.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
const routes = [
    {
        path:'/films',
        name:"myfilms", // 命名路由
        component:Films,
        children:[
            {
                path:'/films/nowplaying',
                component:Nowplaying
            },
            {
                path:'comingsoon',
                component:Comingsoon
            },
            {
                path:'/films',
                redirect:'/films/nowplaying'
            }
        ]
    },
    {
        path:'/cinemas',
        component:()=>import('../views/Cinemas.vue')
    },
    {
        path:'/center',
        alias:"/wode", // 别名
        component:()=>import('../views/Center.vue'), // 懒加载
        meta:{
            requiredAuth:true // 设置拦截
        }
    },
    {
        path:'/detail/:filmId', //      /detail/** 动态路由配置 
        // path:'/detail',
        name:"detail",
        component:Detail
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/films'
        // redirect:{
        //     name:"myfilms"
        // }
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound 
    }
]

const router = createRouter({
    // history:createWebHashHistory(), // hash模型，#/film #/center
    history:createWebHistory(), // hash模型，#/film #/center
    routes, // routes:routes 的缩写
})

// 全局拦截  -  后台系统 - 除了登录页面，其他页面都必须授权才能访问
// router.beforeEach(async (to,from,next)=>{
//     let isAuthenticated = await localStorage.getItem("token")
//     if(to.name!== 'Login' && !isAuthenticated) next({
//         name: 'Login'
//     }) 
//     else next()
// })

//局部拦截 以/center为例
router.beforeEach(async (to,from,next)=>{
    let isAuthenticated = await localStorage.getItem("token")
    // 1.设置需要拦截的数组  
    // var arr = ['/centet','/card']
    // 2.在上面路由设置meta
    if(to.name!== 'Login' && !isAuthenticated && to.meta.requiredAuth) next({
        name: 'Login'
    }) 
    else next()
})

router.afterEach((to,from)=>{
    console.log("提交后端用户行为信息")
})
export default router