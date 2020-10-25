export default {
    // matches an action method also called registerCoach to be able to alter the data we receive from the frontend
    // and match it with the data format of the backend
    registerNutritionist(state, payload) {
        state.nutritionists.push(payload);
    }
};