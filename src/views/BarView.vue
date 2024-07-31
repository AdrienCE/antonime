<template>
  <HeaderTitle title="Bar" />
  
  <div class="container my-7 px-7">

    <ImageTextGrid :isInverted="true" imageGrid="Bar2.webp" paragraphe="Plus d'infos bientôt ..."/>
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
  };
</script>
  