export default {
    // Remember the convention to underscore unnused arguments
    // ORIGINAL: state, getters, rootState, rootGetters
    // convention: state, _, _2, _3
    requests(state) {
        return state.requests;
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    },
    shouldUpdateData(state) {
        const lastFetch = state.lastFetch;
        if(!lastFetch) {
            return true;
        }
        const currentTimestamp = new Date().getTime();
        return (currentTimestamp - lastFetch) > 60000;
    }
};