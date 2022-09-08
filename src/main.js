import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueI18n from 'vue-i18n'
import messages from './i18n'

import '@/assets/style/all.scss'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'cn',
  messages,
})

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
