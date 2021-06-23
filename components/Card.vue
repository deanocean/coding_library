<template>
  <div>
    
    <div class="c-card">
      <div class="c-card_tags">
        <div class="c-card_tag">Tag01</div>
        <div class="c-card_tag">Tag02</div>
      </div>
      <div class="c-card_img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="c-card_body">
        <h2 class="c-card_ttl">Card title</h2>
        <p class="c-card_txt">This is a short card.</p>
      </div>
    </div>

    <br>
    <br>

    <div class="c-card">
      <div class="c-card_tags--overlay">
        <div class="c-card_tag">Tag01</div>
        <div class="c-card_tag">Tag02</div>
      </div>
      <div class="c-card_img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="c-card_body--overlay">
        <h2 class="c-card_ttl">Card title</h2>
        <p class="c-card_txt">This is a short card.</p>
      </div>
    </div>

    <br>
    <br>

    <div class="c-card c-card--padding">
      <div class="c-card_img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="c-card_body">
        <h2 class="c-card_ttl">Card title</h2>
        <p class="c-card_txt">This is a short card.</p>
      </div>
    </div>

    <br>
    <br>

    <div class="c-card c-card--padding c-card--horiz">
      <div class="c-card_img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="c-card_body">
        <h2 class="c-card_ttl">Card title</h2>
        <p class="c-card_txt">This is a short card.</p>
      </div>
    </div>

    <br>
    <br>

    <div class="c-card c-card--padding c-card--horizR">
      <div class="c-card_img">
        <img src="https://picsum.photos/300/200" alt="">
      </div>
      <div class="c-card_body">
        <h2 class="c-card_ttl">Card title</h2>
        <p class="c-card_txt">This is a short card.</p>
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
.c-card {
  $this: &;
  position: relative;
  display: flex;
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #aaa;

  &_tags {
    display: flex;
    
    &--overlay {
      @extend #{$this}_tags;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &_tag {
    background-color: #ccc;
    line-height: 2;
    width: 5em;
    text-align: center;

    &:last-child {
      background-color: #fcc;
    }
  }

  &_img {

  }

  &_body {
    padding: 1rem;

    &--overlay {
      @extend #{$this}_body;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .8);
    }
  }

  &_ttl {
    font-weight: bold;
    font-size: larger;
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &_txt {
    &:last-child {
      margin-bottom: 0;
    }
  }

  &--padding {
    padding: 2rem;

    #{$this}_body {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
  }

  &--horiz {
    flex-direction: row;
    gap: 3rem;

    > * {
      flex: 1 0 auto;
    }

    #{$this}_img {
      width: 40%;
    }

    #{$this}_body {
      padding: 0;
    }

    &R {
      @extend #{$this}--horiz;
      flex-direction: row-reverse;
    }
  }
}
</style>