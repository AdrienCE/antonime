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

      <div class="grid grid-cols-1 gap-4 w-full mt-8 md:grid-cols-3 xl:grid-cols-2 xl:grid-rows-2 xl:mt-0">
        <CardInfo v-for="cards in card" :key="cards" displayMode="static"
          :title="cards.title"
          :description="cards.description"
          :social="cards.social"
        />
      </div>
    </div>

    <TitleSection title="Contactez nous"  class="pt-16"/>
    <p>Adresse mail : <a href="mailto:contact@.antonime@gmail.com">contact.antonime@gmail.com</a></p>
    
  </div>

  <MainFooter/>
</template>

<script>
  import MainFooter from '@/components/MainFooter.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';
  import TitleSection from '@/components/TitleSection.vue';
  import CardInfo from '@/components/CardInfo.vue';

  export default {
    components: {
      MainFooter,
      HeaderTitle,
      TitleSection,
      CardInfo
    },
    data() {
      return {
        card:[
          {
            social:[{"bus" : true}],
            title: "RER",
            description: "RER B --> Station Antony ou RER C --> Chemin d'Anthony"
          },
          {
            social:[{"bus" : true}],
            title: "BUS",
            description: "Ligne 197 arret Petit Massy (puis 15min à pied) ou Ligne 297 arret Place Charles Steber (puis 15min a pied)"
          },
          {
            social:[{"covoit" : true}],
            title: "COVOITURAGE",
            description: "Réservation à faire via le mail de contact dans la rubrique CONTACTEZ NOUS"
          },
          {
            social:[{"car" : true}],
            title: "EN VOITURE",
            description: "En passant par la N20, A6 et la A10"
          }
        ]
      };
    }
  }
</script>
