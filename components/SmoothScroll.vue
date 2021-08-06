<template>
  <div>

    <!--
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/12.1.5/js/smooth-scroll.polyfills.min.js" defer></script>
    -->

    <div id="header">Header</div>

    <a href="#example">Smooth Scroll</a>

    <div class="box" id="example"></div>
  </div>
</template>

<script>
import smoothScroll from '~/assets/js/smoothScroll';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      smoothScroll()
    })
  },
}
</script>

<style lang="scss" scope>
// for demonstration
body {
  padding-top: 80px;
}

.box {
  margin: 100vh auto;
}

#header {
  height: 60px;
  background: grey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

</style>