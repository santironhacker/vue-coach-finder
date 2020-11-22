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
        const response = await fetch(`https://vue-nutritionists-platform.firebaseio.com/nutritionists/${userId}.json`, {
            // We only one to have one coach per userId
            method: 'PUT',
            // Stringify the data before sending it to firebase
            body: JSON.stringify(nutritionistData)
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
    },
    // action can be triggered by any component where it is used
    async loadNutritionists(context) {
        const response = await fetch(`https://vue-nutritionists-platform.firebaseio.com/nutritionists.json`);
        const responseData = await response.json();
        
        // error can be handled by the component that dispatched the action
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        
        const nutritionists = [];
        for (const key in responseData) {
            const nutritionist = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            nutritionists.push(nutritionist);
        }
        context.commit('setNutritionists', nutritionists);
    }
};