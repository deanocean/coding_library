<template>
  <div class="container pt-5">
    <div class="row row-cols-1 row-cols-md-3 gy-5">
      
      <div class="col">
        <div class="c-card">
          <div class="c-tags">
            <div class="c-tag">Tag01</div>
            <div class="c-tag">Tag02</div>
          </div>
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body bg-light">
            <h2 class="c-card_ttl">Card title</h2>
            <p class="c-card_txt">This is a short card.</p>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="c-card">
          <div class="c-tags">
            <div class="c-tag">Tag01</div>
            <div class="c-tag">Tag02</div>
          </div>
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body bg-primary text-white">
            <h3 class="c-card_ttl--fix">Card title</h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="c-card c-card--hover-img">
          <div class="c-tags--overlay">
            <div class="c-tag">Tag01</div>
            <div class="c-tag">Tag02</div>
          </div>
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body bg-primary text-white">
            <h2 class="c-card_ttl">Card title</h2>
            <p class="c-card_txt">This is a short card.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="c-card c-card--hover-img">
          <div class="c-tags--overlay">
            <div class="c-tag">tag01</div>
            <div class="c-tag">tag02</div>
          </div>
          <div class="c-card_img">
            <img src="https://picsum.photos/300/250" alt="">
          </div>
          <div class="c-card_body--overlay">
            <h3 class="c-card_ttl--fix">Card title Card title Card title Card title Card title </h3>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="c-card c-card--hover-img">
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body pt-0">
            <h3 class="c-card_ttl--fix c-card_ttl--line">Card title Card title Card title Card title Card title </h3>
            <p class="c-card_txt--fix">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel ipsam excepturi consectetur? Voluptates numquam, expedita repudiandae nobis ducimus ab veritatis? Vel similique repudiandae nam, recusandae repellendus libero blanditiis ab.</p>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="c-card c-card--padding bg-info">
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body">
            <h2 class="c-card_ttl">Card title</h2>
            <p class="c-card_txt">This is a short card.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="c-card c-card--padding c-card--horiz bg-info">
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body">
            <h2 class="c-card_ttl">Card title</h2>
            <p class="c-card_txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="c-card c-card--padding c-card--horizR bg-info">
          <div class="c-card_img">
            <img src="https://picsum.photos/300/200" alt="">
          </div>
          <div class="c-card_body">
            <h2 class="c-card_ttl">Card title</h2>
            <p class="c-card_txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id?</p>
          </div>
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
@import "~/assets/scss/style";

.c-tags {
  $this: &;
  margin-bottom: 0.8rem;
  display: flex;

  &--overlay {
    @extend #{$this};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}

.c-tag {
  display: inline-block;
  vertical-align: middle;
  line-height: 2.5;
  min-width: 6em;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;

  &:nth-child(1) {
    background-color: #1d80d4;
  }

  &:nth-child(2) {
    background-color: #000;
  }
}

.c-card {
  $this: &;
  position: relative;
  display: flex;
  flex-direction: column;

  &_img {
    overflow: hidden;

    > * {
      transition: all $anime;
      width: 100%;
    }
  }

  &_body {
    padding: 2rem;

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
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.5em;

    &--fix {
      @extend #{$this}_ttl;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 2.4em;
    }

    &--line {
      @extend #{$this}_ttl;
      position: relative;
      padding: .5em 0;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 3rem;
        height: 2px;
        background-color: lightblue;
      }
    }

    &:only-child {
      margin-bottom: 0;
      text-align: left;
    }
  }

  &_txt {
    line-height: 1.5;

    &--fix {
      @extend #{$this}_txt;
      height: 4.5em;
      overflow: hidden;
    }

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
      background-color: unset;
    }
  }

  &--horiz {
    flex-direction: row;
    gap: 2rem;

    @include sp {
      flex-direction: column;
    }

    #{$this}_img {
      flex: 0 0 50%;
      
      @include sp {
        width: 100%;
        flex-grow: 1;
      }
    }

    #{$this}_body {
      flex: 1 1 auto;
      padding: 0;
    }

    &R {
      @extend #{$this}--horiz;
      flex-direction: row-reverse;

      @include sp {
        flex-direction: column;
      }
    }
  }

  &--hover-img {
    cursor: pointer;
    
    &:hover {
      #{$this}_img {
        > img {
          transform: scale(1.15);
        }
      }
    }
  }
}
</style>