<template>

   <!-- Header -->
   <swiper-container :navigation="true" :pagination="true" :loop="true" :modules="modules">
    <swiper-slide class=" bg-[#E7F1F7]">
      <div class="bg-gradient-to-tr from-[#3866B4] to-[#2F5698] flex justify-center h-72 mx-0 xl:mx-20">
        <img src="@/assets/images/at-half-body.webp" class="hidden object-contain md:block xl:w-auto" width="auto" height="auto"/>
        <div class="w-full flex items-center justify-center p-3 xl:w-1/3">
          <div class="text-center text-white">
            <h1 class="text-6xl text-stroke-headline">Anto'nime</h1>
            <span>6 Av. François Arago, 92160 Antony</span>
            <ul class="flex justify-between gap-x-7 my-7 text-stroke-headline md:gap-x-0 xl:gap-x-7">
              <li>Manga</li>
              <li>Cosplay</li>
              <li>Jeux-vidéo</li>
              <li>Cinéma</li>
            </ul>
            <div class="inline-flex flex-col">
              <span class="border-b-2 border-[#DB97E6] pb-2">22 septembre 2024</span>
              <span class="pt-2">10h - 18h</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>


  <!-- Presentation info -->
  <div class="container my-7 px-7">
    <div class="flex flex-col items-center justify-center m-auto mb-24 last:mb-0 md:flex-row md:mb-14 md:mx-0 xl:mb-32 xl:mx-40">
      <div class="text-black-800 md:w-2/4">
        <TitleSection title="Première convention"/>
        <p class="mb-6">
          Anto’nime a le plaisir de vous présenter sa première édition ! Une convention à échelle humaine, principalement en extérieur, vous proposera des animations, du cosplays, des artistes talentueux, un maid-café, des jeux-vidéos, des expositions en tous genres, un bar et plein d’autres surprises !
        </p>
        <p>N’hésitez pas à nous suivre sur nos réseaux pour ne louper aucune information. On se retrouve le dimanche 22 septembre 2024 !</p>
      </div>
      <div class="flex items-center justify-center mt-5 md:mt-0 md:w-2/4 xl:justify-end">
        <img src="@/assets/images/first-conv.webp" width="100%" height="auto" class=" w-2/4 object-cover" alt="Image Antoinette accueil"/>
      </div>
    </div>
  </div>
  
  <!-- Banner convention -->
  <div class="md:flex">
    <img class="hidden w-1/4 md:block" src="">
    <div class="bg-custom-green w-full px-7 py-7">
      <h2 class="font-bold text-2xl md:text-5xl mb-10">A découvrir !</h2>
      <p class="font-bold text-2xl">60 artistes !</p>
      <p class="font-bold text-2xl">1 défilé cosplay !</p>
      <p class="font-bold text-2xl">1 show cosplay !</p>
      <p class="font-bold text-2xl">Des conférences !</p>
      <p class="font-bold text-2xl">Des spectacles et pleins d'autres surprises !</p>
      <p class="font-bold text-2xl">Ah et un Maid Café !</p>
    </div>
  </div>

  <!-- Block for Guests, tickets and programs -->
  <div class="container my-7 px-7">
    
    <!-- First guest -->
    <div class="first-guest">
      <TitleSection title="Nos invités"/>

      <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-4 xl:w-full xl:gap-4">
        <CardInfo v-for="guests in guest" :key="guests"
          :title="guests.title"
          :imgUrl="guests.imageUrl"
          :hasPopup="guests.popup"
          :displayMode="guests.displayMode"
          :listeInLine="guests.listInLine"
        />
      </div>
    </div>
  
    <!-- Banner tickets -->
    <BannerInfo/>

    <!-- Programs -->
    <div class="programs">
      <TitleSection title="Nos programmes" />

      <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-4 xl:w-full xl:gap-4">
        <CardInfo v-for="programs in program" :key="programs"
          :title='programs.title'
          :imgUrl='programs.imageUrl'
          :hasPopup='programs.popup'
          :displayMode='programs.displayMode'
          :url='programs.urlLink'
          :listeInLine='programs.listInLine'
        />
        <CardInfo title="Voir plus" imgUrl="G01.webp" :hasPopup="false" url="/programmes" listeInLine="true"/>
      </div>
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import BannerInfo from '@/components/BannerInfo.vue';
  import {register} from 'swiper/element/bundle';
  import TitleSection from '@/components/TitleSection.vue';
  register();

  export default {
    components: {
    MainFooter,
    CardInfo,
    BannerInfo,
    TitleSection
},
    data() {
      return {
        program:[
          {
            title: "Décors cosplay",
            imageUrl: "G01.webp",
            popup: false,
            urlLink: "/rubriquecosplay",
            listInLine: true
          },
          {
            title: "Maid café",
            imageUrl: "G01.webp",
            popup: false,
            urlLink: "/rubriquecosplay",
            listInLine: true
          },
          {
            title: "En scène",
            imageUrl: "G01.webp",
            popup: true,
            displayMode: "popup",
            listInLine: true
          },
        ],
        guest:[
          {
            title: "Danaé Cosplay",
            imageUrl: "G01.webp",
            popup: true,
            displayMode: "popup",
            listInLine: true
          },
          {
            title: "T.Pralinus",
            imageUrl: "G02.webp",
            popup: true,
            displayMode: "popup",
            listInLine: true
          }
        ]
      };
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('@/assets/images/', false, /\.(webp)$/)
        return images("./"+path)
      }
    }
  };
</script>
