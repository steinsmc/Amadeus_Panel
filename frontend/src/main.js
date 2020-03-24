/**
 * Amadeus Panel
 * Game Server Controlling System ( Panel )
 *
 * @version 1.0 [alpha-bugdhdj]
 * @copyright SteinsMC <https://github.com/steinsmc/>
 * @license MPL (https://www.mozilla.org/MPL/2.0/）
 * @author dhdj <dhdwjy@gmail.com>
 * @author LixWorth <lixworth@163.com>
 * @link https://github.com/steinsmc
 */
import Vue from 'vue'
import store from './store'
import i18n from './plugins/i18n'
import vuetify from './plugins/vuetify'
import preview from 'vue-photo-preview'
import VueLazyload from 'vue-lazyload'
import router from './router'
import VueCookie from 'vue-cookie';
import VueAxios from "vue-axios";
import axios from 'axios'

import App from './App.vue'

import './registerServiceWorker'
import './amadeus'

Vue.config.productionTip = false

Vue.use(preview);
Vue.use(VueLazyload, {
 preLoad: 1.3,
 error: '/images/vendor/vue-photo-preview/dist/photo-preview-skin/default-skin.svg',
 loading: '/images/vendor/vue-photo-preview/dist/photo-preview-skin/preloader.gif',
 attempt: 1
})
Vue.use(VueCookie);
Vue.use(VueAxios, axios)
new Vue({
 router,
 store,
 vuetify,
 i18n,
 render: h => h(App)
}).$mount('#app')
