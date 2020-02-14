/**
 * Amadeus Panel
 * @link https://github.com/steinsmc/Amadeus
 * @author LixWorth<lixworth@163.com>
 *
 * 这里使用了vuetifyjs(https://vuetifyjs.com) 构建前端页面
 * 可以参考这个实例自行扩展
 */

require('./bootstrap');
require('./amadeus');
window.Vue = require('vue');

import Vuetify from 'vuetify';
import Vuex from 'vuex'
import preview from 'vue-photo-preview'
import VueLazyload from 'vue-lazyload'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import router from './router'

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(preview);
Vue.use(VueLazyload);
Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login',require('./components/Login').default);
Vue.component('singlepage',require('./components/layouts/SinglePage').default);

function loadLocaleMessages () {
    const locales = require.context('./../lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key)
        }
    });
    return messages
};

const app = new Vue({
    el: '#amadeus-bugdhdj-app', //BUGDHDJ 保佑无需debug
    store: new Vuex.Store({
        state: {
        },
        mutations: {
        },
        actions: {

        }
    }),
    vuetify: new Vuetify({}),
    router: new VueRouter({
        mode: 'history',
        routes: router
    }),
    i18n: new VueI18n({
        locale: 'en',
        messages: loadLocaleMessages(),
    })
});

//TODO: ServiceWorker