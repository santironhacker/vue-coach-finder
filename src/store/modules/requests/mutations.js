export default {
    addRequest(state, payload) {
        // Here we assume the payload is the request as we want to add it
        state.requests.push(payload);
    }
};