<script>
  import NavBar from './components/NavBar.vue';
  import HeaderSwiper from './components/HeaderSwiper.vue';

  export default {
    name: 'HelloWorld',
    components: {
      NavBar,
      HeaderSwiper
    }
  };
</script>

<template>
  <NavBar />
  <HeaderSwiper />
  <router-view></router-view>
  <!-- Footer -->
   <div class="md:flex justify-center bg-black p-12 text-center opacity-80 text-white gap-12">
    <p>Mentions légales</p>
    <p>Conditions générales</p>
    <p>Contactez-nous</p>
   </div>


</template>
