<template>
  <HeaderTitle title="Billeterie" />
  
  <div class="flex items-center justify-center min-h-[85vh]">
    <div class="text-center">
      <h1 class="mb-5">Billeterie pour bientôt ...</h1>
    </div>
  </div>

  <MainFooter/>
</template>
  
<script>
  import HeaderTitle from '@/components/HeaderTitle.vue';
  import MainFooter from '@/components/MainFooter.vue';

  export default {
    components: {
      MainFooter,
      HeaderTitle
    }
  }
</script>
