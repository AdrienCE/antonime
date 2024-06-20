<script>
import ImageTextGrid from '../components/ImageTextGrid.vue';

export default {
  name: 'ParentComponent', // Changez le nom ici pour éviter le conflit
  components: {
    ImageTextGrid
  }
}
</script>
<template>
    <ImageTextGrid />
</template>
