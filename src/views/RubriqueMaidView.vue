<template>
    <HeaderTitle title="MAID CAFE"/>
    
    <div class="container m-auto my-7 px-7 md:px-0">
      <h2 class="pb-[2rem] font-bold text-3xl">Maid café</h2>
  
      <ImageTextGrid :isInverted="true" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
      Integer molestie nulla eget placerat auctor."/>
  
      <ImageTextGrid paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
      Integer molestie nulla eget placerat auctor."/>
    </div>
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
  