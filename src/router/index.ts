import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from "@/views/WorkView.vue";
import SchoolView from "@/views/SchoolView.vue";
import ProjectView from "../views/project/index.vue";
import ClassView from "../views/class/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/work',
            name: 'work',
            component: WorkView,
        },
        {
            path: '/school',
            name: 'school',
            component: SchoolView,
            // children: [
            //     {
            //         path: '/school/class',
            //         name: 'class',
            //         component: ClassView,
            //     },
            // ]
        },
        {
            path: '/class',
            name: 'class',
            component: ClassView,
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectView,
        },
    ]
})

export default router
