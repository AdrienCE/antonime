<template>
  <HeaderTitle title="Maid café"/>
  
  <div class="container my-7 px-7">

    <div class="flex flex-col items-center m-auto gap-8 mb-24 last:mb-0 md:flex-row-reverse md:mb-14 xl:mb-32">
      <div class="text-black-800 md:w-2/4">
        <p>
          Vous l'avez découvert hier ; une des activités que nous organisons pour vous est un Maid Café cosplay à thème ! Pour cette première édition, nous avons choisi le thème Genshin Impact et avons été plus particulièrement inspirés par la première région du jeu, Mondstadt !
        </p>
        <p>
          Swipez à droite pour trouver toutes les informations utiles :
        </p>
        
        <ul class="list-disc list-inside mt-5 mb-5">
          <li>
            les créneaux d'ouverture du Café (on vous conseille d'acheter vos places ensemble pour être certains d'être placés à côté ! En venant à moins de 3 personnes, vous êtes en effet susceptibles d'être placés avec d'autres visiteurs venus également seul ou à deux :))
          </li>
          <li>
            le menu !! composé d'une boisson et d'un cupcake (base + topping au choix)
          </li>
        </ul>
        <p>Si vous avez d'autres questions, n'hésitez pas à les poster en DM sur Instagram !</p>
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