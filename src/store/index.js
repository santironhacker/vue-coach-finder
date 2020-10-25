import { createStore } from 'vuex';
import nutritionistsModule from './modules/nutritionists/index.js';

const store = createStore({
    modules: {
        nutritionists: nutritionistsModule
    }
});

export default store;