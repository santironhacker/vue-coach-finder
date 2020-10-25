import { createRouter, createWebHistory } from 'vue-router';

import NutritionistDetail from './pages/nutritionists/NutritionistDetail.vue';
import NutritionistsList from './pages/nutritionists/NutritionistsList.vue';
import NutritionistRegistration from './pages/nutritionists/NutritionistRegistration.vue';
import ContactNutritionist from './pages/requests/ContactNutritionist.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/nutritionists'
        },
        {
            path: '/nutritionists', component: NutritionistsList
        },
        {
            path: '/nutritionists/:id', component: NutritionistDetail, 
            // Enforces to receive :id as a prop in the component the route points to
            props: true,
            children: [
                {
                    path: 'contact', component: ContactNutritionist
                }
            ]
        },
        {
            path: '/register', component: NutritionistRegistration
        },
        {
            path: '/requests', component: RequestsReceived
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
});

export default router;
