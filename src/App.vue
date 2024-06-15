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
    <img src="@/assets/images/convention.jpg" alt="Background Image"
    class="w-full h-80vh object-cover parallax"/>
  </div>
  

<router-view></router-view>

<!-- <nav>
  <router-link to="/">Accueil</router-link> |
  <router-link to="/about">À propos</router-link> |
  <router-link to="/programme">Programme</router-link>
  </nav> -->

</template>





  


