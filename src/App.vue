<template>
  <TheHeader/>
  <main>
    <router-view v-slot="slotProps">
      <!-- out-in to animate the removal of the page and then the entrance of new page -->
      <transition name="route" mode="out-in">
        <!-- The Component with capital C is whatever the component the route loads -->
        <!-- Remember when using transition there should only be only one root component -->
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

main {
  width: 90%;
  margin-left: 5%;

}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  /* Move the element to the actual position */
  opacity: 1;
  transform: translateY(0);
}
</style>