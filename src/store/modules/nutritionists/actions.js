export default {
    // data can also be named payload
    async registerNutritionist(context, data) {
        const userId = context.rootGetters.userId;
        const nutritionistData = {
            // id: new Date().toISOString(),
            // id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        const response = await fetch(`https://vue-nutritionists-platform.firebaseio.com/vue-nutritionists-platform/${userId}.json`, {
            // We only one to have one coach per userId
            method: 'PUT',
            // Stringify the data before sending it to firebase
            body: JSON.stringify({nutritionistData})
        });

        // The "response" object also has an object that return a promise,
        // so we can use await again and get the parsed data
        // const responseData = await response.json();

        if (!response.ok) {
            // error
        }

        // This line will only be executed after the fetch request is completed
        context.commit('registerNutritionist', {
            ...nutritionistData,
            id: userId
        });
    }
};