<template>
  <div>
  
    <!--
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" defer></script>
    -->

    <p>Scroll down</p>

    <div class="box js-scrollAnimation"></div>
    
  </div>
</template>

<script>
import { scrollmagic } from '~/assets/js/scrollmagic';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      scrollmagic()
    })
  },
}
</script>

<style lang="scss" scope>
  .box {
    position: relative;
    left: -100vw;
    transition: all .3s;
    &.is-animated {
      left: 0;
    }
  }
</style>