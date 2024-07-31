<template>
  <router-link :to="url" class="bg-custom-blue2 hover:bg-blue-900 duration-300 font-sm text-white inline-block rounded py-3 px-12">
    {{ title }}
  </router-link>
</template>

<script setup>
  import { defineProps } from 'vue';
  // Définition des props
  const props = defineProps({
    title: String,
    url: String
  });

  // Extraire la valeur de title pour la rendre réactive
  import { ref } from 'vue';
  const title = ref(props.title);
</script>
