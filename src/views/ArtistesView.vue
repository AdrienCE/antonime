<template>
  <HeaderTitle title="ARTISTES"/>

  <div class="container m-auto my-7 px-7 md:px-0">
    <h2 class="pb-[2rem] text-3xl font-bold">Merchandising</h2>
    <div class="w-full md:inline-grid md:grid-cols-3 md:gap-12 md:p-0">
      <CardInfo v-for="artist in artists" 
        :key="artist.id"
        :title="artist.title"
        :imgUrl="artist.image"
        :description="artist.description"
        :social="artist.social"
        :hasPopup="artist.popup"
        :displayMode="artist.mode"
      />
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '../components/CardInfo.vue';
  import HeaderTitle from '../components/HeaderTitle.vue';
  import artistData from '../assets/artist/artist-list.json';

  export default {
    components: {
      MainFooter,
      CardInfo,
      HeaderTitle
    },
    data() {
      return {
        artists: artistData,
      };
    }
  };
</script>
