<template>
  <div :class="['flex flex-col items-center m-auto gap-8 mb-24 last:mb-0 md:mb-14 xl:mb-32', isInverted ? 'md:flex-row-reverse' : 'md:flex-row']">
    <div class="text-black-800 md:w-2/4">
      <p>{{ paragraphe }}</p>
      <p>{{ paragraphe2 }}</p>
    </div>
    <div class="md:w-2/4">
      <img :src="resolve_img_url(imageGrid)" width="100%" height="auto" class=" w-full object-cover object-top md:h-[350px] xl:h-[500px]" :alt="altText"/>
    </div>
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
      },
      imageGrid: {
        type: String,
        default: 'first-conv.webp'
      },
      altText: {
        type: String,
        default: 'convention anto"nime'
      }
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('@/assets/images/', false, /\.(webp)$/)
        return images('./' + path)
      }
    }
  };
</script>
