<template>
  <a v-if="displayMode === 'link'" :href="url" class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90" :class="listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : 'w-full mb-7 md:mb-0 last:mb-0'">
    <img :src="resolve_img_url(imgUrl)" :srcset="resolve_img_url(imgUrl)" class="object-cover h-52 rounded-md md:h-72" alt="Card image" width="372" height="288">
    <h3 class="pt-2">{{ title }}</h3>
  </a>

  <template v-else>
    <template v-if="displayMode === 'custom'">
      <div class="bg-white cursor-pointer border-2 border-white flex items-center gap-2 w-full rounded-lg last:mb-0 transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90 md:last:mb-0" @click="handleClick">
        <img :src="resolve_img_url(imgUrl)" alt="Card image" class="object-cover h-24 w-20 rounded-l-lg" width="20" height="24">
        <h3 class="text-ellipsis overflow-hidden">{{ title }}</h3>
      </div>
    </template>

    <template v-else>
      <div class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90" :class="listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : ' w-full mb-7 md:mb-0 last:mb-0'" @click="handleClick">
        <img :src="resolve_img_url(imgUrl)" :srcset="resolve_img_url(imgUrl)" class="object-cover h-52 rounded-md md:h-72" alt="Card image" width="372" height="288">
        <h3 class="pt-2">{{ title }}</h3>
      </div>
    </template>
  </template>

  <PopupCard v-if="showPopup" @close="showPopup = false" :image="imgUrl" :title="title" :desc="description" :social="social"/>
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
    description: String,
    social: Object,
    url: String,
    listeInLine: Boolean,
    displayMode: {
      type: String,
      default: 'link'
    },
    hasPopup: {
      type: Boolean,
      default: false
    }
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
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context('@/assets/images/guests/', false, /\.(webp)$/)
      return images("./"+path)
    }
  }
};
</script>
