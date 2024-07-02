<template>
  <HeaderTitle title="BILLETERIE" />
  
  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Prenez votre ticket ici</h2>
    
    <iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/warsheep-studio/boutiques/billeteries-conventions-ws/widget" style="width: 100%; height: 750px; border: none;"></iframe>
  </div>

  <MainFooter/>
</template>
  
<script>
  import HeaderTitle from '../components/HeaderTitle.vue';
  import MainFooter from '@/components/MainFooter.vue';

  export default {
    components: {
      MainFooter,
      HeaderTitle
    }
  }
</script>
