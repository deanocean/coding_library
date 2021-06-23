<template>
  <div>

    <div>
      <div data-slidenum="3" class="js-slideDown_wrap">
        <table class="c-table">
          <tbody class="c-table_body js-slideDown_cont">
            <tr class="c-table_row">
              <th class="c-table_th" scope="row">東京都</th>
              <td class="c-table_td">学校</td>
            </tr>
                  
            <tr class="c-table_row">
              <th class="c-table_th" scope="row">京都府</th>
              <td class="c-table_td">高等学校</td>
            </tr>
                    
            <tr class="c-table_row">
              <th class="c-table_th" scope="row">愛媛県</th>
              <td class="c-table_td">高等学校</td>
            </tr>
                    
            <tr class="c-table_row">
              <th class="c-table_th" scope="row">千葉県</th>
              <td class="c-table_td">進研</td>
            </tr>

            <tr class="c-table_row">
              <th class="c-table_th" scope="row">東京都</th>
              <td class="c-table_td">学校</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="js-slideDownBtn c-toggleBtn"></button>
    </div>

    <div>
      <div data-slidenum="2" class="js-slideDown_wrap">
        <ul class="js-slideDown_cont">
          <li class="c-comment">
            コンテンツ<br>
            コンテンツ<br>
            コンテンツ<br>
          </li>
          <li class="c-comment">
            コンテンツ<br>
            コンテンツ<br>
            コンテンツ<br>
          </li>
          <li class="c-comment">
            コンテンツ<br>
            コンテンツ<br>
            コンテンツ<br>
          </li>
          <li class="c-comment">
            コンテンツ<br>
            コンテンツ<br>
            コンテンツ<br>
          </li>
        </ul>
      </div>
      <button class="js-slideDownBtn c-toggleBtn"></button>
    </div>

  </div>
</template>

<script>
import SlideDown from '~/assets/js/SlideDown';

export default {
  mounted() {
    window.addEventListener('load',()=>{
      SlideDown()
    })
  },
}
</script>

<style lang="scss" scope>
@import '~/assets/scss/style.scss';

.js-slideDown {
  &_wrap {
    transition:height 1s ease-out;
    height: auto;
    overflow:hidden;
  }
}


.c-toggleBtn {
  display: block;
  width: 35px;
  height: 35px;
  background-color: skyBlue;
  border: none;
  cursor: pointer;
  position: relative;
  @include hover;

  &::before,
  &::after {
    content: "";
    @include pos-center;
    background-color: #fff;
  }

  &::before {
    width: 2px;
    height: 15px;
  }

  &::after {
    width: 15px;
    height: 2px;
  }

  &.is-active {
    &::before {
      display: none;
    }
  }
}

// example styling
.c-table {
  background-color: #fff;

  &_row {
    &:nth-child(2n) {
      background-color: skyBlue;
    }
  }

  &_th,
  &_td {
    border: 1px solid #000;
    padding: 1rem .5rem;
  }
}

.c-comment {
  border: 2px solid #000;
  background-color: skyBlue;
  padding: 2rem;

  & + .c-comment {
    margin-top: 4rem;
  }
}
</style>