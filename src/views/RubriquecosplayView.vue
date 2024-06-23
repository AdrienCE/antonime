<template>
  <HeaderTitle />
  
  <ImageTextGrid title="Mon titre" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
  sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
  Integer molestie nulla eget placerat auctor."/>

  <ImageTextGrid :isInverted="true" title="Mon titre 2" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
  sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
  Integer molestie nulla eget placerat auctor."/>
</template>

<script>
  import ImageTextGrid from '../components/ImageTextGrid.vue';
  import HeaderTitle from '../components/HeaderTitle.vue';

  export default {
    name: 'BlocImgText',
    components: {
      ImageTextGrid,
      HeaderTitle
    }
  }
</script>
