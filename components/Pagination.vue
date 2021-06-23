<template>
  <div>

    <ol class="pagination">
      <li class="prev"><a href="#">上一頁</a></li>
      <li class="num"><a href="#">1</a></li>
      <li class="num active"><a href="#">2</a></li>
      <li class="num"><a href="#">3</a></li>
      <li class="num"><a href="#">4</a></li>
      <li class="num"><a href="#">5</a></li>
      <li class="next"><a href="#">下一頁</a></li>
    </ol>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.pagination {
  display: flex;
  text-align: center;
  color: #555555;
  font-size: 1.8rem;
  height: 4.8rem;
  line-height: 4.8rem;

  @include sp {
    font-size: 1.2rem;
    height: 3.2rem;
    line-height: 3.2rem;
  }


  > * {
    border: 1px solid #555555;
  }
  a {
    color: #555555;
  }
  .prev, .next {
    width: 8rem;

    @include sp {
      width: 5rem;
    }
  }
  .prev {

  }
  .num {
    width: 4rem;

    @include sp {
      width: 2.8rem;
    }

    &.active {
      background-color: #000;
      a {
        color: #fff;
      }
    }
  }
  .next {
    background-color: #F2F2F2;
  }
}
</style>