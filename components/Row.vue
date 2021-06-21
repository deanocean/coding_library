<template>
  <div>

    <div class="c-row">
      <div class="c-row_item-4">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-4">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-4">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-4">
        <div class="box" style="width: 100%;"></div>
      </div>
    </div>

    <br>
    <br>
    <br>

    <div class="c-row">
      <div class="c-row_item-2">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-2">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-2">
        <div class="box" style="width: 100%;"></div>
      </div>
      <div class="c-row_item-2">
        <div class="box" style="width: 100%;"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-row {
  margin: 0 -2rem -4rem;
  display: flex;
  flex-wrap: wrap;

  &_item {
    padding: 0 2rem;
    margin-bottom: 4rem;

    @include sp {
      margin-bottom: 2rem;
    }

    &-2 {
      @extend .c-row_item;
      width: 50%;

      @include sp {
        width: 100%;
      }
    }

    &-4 {
      @extend .c-row_item;
      width: 25%;

      @include sp {
        width: 50%;
      }
    }
  }
}
</style>