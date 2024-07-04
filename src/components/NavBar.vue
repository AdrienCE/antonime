<template>
  <header :class="[open ? 'block' : 'header flex items-center w-full sticky top-0 bg-white text-gray-900 p-[0.7rem] z-30 md:justify-between']">
    <div :class="[open ? 'hidden' : 'flex items-center']">
      <a href="/" class="flex items-center">
        <img src="@/assets/logo-ws.webp" width="50" height="50"/>
        ANTO’NIME
      </a>
    </div>

    <span @click="MenuOpen" :class="[open ? 'fixed right-6 cursor-pointer text-3xl z-10 top-5 xl:hidden ' : 'absolute right-6 cursor-pointer text-3xl z-10 xl:hidden xl:top-5']">
      <font-awesome-icon :icon="open ? ['fa', 'xmark'] : ['fa', 'bars']" />
    </span>

    <ul :class="[open ? 'bg-white w-full fixed left-0 min-h-screen flex flex-col justify-center items-center duration-300 ease-in p-4 z-[5]' : 'w-0 hidden translate-x-full items-center top-0 px-0 pb-0 xl:p-0 xl:w-auto xl:flex xl:relative xl:translate-x-0 xl:justify-end']">
      <li class="my-6 py-1 px-4 mx-4 md:my-0" v-for="link in Links" :key="link.name">
        <a :href="link.link" class="text-md hover:text-blue-900">{{ link.name }}</a>
      </li>
        <MyButton href="/billeterie" title="Billeterie" />
    </ul>
  </header>
</template>
  
<script setup>
  import { ref } from 'vue';
  import MyButton from './MyButton.vue';

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import { faBars} from '@fortawesome/free-solid-svg-icons';
  import { faXmark} from '@fortawesome/free-solid-svg-icons';

  library.add(faBars, faXmark);


  let open = ref(false);
  let Links = [
    { name: "Programmes", link: "/programmes" },
    { name: "Invites", link: "/invites" },
    { name: "Artistes", link: "/artistes" },
    { name: "Infos pratiques", link: "/infospratiques" }
  ];

  function MenuOpen() {
    open.value = !open.value;
  }
</script>