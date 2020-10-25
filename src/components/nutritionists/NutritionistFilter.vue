<template>
  <base-card>
    <h2>Find Your Nutritionist</h2>
    <span class="filter-option">
        <input type="checkbox" id="wealthness" checked @change="setFilter">
        <label for="wealthness">Wealthness</label>
    </span>
    <span class="filter-option">
        <input type="checkbox" id="nutrition-plan" checked @change="setFilter">
        <label for="nutrition-plan">Nutrition Plan</label>
    </span>
    <span class="filter-option">
        <input type="checkbox" id="diet" checked @change="setFilter">
        <label for="diet">Diet</label>
    </span>
  </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                wealthness: true,
                'nutrition-plan': true,
                diet: true
            }
        }
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>