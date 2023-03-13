import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { DynamicRouting } from '../declare/TypeDeclare'
import HomePage from '../views/HomePage.vue'
import page from '../views/page.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/page',
        component: page
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

let first_load = true

const pathArr: Array<DynamicRouting> = [
    {
        path: '/hello',
        component: 'HelloWord'
    }
]

const modules = import.meta.glob('../views/*.vue')

// 动态路由实现
router.beforeEach((to, from, next) => {
    if (first_load) {
        pathArr.forEach(v => {
            router.addRoute({
                path: v.path,
                component: modules[`../views/${v.component}.vue`]
            })
        })
        first_load = false
    }
    next()
})

export default router