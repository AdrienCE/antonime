<template>
  <HeaderTitle title="Programmes" />
  
  <div class="container my-7 px-7">
    <div class="grid w-full grid-cols-none gap-4 md:grid-cols-2 xl:grid-cols-5">
      <CardInfo v-for="programs in program" :key="programs"
          displayMode="dynamic"
          cardLarge="true"
          :linkPage='programs.linkPage'
          :title='programs.title'
          :imgUrl='programs.imageUrl'
          :url='programs.urlLink'
          :hasPopup='programs.popup'
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
            linkPage: true,
            title: "Décors cosplay",
            imageUrl: "G01.webp",
            urlLink: "/rubriquecosplay"
          },
          {
            linkPage: true,
            title: "Maid café",
            imageUrl: "G01.webp",
            urlLink: "/rubriquecosplay"
          },
          {
            linkPage: false,
            popup: true,
            title: "En scène",
            imageUrl: "G01.webp"
          },
          {
            linkPage: false,
            popup: true,
            title: "Le bar",
            imageUrl: "G01.webp"
          },
          {
            linkPage: false,
            popup: true,
            title: "Concert",
            imageUrl: "G01.webp"
          },
        ]
      };
    },
  };
</script>
