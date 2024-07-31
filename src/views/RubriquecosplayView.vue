<template>
  <HeaderTitle title="Décors cosplay"/>
  
  <div class="flex items-center justify-center min-h-[70vh] md:min-h-[60vh]">
    <div class="text-center">
      <h1 class="mb-5">Plus d'infos bientôt ...</h1>
    </div>
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';

  export default {
    components: {
      MainFooter,
      HeaderTitle
    }
  }
</script>
