<template>
  <div class="bg-custom-blue2 text-white relative mt-20 p-6 grid xl:grid-cols-3">
    <div class="flex flex-col">
      <div class="flex justify-start items-center xl:mb-0">
        <img src="@/assets/logo-ws.webp" width="70" height="70" class="absolute left-2/4 translate-x-[-50%] translate-y-[-32%] xl:static xl:left-0 xl:transform-none"/> 
        <span class="hidden xl:block">ANTO’NIME</span>
      </div>
    </div>
    <div class="flex flex-col items-center my-6 xl:my-0 xl:justify-between xl:flex-row">
      <a href="/mentionslegales">Mentions légales</a>
      <a href="/conditions">Conditions générales</a>
      <a href="/infospratiques">Contactez-nous</a>
    </div>
    <div class="flex items-center text-center justify-center xl:justify-end gap-10">
      <a href="https://instagram.com/antonime.convention/" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'instagram']" class="text-2xl"/>
      </a>
      <a href="https://x.com/antonime_conv/" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'x-twitter']" class="text-2xl"/>
      </a>
    </div>
  </div>
  <div class="bg-custom-blue-dark text-white p-6 w-full text-sm text-center">
    <span>© 2024 Anto'nime - Tout droits réservés</span>
  </div>
</template>

<script setup>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

  library.add(faInstagram, faXTwitter);
</script>