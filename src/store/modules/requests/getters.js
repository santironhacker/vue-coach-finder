export default {
    // Remember the convention to underscore unnused arguments
    // ORIGINAL: state, getters, rootState, rootGetters
    requests(state, _, _2, rootGetters) {
        const nutritionistId = rootGetters.userId;
        return state.requests.filter(req => req.nutritionistId === nutritionistId);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};