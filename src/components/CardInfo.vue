<template>
  <a v-if="displayMode === 'link'" :href="url" :class="listeInLine ? 'inline-block w-80 mr-4 xl:w-full' : 'block mb-7 md:mb-0 last:mb-0'">
    <img :src="resolve_img_url(imgUrl)" :srcset="resolve_img_url(imgUrl)" class="w-full h-60 object-cover rounded-md md:h-80 cursor-pointer" alt="Card image" width="100%" height="auto">
    <h3 class="pt-2">{{ title }}</h3>
  </a>

  <template v-else>

    <template v-if="displayMode === 'custom'">
      <div class="bg-white flex items-center gap-4 p-6 shadow-2xl mb-7 cursor-pointer md:mb-0 last:mb-0" @click="handleClick">
        <div class="md:w-[80px] md:h-[80px] md:clip-hexagon">
          <img :src="resolve_img_url(imgUrl)" alt="Card image" class="w-full object-cover h-full" width="350" height="350">
        </div>
        <h3>{{ title }}</h3>
      </div>
    </template>

    <template v-else>
      <div :class="listeInLine ? 'inline-block w-80 mr-4 xl:w-full' : 'mb-7 cursor-pointer md:mb-0 last:mb-0'" @click="handleClick">
        <img :src="resolve_img_url(imgUrl)" :srcset="resolve_img_url(imgUrl)" decoding="async" class="w-full h-60 object-cover rounded-md md:h-80" alt="Card image" width="100%" height="auto">
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
