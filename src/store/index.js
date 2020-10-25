import { createStore } from 'vuex';
import nutritionistsModule from './modules/nutritionists/index.js';

const store = createStore({
    modules: {
        nutritionists: nutritionistsModule
    },
    state() {
        return {
            userId: 'n3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;