<template>
  <HeaderTitle title="PROGRAMMES" />
  
  <div class="container m-auto my-7 px-7 md:px-0">
    <h2 class="pb-[2rem] text-3xl font-bold">Liste des programmes</h2>

    <div class="w-full md:inline-grid md:grid-cols-4 md:gap-12 md:p-0">
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquecosplay" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquecosplay" />

      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquecosplay" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquecosplay" />
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '../components/CardInfo.vue';
  import HeaderTitle from '../components/HeaderTitle.vue';

  export default {
    components: {
      MainFooter,
      CardInfo,
      HeaderTitle
    }
  };
</script>
