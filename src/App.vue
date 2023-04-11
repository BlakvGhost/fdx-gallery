<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
<style lang="scss">
@import '@/assets/main.css';

@for $i from 1 through 10 {
  .mw-#{$i}00px {
    max-width: #{$i}00px;
  }
}

// Boucle pour générer des classes de nuance de gris
@for $i from 1 through 9 {
  $gray-value: $i * 100;

  .text-gray-#{$gray-value} {
    color: rgb($gray-value - $i, $gray-value, $gray-value + $i);
  }
}
</style>