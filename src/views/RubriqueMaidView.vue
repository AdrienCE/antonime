<template>
  <HeaderTitle title="Maid café"/>
  
  <div class="container my-7 px-7">

    <ImageTextGrid :isInverted="true" imageGrid="cosplay02.webp" paragraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
    sagittis bibendum sapien. Integer molestie nulla eget placerat auctor. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac, sagittis bibendum sapien.
    Integer molestie nulla eget placerat auctor."/>

    <div class="grid grid-cols-1 gap-4 w-full mt-8 md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2 xl:mt-0">
      <img src="@/assets/images/MCMenu2.png" width="100%" height="auto" class="object-cover" alt="Menu 1"/>
      <img src="@/assets/images/MCMenu3.png" width="100%" height="auto" class="object-cover" alt="Menu 2"/>
    </div>

    <div class="grid grid-cols-1 gap-4 w-full mt-8 md:grid-cols-3 xl:grid-cols-2 xl:grid-rows-2 xl:mt-0">
      <img src="@/assets/images/MAIDCAFE01.webp" width="100%" height="auto" class="object-cover" alt="Maid 1"/>
      <img src="@/assets/images/MAIDCAFE02.webp" width="100%" height="auto" class="object-cover" alt="Maid 2"/>
      <img src="@/assets/images/MAIDCAFE05.webp" width="100%" height="auto" class="object-cover" alt="Maid 3"/>
    </div>
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