<template>
  <div>

    <input type="checkbox" id="hamburger-open" class="l-hamburger_open">
    <label for="hamburger-open" class="l-hamburger_btn">
      <span class="l-hamburger_line"></span>
      <span class="l-hamburger_line"></span>
      <span class="l-hamburger_line"></span>
    </label>
    
    <div class="l-hamburger_list">Left</div>

    <div class="l-hamburger_list--right">Right</div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.l-hamburger {
  $this: &;
  &_open {
    display: none;
    opacity: 0;
    position: fixed;
    left: -999px;
    top: -999px;
    z-index: -999;

    &:checked {
      & ~ .l-hamburger_list {
        transform: translateX(0);
      }

      & ~ .l-hamburger_list--right {
        transform: translateX(0);
      }
      
      & ~ .l-hamburger_btn {
        .l-hamburger_line {
          &:nth-child(1) {
            transform: rotate(45deg) translateY(-0.5rem);
          }

          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg) translateY(0.5rem);
          }
        }
      }
    }
  }

  &_btn {
    cursor: pointer;
    z-index: 9999;
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);

    background-color: #ccc;
    padding: 1rem;
  }

  &_line {
    position: relative;
    display: block;
    width: 4rem;
    height: 1px;
    background-color: #000;
    transform-origin: left center;
    transition: all $anime;

    &:nth-child(2) {
      margin: 1rem 0;
    }
  }

  &_list {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 500px;
    transform: translateX(-100%);
    transition: all $anime;
    z-index: 999;

    background-color: DarkSalmon;
    color: #fff;
    font-size: 6rem;

    @include sp {
      width: 100vw;
    }

    &--right {
      @extend #{$this}_list;
      left: unset;
      right: 0;
      transform: translateX(100%);
    }
  }
}
</style>