<template>
  <HeaderTitle title="Billetterie" />
  
  <div class="container my-7 px-7">

    <p class="my-7">Retrouver nos options MAID CAFE ou NAVETTE à la prochaine étape, une fois votre billet sélectionné !</p>

    <iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/warsheep-studio/evenements/billeteries-conventions-anto-nime/widget" style="width: 100%; height: 750px; border: none;"></iframe>
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
