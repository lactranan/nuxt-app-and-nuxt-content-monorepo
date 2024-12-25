<template>
  <a :href="path.join(vitePublicSiteUrl, href)">
    <slot />
  </a>
</template>

<script setup>
import path from 'path-browserify'

const vitePublicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || 'http://localhost:3000'

defineProps({
  href: {
    type: String,
    required: true,
  },
})
</script>
