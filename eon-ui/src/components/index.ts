import { type App } from 'vue'

import Icon from './icon/index.vue'

const components = [Icon]

export default {
  install: (app: App) => {
    components.forEach((component) => {
      app.component(component.name, Icon)
    })
  }
}
