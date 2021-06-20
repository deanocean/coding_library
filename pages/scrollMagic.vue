<template>
  <div class="container">
    <div>
      <ScrollMagic />
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
        defer: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js',
        defer: true
      }
    ]
  },
}
</script>

<style>

</style>
