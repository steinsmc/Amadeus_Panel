import Vue from 'vue'
import VueRouter from 'vue-router'
import SinglePage from "../layouts/SinglePage";
const axios = require('axios').default;

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            title: '登录',
            auth: false
        }
    },
    {
        path: '/',
        component: SinglePage,
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            },
            {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: "about" */ '../views/single/Dashboard.vue'),
                meta: {
                    title: '仪表盘',
                    auth: true
                },
            },
            {
                path: '/about',
                component: () => import(/* webpackChunkName: "about" */ '../views/single/About.vue'),
                meta: {
                    title: '关于',
                    auth: true
                },
            },
            {
                path: '*',
                name: 'NotFound',
                component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundComponent.vue'),
                meta: {
                    title: '页面被火狐吃了',
                    auth: true
                }
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to,from,next) => {
    router.app.$options.store.commit('UpdateLoading',true);
    if (to.meta.title) {
        document.title = to.meta.title+" | Powered by Steins;MC Amadeus"
    }
    if(Vue.cookie.get('AmadeusToken') === null){
        if(to.matched.some(m => m.meta.auth)) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }else{
            next();
        }
    }else{
        axios.post('/api/auth', {},{
            headers: {
                'Authorization': "Bearer "+Vue.cookie.get('AmadeusToken')
            }
        }).then(response => {
            if (response.data.success === true) {
                next();
            } else {
                Vue.cookie.delete('AmadeusToken');
                if(to.matched.some(m => m.meta.auth)) {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    });
                }else{
                    next();
                }
            }
        }).catch(response => {
            Vue.cookie.delete('AmadeusToken');
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        });
    }
});
router.afterEach((to,from) => {
    router.app.$options.store.commit('UpdateLoading',false);
});
export default router;
