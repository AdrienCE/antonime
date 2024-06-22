<template>
  <div class="max-w-[1440px] m-auto pt-16 md:px-[6rem] p-8">
    <h2 class="pb-[2rem] text-3xl font-bold">Exposants</h2>

    <div class="gap-12 md:flex">
      <CardInfo title="Danaé cosplay" imgUrl="https://i.lepelerin.com/1400x787/smart/2022/10/04/femmes-artistes.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
    </div>
  </div>

  <div class="max-w-[1440px] m-auto md:px-[6rem] p-8">
    <h2 class="pb-[2rem] text-3xl font-bold">Guest</h2>

    <div class="gap-12 md:p-0 md:flex">
      <CardInfo title="Danaé cosplay" imgUrl="https://i.lepelerin.com/1400x787/smart/2022/10/04/femmes-artistes.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
      <CardInfo title="Danaé cosplay" imgUrl="https://gamingway.fr/wp-content/uploads/2023/07/cosplay-Japan-Expo-2023-Genshin-image-en-une.jpg" :hasPopup="true" displayMode="custom" />
    </div>
  </div>
</template>

<script>
import CardInfo from '../components/CardInfo.vue';

export default {
  name: 'HelloWorld',
  components: {
    CardInfo
  }
};
</script>
