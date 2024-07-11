<template>

  <template v-if="displayMode === 'static'">
    <div>
      Card with no interaction
    </div>
  </template>
  <template v-if="displayMode === 'dynamic'">

    <template v-if="linkPage === true">
      <a
        :href="url"
        :class="listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : 'w-full mb-7 md:mb-0 last:mb-0'"
        class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90"
      >
        <img 
          :src="
            imgRoot ? img_root(imgRoot) :
            imgGuest ? img_guest(imgGuest) :
            imgExpoA ? img_expoa(imgExpoA) :
            imgExpoB ? img_expob(imgExpoB) :
            imgExpoC ? img_expoc(imgExpoC) : ''
          " class="object-cover w-full h-52 rounded-md md:h-72" alt="Card image" width="372" height="288"
        />
        <h3 class="pt-2">{{ title }}</h3>
      </a>
    </template>

    <template v-else>
      <div
        class="cursor-pointer transition ease-in delay-110 duration-110 hover:-translate-y-1 hover:scale-90"
        :class="[
            cardMini ? 'bg-white border-2 border-white flex items-center gap-2 w-full rounded-lg last:mb-0 md:last:mb-0' :
            listeInLine ? 'inline-block w-60 mr-4 xl:w-full' : 'w-full mb-7 md:mb-0 last:mb-0'
          ]"
        @click="handleClick"
      >
        <img 
          :src="
            imgRoot ? img_root(imgRoot) :
            imgGuest ? img_guest(imgGuest) :
            imgExpoA ? img_expoa(imgExpoA) :
            imgExpoB ? img_expob(imgExpoB) :
            imgExpoC ? img_expoc(imgExpoC) : ''
          " :class="cardMini ? 'h-24 w-20 rounded-l-lg' : cardLarge ? 'w-full h-52 rounded-md md:h-72': ''" class="object-cover" alt="Card image"
        />
        <h3 :class="cardMini ? 'text-ellipsis overflow-hidden' : cardLarge ? 'pt-2' : ''">
          {{ title }}
        </h3>
      </div>
    </template>
  </template>
  
  <PopupCard v-if="showPopup" @close="showPopup = false" 
    :image="
      imgRoot ? img_root(imgRoot) :
      imgGuest ? img_guest(imgGuest) :
      imgExpoA ? img_expoa(imgExpoA) :
      imgExpoB ? img_expob(imgExpoB) :
      imgExpoC ? img_expoc(imgExpoC) : ''
    "
    :title="title"

    :desc="description"
    :social="social"
    :social2="social2"
    :social3="social3"
    :button="button"
  />
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

      imgRoot: String,
      imgGuest: String,
      imgExpoA: String,
      imgExpoB: String,
      imgExpoC: String,

      description: String,
      social: Object,
      social2: Object,
      social3: Object,
      button: Boolean,

      url: String,
      
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
      img_root: function (path){
        let imgRoot = require.context('@/assets/images/', false, /\.(webp)$/)
        return imgRoot("./"+path)
      },
      img_guest: function (path) {
        let imgGuest = require.context('@/assets/images/guests/', false, /\.(webp)$/)
        return imgGuest("./"+path)
      },
      img_expoa: function (path) {
        let imgExpoA = require.context('@/assets/images/expoA/', false, /\.(webp)$/)
        return imgExpoA("./"+path)
      },
      img_expob: function (path) {
        let imgExpoB = require.context('@/assets/images/expoB/', false, /\.(webp)$/)
        return imgExpoB("./"+path)
      },
      img_expoc: function (path) {
        let imgExpoC = require.context('@/assets/images/expoC/', false, /\.(webp)$/)
        return imgExpoC("./"+path)
      }
    }
  };
</script>
