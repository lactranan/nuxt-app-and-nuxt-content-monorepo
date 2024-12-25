<template>
  <a :href="path.join(vitePublicSiteUrl, href)">
    <slot />
  </a>
</template>

<script setup>
import path from 'path-browserify'

const vitePublicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL

defineProps({
  href: {
    type: String,
    required: true,
  },
})
</script>
