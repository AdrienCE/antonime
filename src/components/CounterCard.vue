<template>
    <span>{{ animatedCount }}</span>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { defineProps } from 'vue'; // Importez defineProps
  
  const props = defineProps({
    target: {
      type: Number,
      required: true
    }
  });
  
  const animatedCount = ref(0);
  
  onMounted(() => {
    const updateCount = (count, target) => {
      const speed = 2000;
      const increment = target / (speed / 16);
      const animate = () => {
        if (count.value < target) {
          count.value = Math.ceil(count.value + increment);
          requestAnimationFrame(animate);
        } else {
          count.value = target;
        }
      };
      animate();
    };
  
    const options = {
      threshold: 1.0,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount(animatedCount, props.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(document.querySelector('.counter'));
  });
  </script>