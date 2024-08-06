<template>
  <HeaderTitle title="Maid café"/>
  
  <div class="container my-7 px-7">

    <div class="flex flex-col items-center m-auto gap-8 mb-24 last:mb-0 md:flex-row-reverse md:mb-14 xl:mb-32">
      <div class="text-black-800 md:w-2/4">
        <p>
          Si vous nous avez suivis depuis le début sur nos réseaux, vous nous avez observés construire l’une de nos activités : le Maid Cafe !
        </p>
        <br/>
        <p>
          Géré par notre belle Taratata_cosplay, pour cette première édition d’Anto’nime, nous avons le plaisir de vous présenter un Maid Café inspiré de l’univers Genshin Impact. Plus particulièrement sur la première région du jeu, Monstadt !
          C’est avec enthousiasme que nous vous proposons des cupcakes et cocktails signatures que nous avons travaillés et peaufinés afin de vous offrir un moment unique et magique.
          Voyageur, laissez-vous porter jusqu’à nos tables pour savourer une boisson et un cupcake en charmante compagnie !
        </p>
        <br/>
        <p>
          Lumine, Amber et Mona seront ravies de vous recevoir comme il se doit dans notre petit café éphémère.
          Soyez vigilant, cette activité est sous réservation et plusieurs créneaux sont disponibles. Si vous êtes tentés par l’aventure, nous vous recommandons de prendre vos places rapidement et ensemble si vous souhaitez être en compagnie de vos ami.e.s !
          La formule inclut une boisson de votre choix avec un cupcake personnalisé (voir menu ci-dessous). En espérant vous y voir nombreux !
        </p>
        <br/>
        <p>INFORMATION :</p>
        <ul class="list-disc list-inside mt-5 mb-5">
          <li>
            6 tables de 4 personnes (si vous venez à 3 ou moins, vous êtes susceptibles de partager votre table avec un ou plusieurs voyageur.euse.s)
          </li>
          <li>
            Activité payante (6,50€)
          </li>
          <li>
            4 Services de 45min
          </li>
          <li>
            Ouverture : 15h - 18h30
          </li>
        </ul>
      </div>
      <div class="md:w-2/4">
        <img src="@/assets/images/trioMaid.webp" width="100%" height="auto" class=" w-full object-cover object-top md:h-[350px] xl:h-[500px]" :alt="altText"/>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 w-full mt-8 mb-8 md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-1 xl:mt-0">
      <img src="@/assets/images/MCMenu2.png" width="100%" height="auto" class="object-cover" alt="Menu 1"/>
      <img src="@/assets/images/MCMenu3.png" width="100%" height="auto" class="object-cover" alt="Menu 2"/>
    </div>

    <div class="grid grid-cols-1 gap-4 w-full mt-8 md:grid-cols-3 xl:grid-cols-3 xl:grid-rows-1 xl:mt-0">
      <img src="@/assets/images/MAIDCAFE01.webp" width="100%" height="auto" class="object-cover" alt="Maid 1"/>
      <img src="@/assets/images/MAIDCAFE02.webp" width="100%" height="auto" class="object-cover" alt="Maid 2"/>
      <img src="@/assets/images/MAIDCAFE05.webp" width="100%" height="auto" class="object-cover" alt="Maid 3"/>
    </div>
  </div>

  <MainFooter/>
</template>
  
<script>
  import MainFooter from '@/components/MainFooter.vue';
  import HeaderTitle from '@/components/HeaderTitle.vue';

  export default {
    components: {
      MainFooter,
      HeaderTitle
    }
  }
</script>