<template>
  <section>
      FILTER
  </section>
  <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a nutritionist</base-button>
      </div>
      LIST OF NUTRITIONISTS
      <ul v-if="hasNutritionists">
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
      <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import NutritionistItem from '../../components/nutritionists/NutritionistItem';

export default {
  components: {
    NutritionistItem
  },
  computed: {
    filteredNutritionists() {
      // First element refers to the namespaced module and the second to the getter
      return this.$store.getters['nutritionists/nutritionists'];
    },
    hasNutritionists() {
      return this.$store.getters['nutritionists/hasNutritionists'];
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