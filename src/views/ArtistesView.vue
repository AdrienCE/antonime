<script>
  import CardInfo from '../components/CardInfo.vue';

  export default {
    name: 'HelloWorld',
    components: {
      CardInfo
    }
  };
</script>
<template>
  <div class="max-w-[1440px] m-auto p-4 md:pb-20 pt-8 md:px-[6rem]">
    <h2 class="pb-[2rem] text-3xl font-bold">Nos artistes</h2>
    <p class="pb-[2rem]">Lorem ipsum</p>

    <div class="gap-12 md:p-0 md:flex">
      <CardInfo title="Danaé cosplay" imgUrl="https://i.lepelerin.com/1400x787/smart/2022/10/04/femmes-artistes.jpg" :hasPopup="true"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true"/>
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true"/>
    </div>
  </div>
  </template>