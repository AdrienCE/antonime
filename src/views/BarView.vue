<template>
  <HeaderTitle title="Bar" />
  
  <div class="container my-7 px-7">
    <p>Hello</p>
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
  