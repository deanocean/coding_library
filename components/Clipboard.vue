<template>
  <div>

    <!--
    <script src="https://unpkg.com/clipboard@2/dist/clipboard.min.js" defer></script>
    -->
    
    <!-- Clipboard -->
    <button class="js-copyBtn" data-clipboard-text="Copied Content">
      Click here to copy
      <span id="notification">Copied!</span>
    </button>
    <!-- Clipboard -->

  </div>
</template>

<script>
import { clipboard } from '~/assets/js/clipboard';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      clipboard()
    })
  },
}
</script>

<style lang="scss" scope>
#notification {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1em 3em;
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  opacity: 0;
  transition: opacity .3s;
  z-index: -1;

  &.is-active {
    opacity: 1;
    z-index: 10;
  }
}
</style>