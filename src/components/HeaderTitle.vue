<template>
  <div class="relative bg-black w-full">
    <img src="@/assets/images/convention.jpg" alt="image convention" class="w-full h-[170px] opacity-50 object-cover"/>
    <h2 class="absolute inset-0 flex items-center justify-center text-white text-center text-3xl tracking-wide font-bold">
      {{ title }}
    </h2>
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
