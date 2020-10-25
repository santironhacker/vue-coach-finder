export default {
    nutritionists(state) {
        return state.nutritionists;
    },
    hasNutritionists(state) {
        return state.nutritionists && state.nutritionists.length > 0;
    }
};