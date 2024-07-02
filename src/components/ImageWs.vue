<template>
  <img :src="src" :srcset="srcset" :alt="alt" class=""/>
</template>
  
<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      srcset: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  };
</script>