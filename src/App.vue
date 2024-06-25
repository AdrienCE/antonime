<template>
  <div>
    <NavBar />
    <router-view></router-view>

    <!-- Footer -->
    <div class="bg-custom-blue2 text-white mt-20 p-6 md:p-12 md:flex">
      <div class="flex items-center justify-center flex-col mb-7 md:items-start md:mb-0 md:w-1/3">
        <img src="@/assets/logo-ws.png" width="70" height="70"/>
        ANTO’NIME
      </div>

      <div class="flex flex-col items-center justify-center mb-7 md:mb-0 md:flex-row md:w-1/3">
        <a href="/mentionslegales" class="md:mr-6">Mentions légales</a>
        <a href="/conditions" class="md:mr-6">Conditions générales</a>
        <a href="/infospratiques">Contactez-nous</a>
      </div>

      <div class="flex flex-col items-center md:flex-row md:justify-end md:w-1/3">
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
