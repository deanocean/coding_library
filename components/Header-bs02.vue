<template>
  <div>

    <!-- for cdn
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    -->
    
    <!-- for npm
    import 'bootstrap/js/dist/collapse';
    -->

    <header id="header" class="l-header fixed-top">
      <nav class="navbar navbar-expand-xl bg-white shadow-sm">
        <div class="container-fluid ps-xl-4 pe-0">
          <a class="navbar-brand" href="#">
            <span class="l-header_logo">LOGO</span>
          </a>
          <button class="navbar-toggler hamburger-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbar">
            <div class="hamburger hamburger--3dy js-hamburger">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </button>
          <a class="l-header_contact-sp" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="19" viewBox="0 0 29 19"><g fill="#fff"><path d="M1 0h27a1 1 0 011 1v17a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm26 2H2v15h25z"/><path d="M14.504 12.971a1 1 0 01-.631-.224L.373 1.776A1 1 0 011.634.224l12.859 10.452L27.025.232a1 1 0 111.28 1.536L15.14 12.739a1 1 0 01-.636.232z"/></g></svg>
          </a>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ホーム</a>
              </li>
              <li class="nav-item">
                <a class="nav-link <%= page_name === 'company' && 'is-active' %>" href="#">会社案内</a>
                <div class="l-header_navHover py-5 text-primary text-center fw-bold">
                  <h3 class="fs-1 mb-5">会社案内</h3>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">first</p>
                        </a>
                      </div>
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">second</p>
                        </a>
                      </div>
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">third</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link <%= page_name === 'business' && 'is-active' %>" href="/html/business/">事業内容</a>
                <div class="l-header_navHover py-5 text-primary text-center fw-bold">
                  <h3 class="fs-1 mb-5">事業内容</h3>
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">first</p>
                        </a>
                      </div>
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">second</p>
                        </a>
                      </div>
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">third</p>
                        </a>
                      </div>
                      <div class="col-3">
                        <a href="#">
                          <img src="https://picsum.photos/300/200">
                          <p class="mt-4">fourth</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link <%= page_name === 'performance' && 'is-active' %>" href="/html/performance/">施工実績</a>
              </li>
              <li class="nav-item">
                <a class="nav-link <%= page_name === 'voice' && 'is-active' %>" href="/html/voice/">お客様の声</a>
              </li>
            </ul>
            <div class="">
              <a href="#" class="l-header_contact">お問い合わせ</a>
            </div>
          </div>
          <ul class="l-header_nav-tab offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <li class="mb-5">
              <a href="#" class="l-header_nav-tab_c">会社案内</a>
            </li>
            <li class="mb-5">
              <a href="#" class="l-header_nav-tab_c">事業内容</a>
            </li>
            <li class="mb-5">
              <a href="#" class="l-header_nav-tab_c">施工実績</a>
            </li>
            <li class="mb-5">
              <a href="#" class="l-header_nav-tab_c">お客様の声</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
// import header from '~/assets/js/header-bs';

// export default {
//   mounted() {
//     window.addEventListener('load',()=>{
//       header()
//     })
//   },
// }
</script>

<style lang="scss" scope>
@use "sass:math";
@import '~/assets/scss/style.scss';

body {
  background-color: lightblue;;
}

.l-header {
  $this: &;

  .navbar {
    padding: 0;
  }

  .navbar-nav {
    margin-right: auto;
    margin-bottom: 0;

    @include sp {
      margin-bottom: .5em;
    }
  }
  
  .navbar-toggler {
    padding: 0;
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-collapse {
    align-items: stretch;
  }

  .navbar-brand {
    margin-right: 5%;
  }

  .nav-item {
    &:hover {
      #{$this}_navHover {
        opacity: 1;
        z-index: 100;
        height: auto;
        top: 8rem;
      }
    }
  }

  .nav-link {
    width: 112px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    padding: 0;
    margin: 0;
    border-bottom: 5px solid transparent;
    color: #000;
    font-weight: bold;
    font-size: 1.6rem;
    transition: all $anime;
    
    &:hover {
      border-color: #1d80d4;
      background-color: #e4f0fa;
    }

    &.is-active {
      border-color: #1d80d4;
      background-color: #e4f0fa;
    }
  }

  &_logo {
    font-size: 3rem;
    color: red;
    font-weight: bold;
  }

  &_nav-tab {
    display: none;

    @media screen and (max-width: 1200px) {
      display: flex;
      width: 80%;
      top: 60px;
      background-color: rgba(255, 255, 255, 0.85);
      padding: 3rem 4% 3rem 8%;
      overflow-y: auto;
    }

    &_c {
      border: 2px solid #1d80d4;
      color: #1d80d4;
      font-weight: bold;
      background-color: #fff;
      text-align: center;
      height: 6rem;
      line-height: 6rem;
    }
  }

  &_contact-sp {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #ff8240;
    border-color: #ff8240;
    height: 60px;
    width: 60px;

    @media screen and (min-width: 1200px) {
      display: none;
    }
  }

  &_contact {
    display: inline-flex;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 2rem;
    background-color: #ff8240;
    color: #fff;
  }

  &_navHover {
    opacity: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -1;
    transition: opacity $anime;

    img {
      width: 100%;
    }

    a {
      opacity: 1;
      transition: opacity $anime;
      
      &:hover {
        opacity: .8;
      }
    }
  }
}





/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

// Settings
// ==================================================
$hamburger-background          : #1d80d4 !default;
$hamburger-width               : 60px !default;
$hamburger-height              : 60px !default;
$hamburger-padding-x           : 15px !default;
$hamburger-padding-y           : 18px !default;
$hamburger-layer-width         : 24px !default;
$hamburger-layer-height        : 2px !default;
$hamburger-layer-spacing       : 6px !default;
$hamburger-layer-color         : #fff !default;
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
  // padding: $hamburger-padding-y $hamburger-padding-x;
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