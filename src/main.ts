import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import MTD_NEXT from '@ss/mtd-vue2'

import './style.css'
import App from './App.vue'

Vue.use(VueCompositionAPI)
Vue.use(MTD_NEXT)

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// createApp(App).mount('#app')
