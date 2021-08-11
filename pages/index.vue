<template>
  <div class="container">

    <h1>Index</h1>

    <main>
      <section>
        <h2>Components</h2>

        <nuxt-link to="comp/breadcrumb">breadcrumb</nuxt-link>
        <nuxt-link to="comp/btn">btn</nuxt-link>
        <nuxt-link to="comp/btn02">btn02</nuxt-link>
        <nuxt-link to="comp/links">links</nuxt-link>
        <nuxt-link to="comp/card">card</nuxt-link>
        <nuxt-link to="comp/header">header</nuxt-link>
        <nuxt-link to="comp/header-bs">header-bs</nuxt-link>
        <nuxt-link to="comp/header-bs02">header-bs02</nuxt-link>
        <nuxt-link to="comp/footer">footer</nuxt-link>
        <nuxt-link to="comp/fixed">fixed</nuxt-link>
        <nuxt-link to="comp/iconList">iconList</nuxt-link>
        <nuxt-link to="comp/pagination">pagination</nuxt-link>
        <nuxt-link to="comp/pairList">pairList</nuxt-link>
        <nuxt-link to="comp/row">row</nuxt-link>
        <nuxt-link to="comp/table">table</nuxt-link>

      </section>

      <section>
        <h2>Features</h2>

        <nuxt-link to="feat/clipboard">clipboard</nuxt-link>
        <nuxt-link to="feat/modal">modal</nuxt-link>
        <nuxt-link to="feat/scrollMagic">scrollMagic</nuxt-link>
        <nuxt-link to="feat/slideDown">slideDown</nuxt-link>
        <nuxt-link to="feat/smoothScroll">smoothScroll</nuxt-link>
        <nuxt-link to="feat/swiper">swiper</nuxt-link>
        <nuxt-link to="feat/tabToggle">tabToggle</nuxt-link>
        <nuxt-link to="feat/toggleMenu">toggleMenu</nuxt-link>
        <nuxt-link to="feat/accordion-bs">accordion-bs</nuxt-link>

      </section>
    </main>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scope>
body {
  padding: 50px;
  overflow: hidden;
}

h1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(-25deg);
  font-size: 35rem;
  opacity: .08;
  color: rgb(84, 206, 124);
  pointer-events: none;
}

h2 {
  margin-bottom: .5em;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: auto;
}

main {
  display: flex;
  justify-content: center;
}

section {
  padding: 40px;

  &:first-child {
    border-right: 1px solid #ccc;
  }
}

a {
  text-decoration: underline;
  color: green;
  display: block;
  line-height: 2;
}

</style>
