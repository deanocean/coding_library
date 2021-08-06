<template>
  <div>

    <!-- for cdn
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    -->
    
    <!-- for npm
    import 'bootstrap/js/dist/collapse';
    -->

    <header class="l-header">
      <a class="l-header_brand u-hover" target="_blank" href="#">LOGO</a>
      <button class="hamburger hamburger--3dy collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </button>
      <nav class="collapse l-header_nav" id="navbarNav">
        <ul class="l-header_list">
          <li class="l-header_item">
            <a class="js-closeCollapse l-header_link active" aria-current="page" href="#brandStory">ブランドストーリー</a>
          </li>
          <li class="l-header_item">
            <a class="js-closeCollapse l-header_link" href="#feature">特徴</a>
          </li>
          <li class="l-header_item">
            <a class="js-closeCollapse l-header_link" href="#lineup">ラインナップ</a>
          </li>
          <li class="l-header_item">
            <a class="js-closeCollapse l-header_link" href="#comment">ご利用者様の声</a>
          </li>
          <li class="l-header_item">
            <a class="js-closeCollapse l-header_link" href="#faq">よくあるご質問</a>
          </li>
        </ul>
        <ul class="l-header_iconList">
          <li class="l-header_iconItem">
            <a class="l-header_iconLink u-hover" target="_blank" rel="nofollow noopener noreferrer" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.61 39.61"><defs><style>.cls-1{fill:#0095ae;}.cls-2,.cls-3{fill:#fff;}.cls-3{fill-rule:evenodd;}</style></defs><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><circle class="cls-1" cx="19.81" cy="19.81" r="19.81" transform="matrix(0.21, -0.98, 0.98, 0.21, -3.73, 35)"/><path class="cls-2" d="M32.84,13.17a10.1,10.1,0,0,1-2.47.7c.4-.07,1-.78,1.22-1.07a4.77,4.77,0,0,0,.82-1.5s0-.1,0-.13a.15.15,0,0,0-.13,0,12.32,12.32,0,0,1-2.92,1.12.22.22,0,0,1-.21-.05,1.55,1.55,0,0,0-.25-.26,5.07,5.07,0,0,0-1.42-.87,4.93,4.93,0,0,0-2.18-.35,5.24,5.24,0,0,0-3.72,1.94,5.2,5.2,0,0,0-1,2,5.5,5.5,0,0,0-.05,2.1c0,.12,0,.14-.1.12A15.62,15.62,0,0,1,10.36,11.8c-.12-.13-.18-.13-.28,0a5.11,5.11,0,0,0,.87,6,8,8,0,0,0,.62.54,5.1,5.1,0,0,1-1.94-.54c-.12-.08-.18,0-.19.1a2.93,2.93,0,0,0,0,.58,5.14,5.14,0,0,0,3.17,4.11,3.75,3.75,0,0,0,.65.2,5.91,5.91,0,0,1-1.9.05c-.14,0-.2.05-.14.18a5.35,5.35,0,0,0,4,3.35c.18,0,.36,0,.54.07l0,0c-.45.68-2,1.19-2.73,1.44a9.77,9.77,0,0,1-4.15.53c-.22,0-.27,0-.33,0s0,.1.06.15a9.52,9.52,0,0,0,.87.52,13.59,13.59,0,0,0,2.77,1.11A14.79,14.79,0,0,0,26.6,26.91c2.94-2.92,4-6.94,4-11,0-.16.18-.25.29-.33a9.63,9.63,0,0,0,2-2,.65.65,0,0,0,.12-.39v0C32.93,13.1,32.93,13.12,32.84,13.17Z"/><path class="cls-3" d="M13.78,29.77Z"/><path class="cls-3" d="M13.78,29.77Z"/><path class="cls-3" d="M14.6,29.79s.43,0,0,0C14.6,29.77,14.65,29.79,14.6,29.79Z"/><path class="cls-3" d="M23.23,9.79a.09.09,0,0,1-.1,0Z"/></g></g></svg>
            </a>
          </li>
          <li class="l-header_iconItem">
            <a class="l-header_iconLink u-hover" target="_blank" rel="nofollow noopener noreferrer" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.61 39.61"><defs><style>.cls-1{fill:#0095ae;}.cls-2{fill:#fff;fill-rule:evenodd;}</style></defs><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><circle class="cls-1" cx="19.81" cy="19.81" r="19.81" transform="translate(-4.02 34.53) rotate(-76.72)"/><path class="cls-2" d="M16.52,19.9V32a.32.32,0,0,0,.32.31h4.5a.31.31,0,0,0,.32-.31V19.71h3.27a.32.32,0,0,0,.31-.29l.32-3.72a.32.32,0,0,0-.32-.34H21.66V12.73a1.12,1.12,0,0,1,1.12-1.12H25.3a.31.31,0,0,0,.31-.32V7.58a.31.31,0,0,0-.31-.32H21a4.52,4.52,0,0,0-4.52,4.52v3.58H14.27a.31.31,0,0,0-.31.32v3.71a.31.31,0,0,0,.31.32h2.25Z"/></g></g></svg>
            </a>
          </li>
          <li class="l-header_iconItem">
            <a class="l-header_iconLink u-hover" target="_blank" rel="nofollow noopener noreferrer" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.61 39.61"><defs><style>.cls-1,.cls-3{fill:#0095ae;}.cls-2{fill:#fff;}.cls-2,.cls-3{fill-rule:evenodd;}</style></defs><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><circle class="cls-1" cx="19.81" cy="19.81" r="19.81" transform="translate(-6.07 9.09) rotate(-22.5)"/><path class="cls-2" d="M33.64,17.82a9.79,9.79,0,0,1-2,6.19,19.73,19.73,0,0,1-2.95,3.11,50.54,50.54,0,0,1-7.44,5.31c-.54.32-1.12.57-1.69.84a1,1,0,0,1-.42.11c-.37,0-.56-.17-.51-.6s.11-.79.18-1.19a4.68,4.68,0,0,0,.07-1.35.85.85,0,0,0-.49-.65,3.66,3.66,0,0,0-1.17-.34,15.43,15.43,0,0,1-3.54-.95A13.52,13.52,0,0,1,9.85,26a10.56,10.56,0,0,1-3.66-5.85A8.56,8.56,0,0,1,6,17.67a9.69,9.69,0,0,1,2.19-5.5,13.06,13.06,0,0,1,5.1-3.81,15.85,15.85,0,0,1,5.6-1.3,15.94,15.94,0,0,1,8.54,1.83,12.11,12.11,0,0,1,4.93,4.64A9.18,9.18,0,0,1,33.64,17.82Zm-13.87.05c.93,1.27,1.83,2.49,2.72,3.72a.78.78,0,0,0,.6.36.77.77,0,0,0,.8-.83V15.65A.76.76,0,0,0,23.4,15a.69.69,0,0,0-.77.16.82.82,0,0,0-.25.65V19l-.12-.14-1.77-2.41-.84-1.16a.74.74,0,0,0-.77-.34.69.69,0,0,0-.57.5,1.37,1.37,0,0,0,0,.4v5.19a1.27,1.27,0,0,0,0,.39.76.76,0,0,0,.81.51.79.79,0,0,0,.64-.76c0-.65,0-1.3,0-2Zm6.54-1.43h2a.73.73,0,0,0,.72-.74.72.72,0,0,0-.72-.74q-1.39,0-2.79,0a.7.7,0,0,0-.71.7v5.57a.72.72,0,0,0,.72.72c.93,0,1.86,0,2.79,0a.73.73,0,0,0,.7-.72.69.69,0,0,0-.68-.76c-.61,0-1.22,0-1.84,0h-.21V19.2h2a.73.73,0,0,0,.75-.71.71.71,0,0,0-.71-.78h-2Zm-13.92,4v-.25c0-1.49,0-3,0-4.48a.75.75,0,1,0-1.49,0v5.4a.57.57,0,0,0,0,.13.73.73,0,0,0,.7.67c.94,0,1.88,0,2.83,0a.75.75,0,0,0,.68-.91.71.71,0,0,0-.75-.58C13.72,20.45,13.07,20.46,12.39,20.46Zm4.88-2v-2.7a.8.8,0,0,0-.51-.77.76.76,0,0,0-1,.78c0,1.79,0,3.58,0,5.36a1.12,1.12,0,0,0,.09.41.75.75,0,0,0,.81.4.79.79,0,0,0,.61-.77Z"/><path class="cls-3" d="M19.77,17.87v1.37c0,.65,0,1.3,0,2a.79.79,0,0,1-.64.76.76.76,0,0,1-.81-.51,1.27,1.27,0,0,1,0-.39V15.86a1.37,1.37,0,0,1,0-.4.69.69,0,0,1,.57-.5.74.74,0,0,1,.77.34l.84,1.16,1.77,2.41.12.14v-3.2a.82.82,0,0,1,.25-.65A.69.69,0,0,1,23.4,15a.76.76,0,0,1,.49.65v5.47a.77.77,0,0,1-.8.83.78.78,0,0,1-.6-.36C21.6,20.36,20.7,19.14,19.77,17.87Z"/><path class="cls-3" d="M26.31,16.44V17.7h2a.71.71,0,0,1,.71.78.73.73,0,0,1-.75.71h-2v1.26h.21c.62,0,1.23,0,1.84,0a.69.69,0,0,1,.68.76.73.73,0,0,1-.7.72c-.93,0-1.86,0-2.79,0a.72.72,0,0,1-.72-.72V15.66a.7.7,0,0,1,.71-.7q1.39,0,2.79,0a.72.72,0,0,1,.72.74.73.73,0,0,1-.72.74h-2Z"/><path class="cls-3" d="M12.39,20.46c.68,0,1.33,0,2,0a.71.71,0,0,1,.75.58.75.75,0,0,1-.68.91c-.95,0-1.89,0-2.83,0a.73.73,0,0,1-.7-.67.57.57,0,0,1,0-.13v-5.4a.75.75,0,1,1,1.49,0c0,1.49,0,3,0,4.48Z"/><path class="cls-3" d="M17.27,18.46v2.71a.79.79,0,0,1-.61.77.75.75,0,0,1-.81-.4,1.12,1.12,0,0,1-.09-.41c0-1.78,0-3.57,0-5.36a.76.76,0,0,1,1-.78.8.8,0,0,1,.51.77Z"/></g></g></svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>

  </div>
</template>

<script>
import header from '~/assets/js/header-bs';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      header()
    })
  },
}
</script>

<style lang="scss" scope>
@use "sass:math";
@import '~/assets/scss/style.scss';

body {
  background-color: lightblue;;
}

.l-header {
  position: relative;
  padding: 0 2rem;
  background-color: #fff;
  display: flex;
  align-items: center;

  @include pc {
    height: 8rem;
  }

  @include tab {
    padding: 0 2rem;
  }

  @include sp {
    padding: 2rem;
  }

  &_brand {
    color: rgb(29, 133, 182);
    font-size: 3.5rem;
    line-height: 1;
    font-weight: bold;
  }

  &_nav {
    align-items: center;
    width: 100%;

    @include pc {
      display: flex !important;
    }
    
    @include sp {
      flex-direction: column;
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      background-color: #fff;
      box-shadow: 0 3px 6px rgba(#000, .1);
    }
  }

  &_list {
    margin: auto;
    display: flex;
    align-items: center;
    gap: 6rem;
    
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      gap: 3rem;
    }

    @include tab { 
      gap: 2rem;
      font-size: 1.4rem;
    }

    @include sp {
      flex-direction: column;
      gap: 4rem;
      padding: 6rem 0;
      font-size: 1.6rem;
    }
  }

  &_iconList {
    display: flex;
    align-items: center;
    gap: 3rem;

    @include tab {
      gap: 2rem;
    }
    
    @include sp {
      gap: 4rem;
      justify-content: center;
      margin-bottom: 6rem;
    }
    
    svg {
      width: 4rem;
    }
  }

  .hamburger {
    @include pc {
      display: none;
    }

    margin-left: auto;
  }
}


// -------------------------------------------------- Hamburgers ------------------------------------------------------
// @charset "UTF-8";
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

// Settings
// ==================================================
$hamburger-background          : unset !default;
$hamburger-width               : 30px !default;
$hamburger-height              : auto !default;
$hamburger-padding-x           : 0px !default;
$hamburger-padding-y           : 0px !default;
$hamburger-layer-width         : 30px !default;
$hamburger-layer-height        : 2px !default;
$hamburger-layer-spacing       : 8px !default;
$hamburger-layer-color         : lightblue !default;
$hamburger-layer-border-radius : 4px !default;
$hamburger-hover-opacity       : 0.7 !default;
$hamburger-active-layer-color  : $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter   : false !default;
$hamburger-hover-filter       : opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

$hamburger-types: (
  3dy,
);


// Hamburger
// ==================================================
.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  width: $hamburger-width;
  height: $hamburger-height;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: $hamburger-background;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    @if $hamburger-hover-use-filter == true {
      filter: $hamburger-hover-filter;
    }
    @else {
      opacity: $hamburger-hover-opacity;
    }
  }

  &:not(.collapsed),
  &.is-active {
    &:hover {
      @if $hamburger-hover-use-filter == true {
        filter: $hamburger-active-hover-filter;
      }
      @else {
        opacity: $hamburger-active-hover-opacity;
      }
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $hamburger-active-layer-color;
    }
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: math.div($hamburger-layer-height, -2);

  &,
  &::before,
  &::after {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

@if index($hamburger-types, 3dy) {
  /*
   * 3DY
   */
  .hamburger--3dy {
    .hamburger-box {
      perspective: $hamburger-layer-width * 2;
    }

    .hamburger-inner {
      transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
                  background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);

      &::before,
      &::after {
        transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    &:not(.collapsed),
    &.is-active {
      .hamburger-inner {
        background-color: $hamburger-background !important;
        transform: rotateX(-180deg);

        &::before {
          transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);
        }

        &::after {
          transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);
        }
      }
    }
  }
}

body[data-bs-padding-right] {
  .hamburger-inner {
    background-color: $hamburger-background !important;
    transform: rotateX(-180deg);

    &::before {
      transform: translate3d(0, $hamburger-layer-height + $hamburger-layer-spacing, 0) rotate(45deg);
    }

    &::after {
      transform: translate3d(0, ($hamburger-layer-height + $hamburger-layer-spacing) * -1, 0) rotate(-45deg);
    }
  }
}
</style>