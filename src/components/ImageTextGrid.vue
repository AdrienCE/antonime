<template>
  <div :class="['max-w-[1440px] m-auto p-8 md:py-8 md:flex', isInverted ? 'md:flex-row-reverse' : 'md:flex-row']">
    <div class="text-black-800 md:p-8 md:w-2/4">
      <h2 class="pb-[2rem] font-bold text-3xl">{{ title }}</h2>
      <p>{{ paragraphe }}</p>
      <p>{{ paragraphe }}</p>
    </div>
    <div class="relative md:p-8 md:w-2/4">
      <img src="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isInverted: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      paragraphe: {
        type: String,
        default: ''
      }
    }
  };
</script>
