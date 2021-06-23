<template>
  <div>

    <div class="c-container">
      <div class="c-row">
        <div class="c-row_col-4">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-4">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-4">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-4">
          <div class="box" style="width: 100%;"></div>
        </div>
      </div>
  
      <br>
      <br>
      <br>
  
      <div class="c-row">
        <div class="c-row_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>

    <div class="c-container--g">

      <h2>使用 gap 屬性，使程式更簡潔，並且可以取消對 container 的 padding 的依賴，可以單獨使用 row
      </h2>

      <div class="c-row--g">
        <div class="c-row--g_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row--g_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row--g_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
        <div class="c-row--g_col-2">
          <div class="box" style="width: 100%;"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@use "sass:math";

@import "~/assets/scss/style";

$container: 1100px;
$gutter-x: 20px;
$gutter-y: 40px;

.c-container {
  max-width: calc(#{$container} + #{$gutter-x});
  width: 100%;
  margin: 0 auto;
  padding: 0 math.div($gutter-x, 2);
}

.c-row {
  display:flex;
  // align-items: center;
  margin-top: -1 * $gutter-y;
  margin-left: -1 * math.div($gutter-x, 2);
  margin-right: -1 * math.div($gutter-x, 2);
  flex-wrap:wrap;

  &_col {
    flex-shrink: 0;
    padding-left: math.div($gutter-x, 2);
    padding-right: math.div($gutter-x, 2);
    margin-top: $gutter-y;

    &-2 {
      @extend .c-row_col;
      width: 50%;

      @include sp {
        width: 100%;
      }
    }

    &-4 {
      @extend .c-row_col;
      width: 25%;

      @include sp {
        width: 50%;
      }
    }
  }
}






.c-container--g {
  max-width: $container;
  width: 100%;
  margin: 0 auto;
}

.c-row--g {
  display:flex;
  flex-wrap:wrap;
  // align-items: center;
  margin-top: -1 * $gutter-y;
  gap: $gutter-x;

  &_col {
    // flex: 1 0 auto;
    flex-grow: 1;
    flex-shrink: 0;
    margin-top: $gutter-y;

    &-2 {
      @extend .c-row--g_col;
      width: calc(50% - #{$gutter-x} );

      @include sp {
        width: 100%;
      }
    }

    &-4 {
      @extend .c-row--g_col;
      width: calc(25% - #{$gutter-x} );

      @include sp {
        width: calc(50% - #{$gutter-x} );
      }
    }
  }
}
</style>