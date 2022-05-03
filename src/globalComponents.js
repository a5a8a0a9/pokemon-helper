import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

const globalComponents = {
  install(Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}

export default globalComponents
