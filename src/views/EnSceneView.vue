<template>
  <HeaderTitle title="En scène" />
  
  <div class="flex items-center justify-center min-h-[85vh]">
    <div class="text-center">
      <h1 class="mb-5">Plus d'info bientôt ...</h1>
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
  };
</script>
  