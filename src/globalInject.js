import UtilityMixin from '@/libs/utility'

const GlobalInject = {
  install(Vue) {
    Vue.use(UtilityMixin)
  }
}

export default GlobalInject
