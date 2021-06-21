<template>
  <div class="container">
    <div>
      <SmoothScroll />
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/12.1.5/js/smooth-scroll.polyfills.min.js',
        defer: true
      }
    ]
  },
}
</script>

<style>

</style>
