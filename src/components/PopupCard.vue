<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white h-[90vh] w-[90vw] rounded-xl relative flex flex-col md:flex-row md:h-[550px] md:w-[1100px]">
      <button class="absolute top-1 right-3 text-5xl md:text-black text-white z-50" @click="$emit('close')">
        <FontAwesomeIcon :icon="['fa', 'xmark']" class="fa-2xs"/>
      </button>
        
      <div class="relative">
        <img :src="image" decoding="async" alt="Image popup" class="w-full h-52 object-cover md:h-[550px] md:w-[400px] rounded-t-lg md:rounded-t-none md:rounded-l-lg xl:rounded-l-lg"/>
        <div class="bg-black absolute inset-0 bg-opacity-50 md:bg-opacity-0"></div>
      </div>
        
      <div class="p-4 flex flex-col justify-between flex-1 overflow-hidden">
        <h2 class="text-3xl font-bold py-4">{{ title }}</h2>
        <div class="flex-1 overflow-y-auto ">
          <p>{{ desc }}</p>
        </div>
        <template v-if="social || social2">
          <div class="border border-slate-400 opacity-20"></div>
          <div class="text-3xl flex flex-row items-center mt-4 gap-4">

            <template v-for="(socials, index) in social" :key="index">
              <span v-if="socials.artiste" class="text-sm">{{ socials.artiste }} :</span>
              <a 
                v-if="
                  socials.insta ? socials.insta :
                  socials.tiktok ? socials.tiktok :
                  socials.tumblr ? socials.tumblr :
                  socials.x ? socials.x :
                  socials.yt ? socials.yt : ''" 
                target="_blank" class="text-xl"
                :href="
                  socials.insta ? socials.insta :
                  socials.tiktok ? socials.tiktok :
                  socials.tumblr ? socials.tumblr :
                  socials.x ? socials.x :
                  socials.yt ? socials.yt : ''"
              >
                <FontAwesomeIcon :icon="
                  socials.insta ? ['fab', 'instagram'] :
                  socials.tiktok ? ['fab', 'tiktok'] :
                  socials.tumblr ? ['fab', 'square-tumblr'] :
                  socials.x ? ['fab', 'square-x-twitter'] :
                  socials.yt ? ['fab', 'youtube'] : ''"
                />
              </a>
              <MyButton v-if="socials.web" :href="socials.web" target="_blank" class="text-sm px-4" title="Site web"/>
            </template>
            
            <!-- SOCIAL 2 -->
            <template v-if="social2">

              <template v-for="(socials2, index) in social2" :key="index">
                <span v-if="socials2.artiste" class="text-sm">/ {{ socials2.artiste }}:</span>
                <a
                  v-if="
                    socials2.insta ? socials2.insta :
                    socials2.tiktok ? socials2.tiktok :
                    socials2.tumblr ? socials2.tumblr :
                    socials2.x ? socials2.x :
                    socials2.yt ? socials2.yt : ''"
                  target="_blank" class="text-xl"
                  :href="
                    socials2.insta ? socials2.insta :
                    socials2.tiktok ? socials2.tiktok :
                    socials2.tumblr ? socials2.tumblr :
                    socials2.x ? socials2.x :
                    socials2.yt ? socials2.yt : ''"
                >
                  <FontAwesomeIcon :icon="
                    socials2.insta ? ['fab', 'instagram'] :
                    socials2.tiktok ? ['fab', 'tiktok'] :
                    socials2.tumblr ? ['fab', 'square-tumblr'] :
                    socials2.x ? ['fab', 'square-x-twitter'] :
                    socials2.yt ? ['fab', 'youtube'] : ''
                  "/>
                </a>
                <MyButton v-if="socials2.web" :href="socials2.web" target="_blank" class="text-sm px-4" title="Site web"/>
              </template>
            </template>
          </div>
        </template>
        <template v-else></template>
        
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTumblrSquare, faTiktok, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MyButton from './MyButton.vue';

library.add(faXmark, faInstagram, faTumblrSquare, faTiktok, faSquareXTwitter, faYoutube);

export default {
  components: {
    FontAwesomeIcon,
    MyButton
  },
  props: {
    title: String,
    desc: String,
    image: String,
    social: Object,
    social2: Object
  }
};
</script>
