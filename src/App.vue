<template>
  <NavBar/>
  <main class="overflow-hidden">
    <router-view />
  </main>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    components: {
      NavBar
    }
  };
</script>