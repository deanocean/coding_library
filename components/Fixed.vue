<template>
  <div>

    <!-- fixed -->
    <a href="https://www.iwatani-i-collect.com/products/wash/list-488.html" class="c-fixed">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" fill="#fff">
        <path
          d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
      商品購入は<br>こちら
    </a>
    <!-- end fixed -->

  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/style.scss';

body {
  height: 200vh;
}

.c-fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  width: 16rem;
  height: 15rem;
  background-color: LightSeaGreen;
  border-radius: 2rem 0 0 0;
  color: #fff;
  font-size: 2rem;
  line-height: 1.25;
  z-index: 100;
  white-space: nowrap;
  @include hover;

  &:hover {
    color: #fff;
  }

  @include sp {
    width: 12rem;
    height: 10rem;
    font-size: 1.4rem;

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>