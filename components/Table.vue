<template>
  <div>

    <table class="c-table">
      <tbody class="c-table_body">
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
              
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
      </tbody>
    </table>

    <br>
    <br>

    <table class="c-table--2cols">
      <tbody class="c-table_body">
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
              
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
                
        <tr class="c-table_row">
          <th class="c-table_th" scope="row">Title</th>
          <td class="c-table_td">Content</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-table {
  width: 100%;
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

  &_th {
    white-space: nowrap;
    width: 1%;
    min-width: 10rem;
  }
  
  &_td {
    text-align: left;
    width: 49%;
  }


  &--2cols {
    @extend .c-table;

    .c-table {
      &_body {
        @include pc {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
        }
      }

      &_row {
        @include pc {
          width: 50%;
          display: flex;
        }

        @include sp {
          display: flex;
          flex-wrap: wrap;
        }

        &:nth-child(4n-2) {
          @include pc {
            background-color: #fff;
          }
        }

        &:nth-child(4n-3) {
          @include pc {
            background-color: #fff;
          }
        }

        &:nth-child(4n) {
          @include pc {
            background-color: skyBlue;
          }
        }

        &:nth-child(4n-1) {
          @include pc {
            background-color: skyBlue;
          }
        }
      }

      &_th {
        @include sp {
          width: auto;
          flex-shrink: 1;
        }
      }

      &_td {
        flex-grow: 1;
        @include sp {
          width: calc(100% - 10rem);
          flex-grow: 1;
        }
      }
    }
  }
}
</style>