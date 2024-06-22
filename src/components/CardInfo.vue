<template>
  <div class="md:w-1/4 relative">
    <a v-if="displayMode === 'link'" :href="url">
      <img class="md:h-[260px] object-cover cursor-pointer rounded-md" :src="imgUrl" alt="Card image">
      <h3 class="py-4">{{ title }}</h3>
    </a>
    <div v-else class="md:h-[200px] object-cover cursor-pointer" @click="handleClick">
      <div v-if="displayMode === 'custom'" class="md:w-[300px] md:h-[120px] bg-white p-6 shadow-2xl rounded-lg md:flex">
        <img :src="imgUrl" alt="Card image" class="md:h-[80px] md:w-[80px] object-cover md:rounded-full">
      </div>
      <img v-else :src="imgUrl" alt="Card image" class="md:h-[260px] object-cover rounded-md">
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
