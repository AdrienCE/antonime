<template>
  <div class="md:w-1/4 relative">
    <a v-if="!hasPopup" :href="url">
      <img class="h-[260px] object-cover cursor-pointer" :src="imgUrl" alt="Card image">
      <h3 class="py-4">{{ title }}</h3>
    </a>
    <div v-else class="h-[260px] object-cover cursor-pointer" @click="handleClick">
      <img :src="imgUrl" alt="Card image" class="md:h-[260px] object-cover">
      <h3 class="py-4">{{ title }}</h3>
    </div>
    <PopupCard v-if="showPopup" @close="showPopup = false">
      <template v-slot:content>
        <img :src="imgUrl" alt="Image popup" class="h-[550px] w-[400px] object-cover">
        <div class="pl-8">
          <h2 class="text-3xl font-bold py-4">{{ title }}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.</p>
        </div>
      </template>
    </PopupCard>
  </div>
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
    hasPopup: {
      type: Boolean,
      default: false
    },
    url: String // Ajouter la prop pour le lien personnalisé
  },
  setup(props) {
    const showPopup = ref(false);

    function handleClick() {
      if (props.hasPopup) {
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
