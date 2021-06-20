<template>
  <div>

    <div class="c-tabList">
      <ul class="c-tabList_tabs">
        <li data-type="tab01" class="js-tabTrigger c-tabList_tab is-active"><span class="c-tabList_tabBtn"></span>TAB 01</li>
        <li data-type="tab02" class="js-tabTrigger c-tabList_tab"><span class="c-tabList_tabBtn"></span>TAB 02</li>
      </ul>
      <div class="c-tabList_inner">
        <div class="js-tabList_data c-tabList_data is-active" data-type="tab01">
          Content 01
        </div>
        <div class="js-tabList_data c-tabList_data" data-type="tab02">
          Content 02
        </div>
      </div>
    </div>  

  </div>
</template>

<script>
import tabToggle from '~/assets/js/tabToggle';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      tabToggle()
    })
  },
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/style.scss';

.c-tabList {

  &_tabs {
    display: flex;
  }

  &_tab {
    position: relative;
    font-weight: bold;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    @include rwd-fz(3, 2);
    @include rwd-prop(height, 9rem, 4.5rem);

    &.is-active {
      &::after {
        opacity: 1;
      }

      .c-tabList_tabBtn {
        &::after {
          transform: translateY(-25%) rotate(45deg);
        }
      }
    }

    &:first-child {
      color: #fff;
      background-color: blue;

      &::after {
        border-top-color: blue;
      }

      .c-tabList_tabBtn {
        &::after {
          border-color: blue;
        }
      }
    }

    &:last-child {
      background-color: yellow;

      &::after {
        border-top-color: yellow;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 0;
      left: 50%;
      bottom: -3rem;
      transform: translateX(-50%);
      border: 1.5rem solid transparent;
      opacity: 0;
      transition: opacity $anime;

      @include sp {
        border-width: 1rem;
        bottom: -2rem;
      }
    }

    &Btn {
      @include rwd-m(0 4rem 0 -7.5rem, 0 1rem 0 0rem);
      display: block;
      background-color: #fff;
      border: none;
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @include sp {
        width: 2rem;
        height: 2rem;
      }
      
      &::after {
        content: "";
        display: block;
        width: 1rem;
        height: 1rem;
        border-right: 2px solid #000;
        border-bottom: 2px solid #000;
        transform: translateX(-25%) rotate(-45deg);
        transition: transform $anime;

        @include sp {
          width: 0.75rem;
          height: 0.75rem;
        }
      }
    }
  }

  &_inner {
    background-color: #fff;
    @include rwd-p(0 3.2rem 8rem, 0 1.5rem 3rem);

    &--2cols {
      @extend .c-tabList_inner;
      display: flex;
      @include rwd-p(0,0);
  
      > * {
        width: 50%;
        @include rwd-p(6rem 4.8rem, 2rem .8rem);
      }

      > :first-child {
        border-right: 1px solid $black;
      }
    }
  }

  &_block {
    position: relative;
    @include rwd-p(3.2rem 9% 4rem, 2rem 0 5rem);
    border-bottom: 1px solid #000;

    &Head {
      text-align: left;
      display: flex;
      align-items: center;
    }
    
    &Body {
      @include rwd-m(1.6rem 0 2.4rem, 1.6rem 0 1rem);    
    }

    .c-toggleBtn {
      position: absolute;    
      right: 0;
      bottom: 2rem;
      
      @include sp {
        bottom: 1.5rem;
      }
    }
    
    &--s {
      @extend .c-tabList_block;
      border-bottom: none;
      @include rwd-p(6rem 9% 0rem, 2rem 0 0rem);
      
      .c-toggleBtn {
        position: relative;
        @include rwd-prop(bottom, 0, 0);
        @include rwd-m(4.5rem 0 0 auto, 2rem 0 0 auto);
      }
    }
  }

  &_icon {
    width: 108px;
    @include rwd-m(0 2rem 0 0, 0 1rem 0 0);

    @include sp {
      width: 35%;
    }
  }

  &_ttl {
    @include rwd-fz(2.4, 1.8);
  }

  &_data {
    opacity: 0;
    // position: absolute;
    z-index: -1;
    transition: opacity 1s ease;

    &.is-active {
      opacity: 1;
      position: relative;
      z-index: 1;
    }
  }
}
</style>