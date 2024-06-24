import { createApp } from 'vue'
// import './style.css'
import App from './6-pinia/App.vue'
import router from './6-pinia/router'
import {createPinia} from 'pinia'
import 'vant/lib/index.css'
import {Swipe, SwipeItem} from 'vant'
const pinia = createPinia()

var app = createApp(App)
app.use(router) // 注册路由对象
app.use(pinia) // 注册pinia状态管理
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
 