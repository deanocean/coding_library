<template>
  <div>

    <a class="c-anchor_link" href="#">Anchor link<span class="c-anchor_arrow"></span></a>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-anchor {
    &_link {
    font-weight: bold;
    font-size: 3.4rem;

    &:hover {
      @include pc {
        .c-anchor_arrow {
          &::before {
            background-color: orange;
          }
        }
      }
    }
  }

  &_arrow {
    position: relative;
    margin-left: .8em;
    display: inline-block;
    vertical-align: middle;
    transform: translateY(-1px);
    width: 1.3em;
    height: 1.3em;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      background-color: lightblue;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: background $anime;
    }

    &::after {
      width: 0.4em;
      height: 0.4em;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: translate(-50%, -60%) rotate(45deg);
    }
  }
}
</style>