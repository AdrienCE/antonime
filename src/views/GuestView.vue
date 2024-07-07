<template>
  <HeaderTitle title="Invités" />

  <div class="container my-7 px-7">
    <TitleSection title="Guest"/>

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
import TitleSection from '@/components/TitleSection.vue';

export default {
  components: {
    MainFooter,
    CardInfo,
    HeaderTitle,
    BannerInfo,
    TitleSection
},
  data() {
    return {
      guest: guestData,
    };
  }
};
</script>
