<template>
  <div :class="['m-auto mb-32 gap-8 last:mb-0 flex flex-col', isInverted ? 'md:flex-row-reverse' : 'md:flex-row']">
    <div class="text-black-800 md:w-2/4">
      <p>{{ paragraphe }}</p>
      <p>{{ paragraphe2 }}</p>
    </div>
    <div class="md:w-2/4">
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
      paragraphe: {
        type: String,
        default: ''
      },
      paragraphe2: {
        type: String,
        default: ''
      }
    }
  };
</script>
