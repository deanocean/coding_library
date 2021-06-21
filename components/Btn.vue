<template>
  <div>

    <button class="c-btn c-btn--main c-btn--arrow">Button</button>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-btn {
  position: relative;
  display: inline-block;
  border: 2px solid $black;
  font-weight: bold;
  padding: 1.5em 3em;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: all $anime;

  &:hover {
    @include pc {
      color: LightCoral;
      background-color: #fff;
    }
  }

  &--main {
    color: black;
    background-color: LightCoral;
    border-color: LightCoral;
  }

  &--arrow {
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-right: 3px solid $black;
      border-bottom: 3px solid $black;
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%) rotate(-45deg);
      transition: all $anime;

      @include sp {
        right: 2rem;
      }
    }

    &:hover {
      &::after {
        border-color: LightCoral;
      }
    }
  }
}
</style>