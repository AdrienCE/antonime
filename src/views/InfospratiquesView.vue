<template>
  <HeaderTitle title="Informations pratiques" />
  
  <div class="container my-7 px-7">
    <TitleSection title="Comment venir ?"/>

    <div class="flex flex-wrap xl:grid xl:grid-cols-2 xl:gap-x-6">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5262.713820435251!2d2.3063821768765993!3d48.73687860924954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e677008f7d9b39%3A0xa4a0d04a6d69f573!2s6%20Av.%20Fran%C3%A7ois%20Arago%2C%2092160%20Antony!5e0!3m2!1sfr!2sfr!4v1720379751543!5m2!1sfr!2sfr" 
        class="w-full" width="600" height="450" 
        style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <div class="grid grid-cols-1 gap-4 w-full mt-8 md:grid-cols-3 xl:grid-cols-3 xl:grid-rows-2 xl:mt-0">
        <div v-for="item in 6" :key="item" class="border-stone-200 border-solid border-2 w-full p-4 min-h-0 md:min-h-36">
          <FontAwesomeIcon :icon="['fa', 'bus']" class="text-3xl mb-7"/>
          <p>RER B</p>
        </div>
      </div>
    </div>
    
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';
  import TitleSection from '@/components/TitleSection.vue';

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBus } from '@fortawesome/free-solid-svg-icons';


  library.add(faBus);

  export default {
    components: {
      MainFooter,
      HeaderTitle,
      TitleSection,
      FontAwesomeIcon
    }
  }
</script>
