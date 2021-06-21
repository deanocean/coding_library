<template>
  <div>

    <nav aria-label="c-breadcrumb">
      <ol class="c-breadcrumb">
        <li class="c-breadcrumb_item"><a href="#">Home</a></li>
        <li class="c-breadcrumb_item"><a href="#">Library</a></li>
        <li class="c-breadcrumb_item is-active" aria-current="page">Data</li>
      </ol>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;

  &_item {
    + .c-breadcrumb_item {
      padding-left: 0.5rem;

      &::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "/";
      }
    }

    a {
      display: inline-block;
      color: blue;
    }
  }
}
</style>