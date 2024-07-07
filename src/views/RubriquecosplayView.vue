<template>
  <HeaderTitle title="Décors cosplay"/>
  
  <div class="container my-7 px-7">

    <ImageTextGrid :isInverted="true" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
    sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
    Integer molestie nulla eget placerat auctor." imageGrid="cosplay01.webp"/>

    <ImageTextGrid paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
    sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
    Integer molestie nulla eget placerat auctor." imageGrid="cosplay02.webp"/>
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
