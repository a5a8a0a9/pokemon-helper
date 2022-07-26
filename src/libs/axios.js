import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  headers: { 'Content-Type': 'application/json' }
})

Vue.use(VueAxios, instance)
export default instance
