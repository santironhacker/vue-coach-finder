export default {
    nutritionists(state) {
        return state.nutritionists;
    },
    hasNutritionists(state) {
        return state.nutritionists && state.nutritionists.length > 0;
    },
    // _ is state and _2 the rootState
    isNutritionist(_, getters, _2, rootGetters) {
        const nutritionists = getters.nutritionists;
        const userId = rootGetters.userId;
        // Checks if some nutritionist in our data already exists (avoid re-registration)
        return nutritionists.some(nutritionist => nutritionist.id === userId)
    }
};