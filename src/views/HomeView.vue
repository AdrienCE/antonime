<template>
   <!-- Header -->
  <HeaderSwiper />

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
    <img class="hidden md:block" src="@/assets/images/exposants.jpg">
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
      <div class="md:inline-grid md:grid-cols-4 md:gap-12 md:p-0">
        <CardInfo title="Danaé Cosplay" imgUrl="https://i.lepelerin.com/1400x787/smart/2022/10/04/femmes-artistes.jpg" :hasPopup="true" displayMode="popup"/>
        <CardInfo title="T.Pralinus" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="popup"/>
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
      <div class="md:flex md:gap-12 md:p-0">
        <CardInfo title="Décors cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="false" url="/rubriquecosplay"/>
        <CardInfo title="Maid café" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="false" url="/rubriquemaid"/>
        <CardInfo title="En scène" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="popup"/>
        <CardInfo title="Voir plus" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="false" url="/programmes"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CardInfo from '../components/CardInfo.vue';
  import ImageTextGrid from '../components/ImageTextGrid.vue';
  import HeaderSwiper from '../components/HeaderSwiper.vue';

  export default {
    name: 'HelloWorld',
    components: {
      CardInfo,
      ImageTextGrid,
      HeaderSwiper
    }
  };
</script>
