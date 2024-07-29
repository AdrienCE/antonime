<template>
  <div class="flex items-center justify-center min-h-[85vh]">
    <div class="text-center">
      <h1 class="mb-5 text-custom-white text-stroke-headline linebar font-bold text-4xl xl:text-5xl">Oups ! On dirait que quelqu'un s'est perdu ...</h1>
      <p class="mb-2">Pas de panique, on vous raccompagne la ou il faut !</p>
      <MyButton href="/" title="Retour à l'accueil" />
    </div>
  </div>
  
  <MainFooter />
</template>
  
<script>
  import MainFooter from '@/components/MainFooter.vue';
  import MyButton from '@/components/MyButton.vue';

  export default {
    name: 'ErrorView"',
    components: {
      MainFooter,
      MyButton
    }
  };
</script>