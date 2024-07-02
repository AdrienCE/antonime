<template>
  <HeaderTitle title="PROGRAMMES" />
  
  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Liste des programmes</h2>

    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="programs in program" :key="programs"
          :title='programs.title'
          :imgUrl='programs.imageUrl'
          :hasPopup='programs.popup'
          :displayMode='programs.displayMode'
          :url='programs.urlLink'
        />
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
    },
    data() {
      return {
        program:[
          {
            title: "Décors cosplay",
            imageUrl: "G-01.webp",
            popup: false,
            urlLink: "/rubriquecosplay"
          },
          {
            title: "Maid café",
            imageUrl: "G-01.webp",
            popup: false,
            urlLink: "/rubriquecosplay"
          },
          {
            title: "En scène",
            imageUrl: "G-01.webp",
            popup: true,
            displayMode: "popup"
          },
          {
            title: "Le bar",
            imageUrl: "G-01.webp",
            popup: true,
            displayMode: "popup"
          },
          {
            title: "Concert",
            imageUrl: "G-01.webp",
            popup: true,
            displayMode: "popup"
          },
        ]
      };
    },
  };
</script>
