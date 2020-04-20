import Vue from 'vue'
import App from './App'
import axios from 'axios';
import store from './pages/store'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
App.mpType = 'app'
require('./utils/mock')
// 将store对象放置在vue的原型上
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
