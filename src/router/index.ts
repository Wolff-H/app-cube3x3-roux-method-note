/**
 * @description
 * 根层级的路由定义。
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

// views //
import PageNotFound from "@/ui/view-page-not-found/index.vue"
import Home from "@/ui/view-home/index.vue"

/**********************************************************************************************************************/

const routes: RouteRecordRaw[] =
[
    // 兜底404 //
    {
        path: '/:pathMatch(.*)',
        component: PageNotFound,
    },
    {
        path: '/',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

/**********************************************************************************************************************/

export default router