import {createRouter, createWebHistory} from "vue-router";


import MainPage from "../components/mainpage/MainPage.vue";
import CatalogMain from "../view/catalog/CatalogMain.vue";
import SalesMain from "../view/sales/SalesMain.vue";
import SportMain from "../view/sport/SportMain.vue";
import BrandMain from "../view/brand/BrandMain.vue";
import WorkClothesMain from "../view/workClothes/WorkClothesMain.vue";

const routes =
    [

        {
            path: '/',
            name: 'home',
            component: MainPage,

        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogMain,

        },
        {
            path: '/sales',
            name: 'sales',
            component: SalesMain,

        },
        {
            path: '/sport',
            name: 'sport',
            component: SportMain,

        },
        {
            path: '/brand',
            name: 'brand',
            component: BrandMain,

        },
        {
            path: '/work-clothes',
            name: 'work-clothes',
            component: WorkClothesMain,

        },
    ]

const router = createRouter({

    history: createWebHistory(),

    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }

    }
})


export default router