<template>
  <HeaderTitle title="Programmes" />
  
  <div class="container my-7 px-7">
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="programs in program" :key="programs"
          :title='programs.title'
          :imgUrl='programs.imageUrl'
          :hasPopup='programs.popup'
          :displayMode='programs.displayMode'
          :url='programs.urlLink'
        />
    </div>

    <!-- Banner tickets -->
    <BannerInfo/>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';
import BannerInfo from '@/components/BannerInfo.vue';

  export default {
    components: {
    MainFooter,
    CardInfo,
    HeaderTitle,
    BannerInfo
},
    data() {
      return {
        program:[
          {
            title: "Décors cosplay",
            imageUrl: "G01.webp",
            popup: false,
            urlLink: "/rubriquecosplay"
          },
          {
            title: "Maid café",
            imageUrl: "G01.webp",
            popup: false,
            urlLink: "/rubriquecosplay"
          },
          {
            title: "En scène",
            imageUrl: "G01.webp",
            popup: true,
            displayMode: "popup"
          },
          {
            title: "Le bar",
            imageUrl: "G01.webp",
            popup: true,
            displayMode: "popup"
          },
          {
            title: "Concert",
            imageUrl: "G01.webp",
            popup: true,
            displayMode: "popup"
          },
        ]
      };
    },
  };
</script>
