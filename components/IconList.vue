<template>
  <div>

    <ul class="c-iconList">
      <li class="c-iconList_item">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li class="c-iconList_item">Quam iste, beatae accusamus eos nostrum aliquid reiciendis</li>
      <li class="c-iconList_item">Velit aspernatur ad voluptatum, laudantium assumenda</li>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-iconList {
  margin-top: -1rem;

  &_item {
    margin-top: 1rem;

    &::before {
      content: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22.067" height="17.707"><g data-name="Group 6466" fill="none" stroke-width="2"><g data-name="Rectangle 5290" stroke="%23abe"><path stroke="none" d="M0 1.707h16v16H0z"/><path d="M1 2.707h14v14H1z"/></g><path data-name="Path 28581" d="M4.666 7.297l5.052 5.052L21.36.707" stroke="%23abe"/></g></svg>');
      display: inline-block;
      margin-right: 0.5em;
      vertical-align: middle;
    }
  }
}
</style>