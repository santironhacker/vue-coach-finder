export default {
    // data can also be named payload
    registerNutritionist(context, data) {
        const nutritionistData = {
            // id: new Date().toISOString(),
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        context.commit('registerNutritionist', nutritionistData);
    }
};