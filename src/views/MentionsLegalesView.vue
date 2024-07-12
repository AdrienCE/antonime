<template>
  <HeaderTitle title="Mentions légales" />
  
  <div class="container my-7 px-7">
    <h2 class="pb-[2rem] text-3xl font-bold">Mentions légales - <span class="text-sm font-normal">En vigueur au
        01/06/2024</span></h2>
    <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l’ "Utilisateur", du site
        https://www.antonime.fr , ci-après le "Site", les présentes mentions légales.</p>
    <br>
    <p>La connexion et la navigation sur le Site par l’Utilisateur implique l'acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
    <h3 class="text-2xl font-bold py-8">ARTICLE 1 - L'EDITEUR</h3>
    <p>L’édition et la direction de la publication du Site est assurée par WARSHEEP STUDIO, domiciliée 6 Av. François Arago, 92160 Antony, dont le numéro de téléphone est 0682473719, et l'adresse e-mail warsheepstudio.contact@gmail.com. ci-après l'"Editeur".</p>
    <h3 class="text-2xl font-bold py-8">ARTICLE 2 - L'HÉBERGEUR</h3>
    <p>L'hébergeur du Site est la société WARSHEEP STUDIO, association de loi 1901, dont le siège social est situé 6 Av. François Arago, 92160 Antony, avec le numéro de téléphone : 0682473719 + warsheepstudio.contact@gmail.com.</p>
    <h3 class="text-2xl font-bold py-8">ARTICLE 3 - ACCÈS AU SITE</h3>
    <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être
        tenu responsable.
    </p>
    <h3 class="text-2xl font-bold py-8">COLLECTE DES DONNÉES</h3>
    <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs. Toute utilisation, reproduction, diffusion, commercialisation, modification de
        toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
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
