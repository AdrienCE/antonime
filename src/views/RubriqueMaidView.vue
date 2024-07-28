<template>
  <HeaderTitle title="Maid café"/>
  
  <div class="container my-7 px-7">

    <ImageTextGrid :isInverted="true" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
    sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
    Integer molestie nulla eget placerat auctor."/>

    <ImageTextGrid paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
    sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
    Integer molestie nulla eget placerat auctor."/>
  </div>

  <div class="flex items-center justify-center mt-5 md:mt-0 md:w-2/4 xl:justify-end">
    <img src="@/assets/images/MAIDCAFE01.webp" width="100%" height="auto" class=" w-2/4 object-cover" alt=""/>
  </div>

  <MainFooter/>
</template>
  
<script>
  import MainFooter from '@/components/MainFooter.vue';
  import ImageTextGrid from '@/components/ImageTextGrid.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';

  export default {
    components: {
      MainFooter,
      ImageTextGrid,
      HeaderTitle
    }
  }
</script>