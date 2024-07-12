<template>
  <div class="h-32 flex items-center">
    <div class="container mt-7 px-7 flex">
      <h2 class="text-custom-white text-stroke-headline linebar font-bold text-4xl xl:text-5xl">
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
