<template>
    <div class="md:w-1/4 relative">
        <img class="h-[260px] object-cover" :src=imgUrl>
        <h3 class="py-4">{{ title }}</h3>
    </div>
</template>

<script setup>
    /* eslint-disable */
    defineProps([
        'title',
        'imgUrl'
    ])
</script>