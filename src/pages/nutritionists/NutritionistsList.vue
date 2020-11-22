<template>
  <section>
      <nutritionist-filter @change-filter="setFilters"></nutritionist-filter>
  </section>
  <section>
      <div class="controls">
        <base-button mode="outline" @click="loadNutritionists">Refresh</base-button>
        <base-button v-if="!isNutritionist" link to="/register">Register as a nutritionist</base-button>
      </div>
      <ul v-if="filteredNutritionists.length > 0">
        <nutritionist-item
          v-for="nutritionist in filteredNutritionists" 
          :key="nutritionist.id"
          :id="nutritionist.id"
          :first-name="nutritionist.firstName"
          :last-name="nutritionist.lastName"
          :rate="nutritionist.hourlyRate"
          :areas="nutritionist.areas"
        ></nutritionist-item>
      </ul>
      <h3 v-else>No nutritionists found.</h3>
  </section>
</template>

<script>
import NutritionistItem from '../../components/nutritionists/NutritionistItem';
import NutritionistFilter from '../../components/nutritionists/NutritionistFilter';

export default {
  components: {
    NutritionistItem,
    NutritionistFilter
  },
  data() {
    return {
      activeFilters: {
        wealthness: true,
        'nutrition-plan': true,
        diet: true
      }
    }
  },
  created() {
    this.loadNutritionists();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    loadNutritionists() {
      this.$store.dispatch('nutritionists/loadNutritionists');
    }
  },
  computed: {
    filteredNutritionists() {
      // First element refers to the namespaced module and the second to the getter
      const nutritionists = this.$store.getters['nutritionists/nutritionists'];
      return nutritionists.filter(nutritionist => {
        if(this.activeFilters.wealthness && nutritionist.areas.includes('wealthness')) {
          return true;
        }
        if(this.activeFilters['nutrition-plan'] && nutritionist.areas.includes('nutrition-plan')) {
          return true;
        }
        if(this.activeFilters.diet && nutritionist.areas.includes('diet')) {
          return true;
        }
        return false;
      })
    },
    hasNutritionists() {
      return this.$store.getters['nutritionists/hasNutritionists'];
    },
    isNutritionist() {
      return this.$store.getters['nutritionists/isNutritionist'];
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>