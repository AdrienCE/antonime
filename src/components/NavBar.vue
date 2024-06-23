<template>
  <div class="header flex items-center w-full sticky top-0 bg-white text-gray-900 p-[0.7rem] z-30 md:justify-between">
    <div class="flex items-center">
      <a href="/" class="flex items-center">
        <img src="@/assets/logo-ws.png" width="70" height="70"/>
        ANTO’NIME
      </a>
    </div>

    <span @click="MenuOpen" class="absolute md:hidden right-6 md:top-5 cursor-pointer text-3xl z-10">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul :class="['md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute top-0 duration-300 ease-in', open ? 'bg-white w-full left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6 py-1 px-4" v-for="link in Links" :key="link.name">
        <a :href="link.link" class="text-xl hover:text-blue-900">{{ link.name }}</a>
      </li>
        <MyButton />
    </ul>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import MyButton from './MyButton.vue';

  let open = ref(false);
  let Links = [
    { name: "Programmes", link: "/programmes" },
    { name: "Exposants", link: "/exposants" },
    { name: "Artistes", link: "/artistes" },
    { name: "Infos pratiques", link: "/infospratiques" }
  ];

  function MenuOpen() {
    open.value = !open.value;
  }
</script>