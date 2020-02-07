/**
 * Amadeus Panel
 * @link https://github.com/steinsmc/Amadeus
 * @author LixWorth<lixworth@163.com>
 *
 * 这里使用了vuetifyjs(https://vuetifyjs.com) 构建前端页面
 * 可以参考这个实例自行扩展
 */

require('./bootstrap');
window.Vue = require('vue');
import Dashboard from './components/views/single/Dashboard';
import About from './components/views/single/About';

import Vuetify from 'vuetify';
import Vuex from 'vuex'
import preview from 'vue-photo-preview'
import VueLazyload from 'vue-lazyload'
import 'vue-photo-preview/dist/skin.css'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

console.log("\n" +
    " ______                              __                             \n" +
    "/\\  _  \\                            /\\ \\                            \n" +
    "\\ \\ \\L\\ \\     ___ ___       __      \\_\\ \\      __   __  __    ____  \n" +
    " \\ \\  __ \\  /' __` __`\\   /'__`\\    /'_` \\   /'__`\\/\\ \\/\\ \\  /',__\\ \n" +
    "  \\ \\ \\/\\ \\ /\\ \\/\\ \\/\\ \\ /\\ \\L\\.\\_ /\\ \\L\\ \\ /\\  __/\\ \\ \\_\\ \\/\\__, `\\\n" +
    "   \\ \\_\\ \\_\\\\ \\_\\ \\_\\ \\_\\\\ \\__/.\\_\\\\ \\___,_\\\\ \\____\\\\ \\____/\\/\\____/\n" +
    "    \\/_/\\/_/ \\/_/\\/_/\\/_/ \\/__/\\/_/ \\/__,_ / \\/____/ \\/___/  \\/___/ \n" +
    "                                                                    \n" +
    " Powered by Amadeus Panel Version:"+document.getElementsByTagName('meta')['amadeus'].content+" Copyright (c) 2019-2020 by SteinsMC. Github: https://github.com/steinsmc ");

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(preview);
Vue.use(VueLazyload);
Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('login',require('./components/Login').default);

Vue.component('singlepage',require('./components/SinglePage').default);

//TODO: NOT FOUND 与不需要vuerouter的路由处理
const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/about', component: About },
];

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

const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {

    }
});

const app = new Vue({
    el: '#amadeus-bugdhdj-app', //BUGDHDJ 保佑无需debug
    store,
    vuetify: new Vuetify({}),
    router: new VueRouter({
        routes
    }),
    i18n: new VueI18n({
        locale: 'en',
        messages: loadLocaleMessages(),
    })
});

