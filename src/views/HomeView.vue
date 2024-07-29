<template>

   <!-- Header -->
   <swiper-container :navigation="true" :pagination="true" :loop="true" :modules="modules">
    <swiper-slide class=" bg-custom-blue-light">
      <div class="bg-gradient-to-tr from-custom-blue2 to-custom-blue-dark flex justify-center h-72 mx-0 xl:mx-20">
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
              <span class="border-b-2 border-custom-pink pb-2">22 septembre 2024</span>
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
  
  <!-- Counter -->
  <div class="grid grid-cols-1 md:gap-32 gap-4 w-full mt-8 md:grid-cols-3 xl:grid-cols-3 xl:mt-0 container my-7 px-7">
    <CardInfo v-for="cards in card" :key="cards.title"
      displayMode="count"
      :title="cards.title"
      :description="cards.description"
      class="ml-5"
    />
  </div>

  <!-- Block for Guests, tickets and programs -->
  <div class="container my-7 px-7">
    
    <!-- First guest -->
    <div class="first-guest">
      <TitleSection title="Nos invités"/>

      <div class="overflow-x-auto whitespace-nowrap inline-box xl:inline-grid xl:grid-cols-4 xl:w-full xl:gap-4">
        <CardInfo v-for="guests in guest" :key="guests"
          :displayMode="guests.displayMode"
          :linkPage='guests.linkPage'

          :cardLarge="guests.cardLarge"
          :listeInLine="guests.listInLine"

          :title="guests.title"
          :imgGuest="guests.imgGuest"
          :description="guests.description"
          :social="guests.social"
          :hasPopup="guests.popup"
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
          :displayMode='programs.displayMode'
          :linkPage='programs.linkPage'
          :url='programs.urlLink'

          :listeInLine='programs.listeInLine'
          :cardLarge="programs.cardLarge"

          :title='programs.title'
          :imgRoot='programs.imgRoot'
          :hasPopup='programs.popup'
        />
      </div>
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import BannerInfo from '@/components/BannerInfo.vue';
  import TitleSection from '@/components/TitleSection.vue';
  import {register} from 'swiper/element/bundle';
  
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
        card: [
          {
            title: "1",
            description: "Défilé cosplay"
          },
          {
            title: "66",
            description: "Artistes"
          },
          {
            title: "1",
            description: "Show cosplay"
          }
        ],
        program:[
          {
            displayMode: "dynamic",
            linkPage: true,
            urlLink: "/rubriquecosplay",

            cardLarge: true,
            listeInLine: true,

            title: "Décors cosplay",
            imgRoot: "cosplay.webp"
          },
          {
            displayMode: "dynamic",
            linkPage: true,
            urlLink: "/rubriquemaid",

            cardLarge: true,
            listeInLine: true,

            title: "Maid café",
            imgRoot: "maid-cafe.webp"
          },
          {
            displayMode: "dynamic",
            linkPage: true,
            urlLink: "/bar",

            cardLarge: true,
            listeInLine: true,

            title: "Bar",
            imgRoot: "scene.webp"
          },
          {
            displayMode: "dynamic",
            linkPage: true,
            urlLink: "/programmes",

            cardLarge: true,
            listeInLine: true,

            title: "Voir tout les programmes",
            imgRoot: "default.webp"
          }
        ],
        guest:[
          {
            displayMode: "dynamic",
            linkPage: false,
            popup: true,

            cardLarge: true,
            listInLine: true,

            title: "Danaé Cosplay",
            imgGuest: "G01.webp",
            description: "Cosplayeuse aguerrie, Danaé est une experte du fait-main qui partage depuis quelques années son savoir-faire par le biais de vidéos tutoriels sur Instagram et Tiktok ! Ses intérêts sont aussi variés que ses talents, puisqu'elle touche aussi bien à l'univers du jeu vidéos que du manga et propose des tutoriels couture mais aussi perruque et make-up. Elle a également créé sa propre marque en partenariat avec une autre artiste, Naely Studios !! Vous aurez la chance de la rencontrer à Anto'nime pour échanger avec elle mais aussi pour acheter ses prints et observer une sélection de ses cosplays proposés en exposition.",
            social:[
              {"artiste": "MES RESEAUX"},
              {"insta" : "https://www.instagram.com/danae_cosplay/"},
              {"tiktok" : "https://www.tiktok.com/@danae_cosplay"},
              {"x" : "https://x.com/cosplaydanae"}
            ]
          },
          {
            displayMode: "dynamic",
            linkPage: false,
            popup: true,

            cardLarge: true,
            listInLine: true,

            title: "T.Pralinus",
            imgGuest: "G02.webp",
            "description": "T.Pralinus est auteur et illustrateur, vidéaste, voix et futur docteur. Il a publié romans, bande-dessinées et nouvelles chez divers éditeurs (entre autres La Volte, Dargaud, Hachette, La Martinière) rédige également des chroniques pour la radio et travaille sur des sujets liés à la pop culture queer et girly, préparant une thèse sur le yaoi en France"
          }
        ]
      };
    }
  };
</script>
