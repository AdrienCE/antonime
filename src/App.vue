<template>
  <div>
    <NavBar />
    <router-view></router-view>

    <!-- Footer -->
    <div class="md:flex bg-custom-blue2 text-center text-white items-center">
      <div class="md:p-12 md:w-1/3">
        <img src="@/assets/logo-ws.png" width="70" height="70"/>
      </div>

      <div class="md:p-12 md:w-1/3 md:flex">
        <p class="md:mr-6">Mentions légales</p>
        <p class="md:mr-6">Conditions générales</p>
        <p>Contactez-nous</p>
      </div>

      <div class="md:p-12 md:w-1/3 md:flex">
        <p class="md:mr-6">social media 1</p>
        <p class="md:mr-6">social media 2</p>
      </div>
    </div>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    components: {
      NavBar,
    }
  };
</script>
