import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './libs/axios'
import '@/globalStyle'
import GlobalComponents from '@/globalComponents'

Vue.config.ignoredElements = [/^ion-/]
Vue.config.productionTip = false
Vue.use(GlobalComponents)

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App)
}).$mount('#app')
