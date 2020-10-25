<template>
  <section>
    <base-card>
      <h2>Register as a nutritionist now!</h2>
      <nutritionist-form @save-data="saveData"></nutritionist-form>
    </base-card>
  </section>

</template>

<script>
import NutritionistForm from '../../components/nutritionists/NutritionistForm';

export default {
  components: {
    NutritionistForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('nutritionists/registerNutritionist', data);
      // The replace method avoids the user to be able to navigate back to the previous page (the form in this case)
      this.$router.replace('/nutritionists');
    }
  }
}
</script>

<style>

</style>