<template>
  <div class="container">
    <div>
      <Clipboard />
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      {
        src: 'https://unpkg.com/clipboard@2/dist/clipboard.min.js',
        defer: true
      }
    ]
  },
}
</script>

<style>

</style>
