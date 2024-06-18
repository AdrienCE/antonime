<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white pr-16 h-[550px] w-[1100px] rounded-lg relative flex">
      <button class="absolute top-1 right-3 text-4xl" @click="$emit('close')"><i class="bi bi-x"></i></button>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
</script>