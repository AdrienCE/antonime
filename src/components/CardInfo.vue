<template>

  <template v-if="displayMode === 'static'">
    <div>
      Card with no interaction
    </div>
  </template>
  <template v-if="displayMode === 'dynamic'">

    <!-- LINK TO PAGES [url, listeInline, href, imgUrl, title]-->
    <template v-if="linkPage === true">
      <a
        :href="url"
        :class="listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : 'w-full mb-7 md:mb-0 last:mb-0'"
        class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90"
      >
        <img :src="resolve_img_url(imgUrl)" class="object-cover w-full h-52 rounded-md md:h-72" alt="Card image" width="372" height="288"/>
        <h3 class="pt-2">{{ title }}</h3>
      </a>
    </template>

    <template v-else>
      <!-- CARD DEFAULT SIZE AND MINIMAL WITH POPUP [mini, popup, listeInline, imgUrl, title] -->
      <div
        class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90"
        :class="[
            cardMini ? 'bg-white border-2 border-white flex items-center gap-2 w-full rounded-lg last:mb-0 md:last:mb-0' :
            listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : 'w-full mb-7 md:mb-0 last:mb-0'
          ]"
        @click="handleClick"
      >
        <img :src="resolve_img_url(imgUrl)" :class="cardMini ? 'h-24 w-20 rounded-l-lg' : cardLarge ? 'w-full h-52 rounded-md md:h-72': ''" class="object-cover" alt="Card image"/>
        <h3 :class="cardMini ? 'text-ellipsis overflow-hidden' : cardLarge ? 'pt-2' : ''">
          {{ title }}
        </h3>
      </div>
    </template>
  </template>
  
  <PopupCard v-if="showPopup" @close="showPopup = false" :image="imgUrl" :title="title" :desc="description" :social="social" :button="button"/>
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
      displayMode: {
        type: String,
        default: 'static'
      },

      title: String,
      imgUrl: String,
      description: String,
      social: Object,
      url: String,
      button: Boolean,
      listeInLine: Boolean,
      linkPage: Boolean,
      cardMini: Boolean,
      cardLarge: Boolean,
      
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
