<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white md:pr-16 h-[90vh] md:h-[550px] w-[90vw] md:w-[1100px] rounded-lg relative flex flex-col md:flex-row">
      <button class="absolute top-1 right-3 text-5xl md:text-black text-white z-50" @click="$emit('close')">
        <FontAwesomeIcon :icon="['fa', 'xmark']" class="fa-2xs"/>
      </button>
        
      <div class="relative">
        <img :src="resolve_img_url(image)" :srcset="resolve_img_url(image)" decoding="async" alt="Image popup" class="w-full h-52 md:h-[550px] md:w-[400px] object-cover rounded-md">
        <div class="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0 rounded-md"></div>
      </div>
        
      <div class="p-4 flex flex-col justify-between flex-1 overflow-hidden">
        <h2 class="text-3xl font-bold py-4">{{ title }}</h2>
        <div class="flex-1 overflow-y-auto pr-4">
          <p>{{ desc }}</p>
        </div>
        <div class="text-3xl flex flex-row items-end mt-4 gap-4 pt-6 md:pb-8">
          <template v-for="(socials, index) in social" :key="index">
            <a target="_blank" :href="
              socials.insta ? socials.insta :
              socials.tiktok ? socials.tiktok :
              socials.x ? socials.x :
              socials.yt ? socials.yt :
              ''
            ">
              <FontAwesomeIcon :icon="
                socials.insta ? ['fab', 'instagram'] :
                socials.tiktok ? ['fab', 'tiktok'] :
                socials.x ? ['fab', 'x-twitter'] :
                socials.yt ? ['fab', 'youtube'] :
                ''
              "/>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import { faXmark } from '@fortawesome/free-solid-svg-icons';
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { faTiktok } from '@fortawesome/free-brands-svg-icons';
  import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
  import { faYoutube } from '@fortawesome/free-brands-svg-icons';

  library.add(faXmark, faInstagram, faTiktok, faXTwitter, faYoutube);

  export default {
    components: {
      FontAwesomeIcon
    },
    props: {
      title: String,
      desc: String,
      image: String,
      social: Object
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('@/assets/images/guests/', false, /\.(webp)$/);
        return images("./" + path);
      }
    }
  };
</script>
