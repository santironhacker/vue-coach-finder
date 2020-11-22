export default {
    async contactNutritionist(context, payload) {
        const newRequest = {
            // id: new Date().toISOString(),
            // nutritionistId: payload.nutritionistId,
            userEmail: payload.email,
            message: payload.message,
        };

        const response = await fetch(`https://vue-nutritionists-platform.firebaseio.com/requests/${payload.nutritionistId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        // name refers to the automatically generated id by firebase
        newRequest.id = responseData.name;
        newRequest.nutritionistId = payload.nutritionistId;

        // The addRequest is as it is defined in the mutations file
        // Second argument is the payload
        context.commit('addRequest', {
            newRequest
        });
    },
    async loadRequests(context) {
        const nutritionistId = context.rootGetters.userId;
        const response = await fetch(`https://vue-nutritionists-platform.firebaseio.com/requests/${nutritionistId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests!');
            throw error;
        }

        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                nutrionistId: nutritionistId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
            }
            requests.push(request);
        }

        context.commit('setRequests', requests);
    }
};