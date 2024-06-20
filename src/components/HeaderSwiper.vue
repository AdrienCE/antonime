<script setup>
  import { register } from 'swiper/element/bundle';
  
  register();
</script>

<template>
  <swiper-container :navigation="true" :pagination="true" :loop="true" :modules="modules">
    <swiper-slide>
      <div class="relative bg-black">
        <img src="@/assets/images/convention.jpg" alt="image convention"
          class="opacity-50 w-full h-[300px] object-cover" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative bg-black">
        <img src="@/assets/images/convention.jpg" alt="image convention"
          class="opacity-50 w-full h-[300px] object-cover" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="relative bg-black">
        <img src="@/assets/images/convention.jpg" alt="image convention"
          class="opacity-50 w-full h-[300px] object-cover" />
      </div>
    </swiper-slide>
  </swiper-container>
</template>