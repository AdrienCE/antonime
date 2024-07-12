<template>
  <HeaderTitle title="Artistes"/>

  <div class="container my-7 px-7">
    <TitleSection title="Zone A"/>
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="expoa in expoA"
        :key="expoa.id"
        displayMode="dynamic"
        :cardMini=true
        :hasPopup=true
        
        :title="expoa.title"

        :imgExpoA="expoa.image+'.webp'"
        :description="expoa.description"
        :social="expoa.social"
        :social2="expoa.social2"
        :social3="expoa.social3"
        :button="expoa.button"
      />
    </div>

    <TitleSection title="Zone B" class="pt-16"/>
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="expob in expoB"
        :key="expob.id"
        displayMode="dynamic"
        :cardMini=true
        :hasPopup=true
        
        :title="expob.title"

        :imgExpoB="expob.image+'.webp'"
        :description="expob.description"
        :social="expob.social"
        :social2="expob.social2"
        :social3="expob.social3"
        :button="expob.button"
      />
    </div>

    <TitleSection title="Zone C" class="pt-16"/>
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="expoc in expoC"
        :key="expoc.id"
        displayMode="dynamic"
        :cardMini=true
        :hasPopup=true
        
        :title="expoc.title"

        :imgExpoC="expoc.image+'.webp'"
        :description="expoc.description"
        :social="expoc.social"
        :social2="expoc.social2"
        :social3="expoc.social3"
        :button="expoc.button"
      />
    </div>
  </div>
  
  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import TitleSection from '@/components/TitleSection.vue';
  import CardInfo from '@/components/CardInfo.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';
  import expoDataA from '@/assets/data/expo-list-a.json';
  import expoDataB from '@/assets/data/expo-list-b.json';
  import expoDataC from '@/assets/data/expo-list-c.json';

  export default {
    components: {
    MainFooter,
    CardInfo,
    HeaderTitle,
    TitleSection
  },
    data() {
      return {
        expoA: expoDataA,
        expoB: expoDataB,
        expoC: expoDataC
      };
    }
  };
</script>
