<template>
  <HeaderTitle title="Invités" />

  <div class="container my-7 px-7">

    <div class="grid w-full grid-cols-none gap-2 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      <CardInfo v-for="guests in guest"
        :key="guests.id"
        displayMode="dynamic"
        cardLarge="true"
        hasPopup="true"

        :title="guests.title"
        :imgGuest="guests.image"
        :description="guests.description"
        :social="guests.social"
      />
    </div>

    <!-- Banner tickets -->
    <BannerInfo />
  </div>

  <MainFooter/>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue';
import CardInfo from '@/components/CardInfo.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';
import guestData from '@/assets/data/guest-list.json';
import BannerInfo from '@/components/BannerInfo.vue';

export default {
  components: {
    MainFooter,
    CardInfo,
    HeaderTitle,
    BannerInfo
},
  data() {
    return {
      guest: guestData,
    };
  }
};
</script>
