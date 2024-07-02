<template>
  <HeaderTitle title="ARTISTES"/>

  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Merchandising</h2>
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="expos in expo"
        :key="expos.id"
        :title="expos.title"
        :imgUrl="expos.image+'.webp'"
        :description="expos.description"
        :social="expos.social"
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
