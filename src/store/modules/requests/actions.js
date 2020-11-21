export default {
    contactNutritionist(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            nutritionistId: payload.nutritionistId,
            userEmail: payload.email,
            message: payload.message,
        };
        // The addRequest is as it is defined in the mutations file
        // Second argument is the payload
        context.commit('addRequest', newRequest);
    }
};