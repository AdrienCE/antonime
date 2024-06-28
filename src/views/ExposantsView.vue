<template>
  <HeaderTitle title="EXPOSANTS" />

  <div class="container m-auto my-7 px-7 md:px-0">
    <h2 class="pb-[2rem] text-3xl font-bold">Exposants</h2>
    <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-3 xl:w-full xl:gap-12">
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
    </div>
  
    <h2 class="py-[2rem] text-3xl font-bold">Guest</h2>
    <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-3 xl:w-full xl:gap-12">
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
      <CardInfo title="Danaé cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="custom" listeInLine="true" />
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
