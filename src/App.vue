<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'HelloWorld',
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <div class="relative">
    <div class="absolute inset-0 bg-secondary-color opacity-50">
    </div>
    <img src="@/assets/images/convention.jpg" alt="Background Image" class="w-full h-80vh object-cover parallax"/>
  </div>

  <div class="md:flex">
    <div class="md:w-2/4 relative py-8 p-16 text-black-800">
      <h2 class="font-bold text-3xl py-4">Première convention</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque libero, fermentum nec tempus ac,
      sagittis bibendum sapien. Integer molestie nulla eget placerat auctor.</p>
  </div>
  <div class="md:w-2/4 relative py-8 p-16">
      <img src="#">
  </div>
</div>
<div class="md:flex py-8">
    <div class="md:w-1/3 relative">
      <img src="@/assets/images/exposants.jpg">
  </div>
  <div class="md:w-2/3 relative bg-green-300 p-12">
      <h2 class="text-5xl font-bold py-3">A découvrir !</h2>
      <p class="font-bold text-2xl">50 000 M²</p>
      <p class="font-bold text-2xl">200 stands</p>
      <p class="font-bold text-2xl">3 scènes</p>
  </div>
</div>

<div class="py-8 p-16 ">
  <h2 class="text-3xl font-bold">Nos invités</h2>
  <p class="py-4">Lorem ipsum</p>
</div> 

<div class="md:flex pl-16 gap-12">
  <div class="md:w-1/4 relative">
      <img src="@/assets/images/exposants.jpg">
      <h3 class="py-4">Danaé cosplay</h3>
  </div>
  <div class="md:w-1/4 relative">
      <img src="@/assets/images/exposants.jpg">
      <h3 class="py-4">Danaé cosplay</h3>
  </div>
  <div class="md:w-1/4 relative">
      <img src="@/assets/images/exposants.jpg">
      <h3 class="py-4">Danaé cosplay</h3>
  </div>
  <div class="md:w-1/4 relative">
      <a href="views/ArtistesView.vue"><img src="@/assets/images/exposants.jpg">
      <h3 class="py-4">Voir plus</h3></a>
  </div>
</div>

<router-view></router-view>

<!-- <nav>
  <router-link to="/">Accueil</router-link> |
  <router-link to="/about">À propos</router-link> |
  <router-link to="/programme">Programme</router-link>
  </nav> -->

</template>





  


