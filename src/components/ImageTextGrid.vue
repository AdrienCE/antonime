<template>
    <div :class="['md:flex', isInverted ? 'md:flex-row-reverse' : 'md:flex-row']">
      <div class="w-full text-black-800 md:w-2/3">
        <p class="text-justify md:text-left">{{ paragraphe }}</p>
        <p class="text-justify md:text-left">{{ paragraphe2 }}</p>
      </div>
      <img class="w-full mt-5 md:w-1/3 md:mt-0" src="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg">
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
  