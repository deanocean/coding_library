<template>
  <div class="container">
    <div>
      <Swiper />
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      {
        src: 'https://unpkg.com/swiper/swiper-bundle.min.js',
        defer: true
      }
    ],
    link: [
      {
        href: 'https://unpkg.com/swiper/swiper-bundle.min.css',
        rel: 'stylesheet'
      }
    ]
  },
}
</script>

<style>

</style>
