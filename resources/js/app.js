/**
 * Amadeus Panel
 * @link https://github.com/steinsmc/Amadeus
 * @author LixWorth<lixworth@163.com>
 *
 * 这里使用了vuetifyjs(https://vuetifyjs.com) 构建前端页面
 * 可以参考这个实例自行扩展
 */

// require('./bootstrap');
window.Vue = require('vue');
import Vuetify from 'vuetify';
import Vuex from 'vuex'

console.log("\n" +
    " ______                              __                             \n" +
    "/\\  _  \\                            /\\ \\                            \n" +
    "\\ \\ \\L\\ \\     ___ ___       __      \\_\\ \\      __   __  __    ____  \n" +
    " \\ \\  __ \\  /' __` __`\\   /'__`\\    /'_` \\   /'__`\\/\\ \\/\\ \\  /',__\\ \n" +
    "  \\ \\ \\/\\ \\ /\\ \\/\\ \\/\\ \\ /\\ \\L\\.\\_ /\\ \\L\\ \\ /\\  __/\\ \\ \\_\\ \\/\\__, `\\\n" +
    "   \\ \\_\\ \\_\\\\ \\_\\ \\_\\ \\_\\\\ \\__/.\\_\\\\ \\___,_\\\\ \\____\\\\ \\____/\\/\\____/\n" +
    "    \\/_/\\/_/ \\/_/\\/_/\\/_/ \\/__/\\/_/ \\/__,_ / \\/____/ \\/___/  \\/___/ \n" +
    "                                                                    \n" +
    " Amadeus Panel Version: "+document.getElementsByTagName('meta')['amadeus'].content+" github: https://github.com/steinsmc ");

Vue.use(Vuetify);
Vue.use(Vuex);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login',require('./components/Login').default);

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
});

