<template>
  <div>
    <!-- for cdn
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
    -->
    
    <!-- for npm
    import 'bootstrap/js/dist/collapse';
    -->

    <ul class="c-accordion" id="accordion">
      <li class="c-accordion_item">
        <h3 class="c-accordion_header" id="headingOne">
          <button class="c-accordion_btn collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <span class="c-accordion_btn_q">
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.22 33.55">
                <g data-name="レイヤー 2">
                  <path
                    d="M28.79 33.55l-3.65-3.43a15.49 15.49 0 01-9.27 3C6.52 33.14 0 25.68 0 16.66v-.09C0 7.55 6.61 0 16 0s15.83 7.46 15.83 16.48v.09a17.2 17.2 0 01-3.08 9.84l3.47 3.12zm-7.57-7.09L16 21.74l3.44-4.12 5.35 5.13a12.61 12.61 0 001.47-6.09v-.09c0-6.23-4.3-11.4-10.35-11.4s-10.3 5.08-10.3 11.31v.09c0 6.23 4.31 11.35 10.39 11.35a10 10 0 005.22-1.46z"
                    fill="#fff" data-name="レイヤー 1" />
                </g>
              </svg>
            </span>
            <span class="c-accordion_btn_txt">ダミーです。質問の内容が入ります。ダミーです。質問の内容が入ります。</span>
            <span class="c-accordion_btn_cross"></span>
          </button>
        </h3>
        <div id="collapseOne" class="c-accordion_collapse collapse" aria-labelledby="headingOne">
          <p class="c-accordion_body">
            ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。
          </p>
        </div>
      </li>
      <li class="c-accordion_item">
        <h3 class="c-accordion_header" id="headingTwo">
          <button class="c-accordion_btn collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <span class="c-accordion_btn_q">
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.22 33.55">
                <g data-name="レイヤー 2">
                  <path
                    d="M28.79 33.55l-3.65-3.43a15.49 15.49 0 01-9.27 3C6.52 33.14 0 25.68 0 16.66v-.09C0 7.55 6.61 0 16 0s15.83 7.46 15.83 16.48v.09a17.2 17.2 0 01-3.08 9.84l3.47 3.12zm-7.57-7.09L16 21.74l3.44-4.12 5.35 5.13a12.61 12.61 0 001.47-6.09v-.09c0-6.23-4.3-11.4-10.35-11.4s-10.3 5.08-10.3 11.31v.09c0 6.23 4.31 11.35 10.39 11.35a10 10 0 005.22-1.46z"
                    fill="#fff" data-name="レイヤー 1" />
                </g>
              </svg>
            </span>
            <span class="c-accordion_btn_txt">ダミーです。質問の内容が入ります。ダミーです。質問の内容が入ります。</span>
            <span class="c-accordion_btn_cross"></span>
          </button>
        </h3>
        <div id="collapseTwo" class="c-accordion_collapse collapse" aria-labelledby="headingTwo">
          <p class="c-accordion_body">
            ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。
          </p>
        </div>
      </li>
      <li class="c-accordion_item">
        <h3 class="c-accordion_header" id="headingThree">
          <button class="c-accordion_btn collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span class="c-accordion_btn_q">
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.22 33.55">
                <g data-name="レイヤー 2">
                  <path
                    d="M28.79 33.55l-3.65-3.43a15.49 15.49 0 01-9.27 3C6.52 33.14 0 25.68 0 16.66v-.09C0 7.55 6.61 0 16 0s15.83 7.46 15.83 16.48v.09a17.2 17.2 0 01-3.08 9.84l3.47 3.12zm-7.57-7.09L16 21.74l3.44-4.12 5.35 5.13a12.61 12.61 0 001.47-6.09v-.09c0-6.23-4.3-11.4-10.35-11.4s-10.3 5.08-10.3 11.31v.09c0 6.23 4.31 11.35 10.39 11.35a10 10 0 005.22-1.46z"
                    fill="#fff" data-name="レイヤー 1" />
                </g>
              </svg>
            </span>
            <span class="c-accordion_btn_txt">ダミーです。質問の内容が入ります。ダミーです。質問の内容が入ります。</span>
            <span class="c-accordion_btn_cross"></span>
          </button>
        </h3>
        <div id="collapseThree" class="c-accordion_collapse collapse" aria-labelledby="headingThree">
          <p class="c-accordion_body">
            ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。ダミーです。質問の回答が入ります。ダミーです。
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/style.scss';

// variables
$accordion-bdrs: 10px;

.c-accordion {
  &_item {
    background-color: rgba(#0095ae,.1);
    border-radius: $accordion-bdrs;
    overflow: hidden;

    & + * {
      margin-top: 20px;
    }
  }

  &_btn {
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 6rem;
    padding: 0 2rem 0 0;
    border: none;
    background-color: unset;

    &:focus {
      outline: 0;
    }

    &_q {
      flex-shrink: 0;
      background-color: #0095ae;
      border-radius: $accordion-bdrs 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      font-size: 3rem;
    }

    &_txt {
      padding: 0 2rem 0 3rem;
      font-size: 1em;
      text-align: left;
      line-height: 1.5;
      align-self: center;

      @include sp {
        padding: 1rem 1.5rem;
      }
    }

    &:not(.collapsed) {
      .c-accordion_btn_cross {
        &::before {
          opacity: 0;
        }
      }
    }

    &_cross {
      position: relative;
      margin-left: auto;
      align-self: center;
      flex-shrink: 0;
      display: block;
      width: 35px;
      height: 35px;
      border: none;
      transition: all $anime;

      &::before,
      &::after {
        content: "";
        @include center;
        background-color: #0095ae;
        transition: all $anime;
      }

      &::before {
        width: 2px;
        height: 100%;
      }

      &::after {
        width: 100%;
        height: 2px;
      }
    }
  }

  &_body {
    border-top: 1px solid #0095ae;
    padding: 3rem 6rem;
    font-size: 1.8rem;
  }
}

</style>