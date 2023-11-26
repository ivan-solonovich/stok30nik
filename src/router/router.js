import {createRouter, createWebHistory} from "vue-router";


import MainPage from "../components/mainpage/MainPage.vue";
import CatalogMain from "../view/catalog/CatalogMain.vue";
import SalesMain from "../view/sales/SalesMain.vue";
import SportMain from "../view/sport/SportMain.vue";
import BrandMain from "../view/brand/BrandMain.vue";
import WorkClothesMain from "../view/workClothes/WorkClothesMain.vue";
import xxxlSize from "../view/xxxl/xxxlSize.vue";
import WomenPage from "../view/catalog/catalogCategoriePage/WomenPage.vue";
import CatalogCategories from "../view/catalog/CatalogCategories.vue";
import MenPage from "../view/catalog/catalogCategoriePage/MenPage.vue";
import GirlsPage from "../view/catalog/catalogCategoriePage/GirlsPage.vue";
import BoysPage from "../view/catalog/catalogCategoriePage/BoysPage.vue";
import SportPage from "../view/catalog/catalogCategoriePage/SportPage.vue";
import XxxlPage from "../view/catalog/catalogCategoriePage/XxxlPage.vue";
import WorksPage from "../view/catalog/catalogCategoriePage/WorksPage.vue";
import BrandPage from "../view/catalog/catalogCategoriePage/BrandPage.vue";

const routes =
    [

        {
            path: '/',
            name: 'home',
            component: MainPage,

        },
        {
            path: '/catalog/:',
            name: 'catalog',
            component: CatalogMain,
            children: [
                {
                    path: '',
                    name: 'catalog',
                    component: CatalogCategories,
                },
                {
                    path: '/women-clothes',
                    name: 'women-clothes',
                    component: WomenPage,

                },
                {
                    path: '/men-clothes',
                    name: 'men-clothes',
                    component: MenPage,

                },
                {
                    path: '/girls-clothes',
                    name: 'girls-clothes',
                    component: GirlsPage,

                },
                {
                    path: '/boys-clothes',
                    name: 'boys-clothes',
                    component: BoysPage,

                },
                {
                    path: '/sport-clothes',
                    name: 'sport-clothes',
                    component: SportPage,

                },
                {
                    path: '/xxxl-clothes',
                    name: 'xxxl-clothes',
                    component: XxxlPage,

                },
                {
                    path: '/works-clothes',
                    name: 'works-clothes',
                    component: WorksPage,

                },
                {
                    path: '/brand-clothes',
                    name: 'brand-clothes',
                    component: BrandPage,

                },
            ]

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
        {
            path: '/xxxl',
            name: 'xxxl',
            component: xxxlSize,

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