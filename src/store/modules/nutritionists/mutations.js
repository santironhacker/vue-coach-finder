export default {
    // matches an action method also called registerCoach to be able to alter the data we receive from the frontend
    // and match it with the data format of the backend
    registerNutritionist(state, payload) {
        state.nutritionists.push(payload);
    },
    // set the nutritionist to the data we will have received from firebase
    // assuming payload is a list of coaches
    setNutritionists(state, payload) {
        state.nutritionists = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};