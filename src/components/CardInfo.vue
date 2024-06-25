<template>
  <a v-if="displayMode === 'link'" :href="url" class="block mb-7 md:mb-0 last:mb-0">
    <img class="object-cover cursor-pointer rounded-md md:h-[260px]" :src="imgUrl" alt="Card image">
    <h3 class="pt-2">{{ title }}</h3>
  </a>

  <template v-else>

    <template v-if="displayMode === 'custom'">
      <div class="bg-white flex items-center gap-4 p-6 shadow-2xl mb-7 cursor-pointer md:mb-0 last:mb-0" @click="handleClick">
        <div class="md:w-[80px] md:h-[80px] md:clip-hexagon">
          <img :src="imgUrl" alt="Card image" class="object-cover w-full h-full">
        </div>
        <h3>{{ title }}</h3>
      </div>
    </template>

    <template v-else>
      <div class="mb-7 cursor-pointer md:mb-0 last:mb-0" @click="handleClick">
        <img :src="imgUrl" alt="Card image" class="object-cover rounded-md md:h-[260px]">
        <h3 class="pt-2">{{ title }}</h3>
      </div>
    </template>

  </template>

  <PopupCard v-if="showPopup" @close="showPopup = false">
    <template v-slot:content>
      <img :src="imgUrl" alt="Image popup" class="h-[550px] md:w-[400px] object-cover rounded-md">
      <div class="pl-8 flex flex-col justify-between">
        <h2 class="text-3xl font-bold py-4">{{ title }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.</p>
      <div class="text-3xl flex flex-row items-end mt-auto gap-4 pt-6 md:pb-8">
        <i class="bi bi-tiktok"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-youtube"></i>
      </div>
      </div>
    </template>
  </PopupCard>
</template>

<script>
  import { ref } from 'vue';
  import PopupCard from './PopupCard.vue';

  export default {
    name: 'CardInfo',
    components: {
      PopupCard
    },
    props: {
      title: String,
      imgUrl: String,
      displayMode: {
        type: String,
        default: 'link'
      },
      hasPopup: {
        type: Boolean,
        default: false
      },
      url: String
    },
    setup(props) {
      const showPopup = ref(false);

      function handleClick() {
        if (props.hasPopup || props.displayMode === 'popup') {
          showPopup.value = true;
        }
      }

      return {
        showPopup,
        handleClick
      };
    }
  };
</script>
