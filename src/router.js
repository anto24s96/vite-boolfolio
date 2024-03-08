import { createRouter, createWebHistory } from 'vue-router'

import AppHome from './pages/AppHome.vue';
import AppProject from './pages/AppProject.vue';
import AppNotFound from './pages/AppNotFound.vue';
import ProjectDetails from './pages/ProjectDetails.vue'
import AppContactUs from './pages/AppContactUs.vue';
import AppThankYou from './pages/AppThankYou.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject
        },
        {
            path: '/project/:slug',
            name: 'project-details',
            component: ProjectDetails

        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: AppThankYou
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }