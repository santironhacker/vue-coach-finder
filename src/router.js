import { createRouter, createWebHistory } from 'vue-router';

import NutritionistDetail from './pages/nutritionists/NutritionistDetail.vue';
import NutritionistsList from './pages/nutritionists/NutritionistsList.vue';
import NutritionistRegistration from './pages/nutritionists/NutritionistRegistration.vue';
import NutritionistsCoach from './pages/requests/ContactNutritionist.vue';
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
            path: '/nutritionists/:id', component: NutritionistDetail, children: [
                {
                    path: 'contact', component: NutritionistsCoach
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
