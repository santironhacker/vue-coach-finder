import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            nutritionists: [
                {
                  id: 'n1',
                  firstName: 'Julie',
                  lastName: 'Holt',
                  areas: ['wealthness', 'nutrition-plan', 'diet'],
                  description:
                    "I am Julie and I've worked as a freelance nutritionist for years. Let me help you solve all food related doubts!",
                  hourlyRate: 30
                },
                {
                  id: 'n2',
                  firstName: 'Tom',
                  lastName: 'Hockard',
                  areas: ['wealthness', 'nutrition-plan'],
                  description:
                    'I am Tom and as a personal trainer I can help you bring wealthness back to your lifestyle.',
                  hourlyRate: 30
                }
              ]
        }
    },
    mutations,
    actions,
    getters
}