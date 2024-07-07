<template>
  <HeaderTitle title="INVITES" />

  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Guest</h2>
    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="guests in guest"
        :key="guests.id"
        :title="guests.title"
        :imgUrl="guests.image"
        :description="guests.description"
        :social="guests.social"
        hasPopup="true"
        displayMode="custom"
      />
    </div>

    <!-- Banner tickets -->
    <a href="/billeterie" class="text-white bg-custom-pink flex rounded-md p-7 my-16 md:justify-between md:items-center md:h-[250px]">
      <div>
        <h2 class="font-bold text-2xl md:text-5xl">Billeterie ouverte !</h2>
        <p class="font-bold text-xl">N'oubliez surtout pas votre billet !</p>
      </div>
    </a>
  </div>

  <MainFooter/>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import CardInfo from '../components/CardInfo.vue';
import HeaderTitle from '../components/HeaderTitle.vue';
import guestData from '@/assets/data/guest-list.json';

export default {
  components: {
    MainFooter,
    CardInfo,
    HeaderTitle
  },
  data() {
    return {
      guest: guestData,
    };
  }
};
</script>
