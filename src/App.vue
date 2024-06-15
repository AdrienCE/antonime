<script>
  import NavBar from './components/NavBar.vue';
  import CardInfo from './components/CardInfo.vue';

  /* eslint-disable */

  export default {
    name: 'HelloWorld',
    components: {
      NavBar,
      CardInfo
    },

    props: {
      title: String,
      imgUrl: String,
      url: String
    }
  };
</script>

<template>
  <NavBar />

  <!-- Header -->
  <div class="relative bg-black">
    <img src="@/assets/images/convention.jpg" alt="image convention" class="opacity-50 w-full h-[300px] object-cover parallax"/>
  </div>

  <!-- Presentation info -->
  <div class="max-w-[1440px] m-auto px-4 md:py-8 md:flex md:px-[6rem]">
    <div class="text-black-800 md:w-2/4">
      <h2 class="font-bold text-3xl py-4">Première convention</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
    </div>
    <div class="relative py-8 p-16 md:w-2/4 ">
      <img src="#">
    </div>
  </div>

  <!-- Banner convention -->
  <div class="md:flex">
    <div class="relative md:w-1/3">
      <img src="@/assets/images/exposants.jpg">
    </div>
    <div class="relative bg-green-300 p-12 md:w-2/3 ">
        <h2 class="text-5xl font-bold py-3">A découvrir !</h2>
        <p class="font-bold text-2xl">50 000 M²</p>
        <p class="font-bold text-2xl">200 stands</p>
        <p class="font-bold text-2xl">3 scènes</p>
    </div>
  </div>

  <!-- First guest -->
  <div class="max-w-[1440px] m-auto px-4 md:py-8 md:px-[6rem]">
    <h2 class="text-3xl font-bold">Nos invités</h2>
    <p class="py-4">Lorem ipsum</p>

    <div class="gap-12 md:p-0 md:flex">
      <CardInfo title="Danaé cosplay" imgUrl="https://i.lepelerin.com/1400x787/smart/2022/10/04/femmes-artistes.jpg"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
    </div>
  </div>
  
  <!-- Banner tickets -->
  <div class="p-5 text-white bg-purple-800 md:flex md:p-16">
    <div class="md:w-1/2 relative">
        <h2 class="text-4xl font-bold py-3">Billeterie ouverte !</h2>
        <p class="font-bold text-xl">Venez prendre votre billet au plus vite !</p>
    </div>
    <div class="md:w-1/2 relative">
        <img src="#">
    </div>
  </div>

  <!-- Programs -->
  <div class="max-w-[1440px] m-auto px-4 md:py-8 md:px-[6rem]">
    <h2 class="text-3xl font-bold">Programmes</h2>
    <p class="py-4">Lorem ipsum</p>

    <div class="gap-12 md:p-0 md:flex">
      <CardInfo title="Décors cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
      <CardInfo title="Maid café" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
      <CardInfo title="En scène" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
      <CardInfo title="Voir plus" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg"/>
    </div>
  </div>

  <router-view></router-view>

  <!-- 
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">À propos</router-link> |
      <router-link to="/programme">Programme</router-link>
    </nav> 
  -->

</template>





  


