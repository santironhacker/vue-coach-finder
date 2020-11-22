export default {
    // Remember the convention to underscore unnused arguments
    // ORIGINAL: state, getters, rootState, rootGetters
    requests(state, _, _2, _3) {
        return state.requests;
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};