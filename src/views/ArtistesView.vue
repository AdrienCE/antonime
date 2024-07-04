<template>
  <HeaderTitle title="ARTISTES"/>

  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Merchandising</h2>
    <div class="w-full md:inline-grid md:grid-cols-3 md:gap-12 md:p-0">
      <CardInfo v-for="artist in artists" 
        :key="artist.id"
        :title="artist.title"
        :imgUrl="artist.image"
        :description="artist.description"
        :social="artist.social"
        :button="artist.button"
        hasPopup="true"
        displayMode="custom"
      />
    </div>
  </div>
  

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';
  import expoData from '@/assets/data/expo-list.json';

  export default {
    components: {
      MainFooter,
      CardInfo,
      HeaderTitle
    },
    data() {
      return {
        expo: expoData,
      };
    }
  };
</script>
