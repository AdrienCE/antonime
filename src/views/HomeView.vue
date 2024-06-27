<template>

   <!-- Header -->
   <swiper-container :navigation="true" :pagination="true" :loop="true" :modules="modules">
    <swiper-slide v-for="banners in banner" :key="banners">
      <div class="relative bg-black">
        <ImageWs 
          :src=resolve_img_url(banners.image)
          :alt="banners.alt"
          :width="banners.width"
          :height="banners.height"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative bg-black">
        <!-- <img src="@/assets/images/convention.jpg" alt="image convention" class="opacity-50 w-full h-[417px] object-cover"/> -->
      </div>
    </swiper-slide>
  </swiper-container>

  <!-- Presentation info -->
  <div class="container m-auto my-7 px-7 md:px-0">
    <h2 class="pb-[2rem] font-bold text-3xl">Première convention</h2>
    
    <ImageTextGrid paragraphe="Anto’nime a le plaisir de vous présenter sa première édition !
      Une convention à échelle humaine, principalement en extérieur, vous proposera 
      des animations, du cosplays, des artistes talentueux, un maid-café, des jeux-vidéos, des expositions en tous genres, un bar et plein d’autres surprises !" 
      paragraphe2="N’hésitez pas à nous suivre sur nos réseaux pour ne louper aucune information. On se retrouve le dimanche 22 septembre 2024 !"/>
  </div>
  
  <!-- Banner convention -->
  <div class="md:flex md:h-[300px]">
    <img class="hidden md:block" src="@/assets/images/exposants.webp">
    <div class="bg-custom-green w-full px-7 py-7">
      <h2 class="font-bold text-2xl md:text-5xl">A découvrir !</h2>
      <p class="font-bold text-2xl">50 000 M²</p>
      <p class="font-bold text-2xl">200 stands</p>
      <p class="font-bold text-2xl">3 scènes</p>
    </div>
  </div>

  <!-- Block for Guests, tickets and programs -->
  <div class="container m-auto my-7 px-7 md:px-0">
    
    <!-- First guest -->
    <div class="first-guest">
      <h2 class="pb-[2rem] text-3xl font-bold">Nos invités</h2>
      <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-4 xl:w-full xl:gap-12">
        <CardInfo title="Danaé Cosplay" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" listeInLine="true"/>
        <CardInfo title="T.Pralinus" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" listeInLine="true"/>
      </div>
    </div>
  
    <!-- Banner tickets -->
    <a href="/billeterie" class="text-white bg-custom-pink flex rounded-md p-7 my-16 md:justify-between md:items-center md:h-[250px]">
      <div>
        <h2 class="font-bold text-2xl md:text-5xl">Billeterie ouverte !</h2>
        <p class="font-bold text-xl">Venez prendre votre billet au plus vite !</p>
      </div>
      <img src="" class="hidden md:block">
    </a>

    <!-- Programs -->
    <div class="programs">
      <h2 class="pb-[2rem] text-3xl font-bold">Nos programmes</h2>
      <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-4 xl:w-full xl:gap-12">
        <CardInfo title="Décors cosplay" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquecosplay" listeInLine="true"/>
        <CardInfo title="Maid café" imgUrl="G-01.webp" :hasPopup="false" url="/rubriquemaid" listeInLine="true"/>
        <CardInfo title="En scène" imgUrl="G-01.webp" :hasPopup="true" displayMode="popup" listeInLine="true"/>
        <CardInfo title="Voir plus" imgUrl="G-01.webp" :hasPopup="false" url="/programmes" listeInLine="true"/>
      </div>
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import ImageWs from '@/components/ImageWs.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import ImageTextGrid from '@/components/ImageTextGrid.vue';
  import {register} from 'swiper/element/bundle';
  register();

  export default {
    components: {
      MainFooter,
      CardInfo,
      ImageWs,
      ImageTextGrid
    },
    data() {
      return {
        banner: [
          {
            image: "1-banniere.webp",
            alt: "banniere convention",
            width: "100%",
            height: "500"
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
