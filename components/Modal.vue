<template>
  <div>
      <!-- _modal.scss & modal.js -->
      <a class="js-modalTrigger" data-movie="qhmX_GBIBFw">Modal Trigger</a>

      <!-- Modal -->
      <div class="c-modal_overlay js-modalOverlay"></div>
      <div class="c-modal js-modal">
        <div class="c-modal_close js-modalClose"></div>
      </div>
      <!-- end Modal -->
  </div>
</template>

<script>
import modal from '~/assets/js/modal';

export default {
  mounted(){
    modal();
  }
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/style.scss';

.c-modal {
  width: 800px;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;

  @include sp {
    width: 90%;
    height: 60vw;
  }

  &.is-active {
    pointer-events: auto;
    opacity: 1;
  }

  &_overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba($black, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;

    &.is-active {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &_close {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -60px;
    right: 0;
    cursor: pointer;

    &:before {
      content: "";
      width: 80%;
      height: 3px;
      background-color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
      content: "";
      width: 80%;
      height: 3px;
      background-color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    @include sp {
      width: 40px;
      height: 40px;
      top: -50px;

      &:before {
        height: 2px;
      }

      &:after {
        height: 2px;
      }
    }
  }

  &_cont {
    width: 100%;
    height: 100%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

</style>