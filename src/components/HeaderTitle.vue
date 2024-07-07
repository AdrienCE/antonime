<template>
  <div class="h-40 flex items-center">
    <div class="container my-7 px-7 flex">
      <h2 class="text-neutral-50 text-center text-3xl font-bold text-stroke-headline">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import { register } from 'swiper/element/bundle';
  register();

  // Définition des props
  const props = defineProps({
    title: String,
  });

  // Extraire la valeur de title pour la rendre réactive
  import { ref } from 'vue';
  const title = ref(props.title);
</script>
