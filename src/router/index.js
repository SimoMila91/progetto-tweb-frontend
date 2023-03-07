import { createRouter, createWebHistory } from "vue-router";

import PersonalArea from "@/components/pages/PersonalArea.vue";
import TeacherList from "@/components/pages/TeacherList.vue";
import NotFound from "@/components/NotFound.vue";
import HomePage from "@/components/pages/HomePage.vue";
import TeacherPage from "@/components/pages/TeacherPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage,
        props: true,
    },
    {
        path: '/teachers',
        component: TeacherList,
    },
    {
        path: '/teacher',
        component: TeacherPage,
    },
    {
        path: '/personal',
        component: PersonalArea
    },
    {
        path: '/.pathMatch(.*)*',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router