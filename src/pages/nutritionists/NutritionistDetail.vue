<template>
  <div>
    <p>Nutritionist Detail</p>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedNutritionist: null
    };
  },
  computed: {
    fullName() {
      return `${this.selectedNutritionist.firstName} ${this.selectedNutritionist.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/contact`; // nutritionists/n1/contact
    },
    // Here we need to define areas, rate and description because the prop we receive is just an id.
    // We are in charge to then point to the correct nutritionist field info desired.
    areas() {
        return this.selectedNutritionist.areas;
      },
    rate() {
      return this.selectedNutritionist.hourlyRate;
    },
    description() {
      return this.selectedNutritionist.description;
    }
  },
  created() {
    this.selectedNutritionist = this.$store.getters['nutritionists/nutritionists']
    .find(nutritionist => nutritionist.id === this.id);
  }
}
</script>

<style>

</style>