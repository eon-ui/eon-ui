import { createApp } from 'vue'
import App from './App.vue'

import EonUI from './components/index'
import './styles/index.scss'

import './assets/base.css'

createApp(App).use(EonUI).mount('#app')
