<template>
  <section>
      FILTER
  </section>
  <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as a nutritionist</router-link>
      </div>
      LIST OF NUTRITIONISTS
      <ul v-if="hasNutritionists">
        <li v-for="nutritionist in filteredNutritionists" :key="nutritionist.id">
          {{ nutritionist.firstName }}
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
export default {
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

<style>

</style>