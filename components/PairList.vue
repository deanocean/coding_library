<template>
  <div>

    <ul class="c-pairList">
      <li class="c-pairList_item">
        <p class="c-pairList_ttl">Location</p>
        <p class="c-pairList_txt">The Lobby</p>
      </li>
      <li class="c-pairList_item">
        <p class="c-pairList_ttl">Date</p>
        <p class="c-pairList_txt">4/16~5/31</p>
      </li>
      <li class="c-pairList_item">
        <p class="c-pairList_ttl">Content</p>
        <div class="c-pairList_cont">
          <p class="c-pairList_txt">Lorem ipsum dolor sit amet.</p>
          <p class="c-pairList_txt--s">Amet consectetur adipisicing elit.<br> Numquam laudantium dolore consectetur, tempora esse pariatur placeat aspernatur <br>quas quibusdam quam officiis magni ea non natus aliquid alias, ad eos? Inventore?</p>
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
@import "~/assets/scss/style";

.c-pairList {
  $this: &;
  margin-top: -2rem;

  @include sp {
    width: 100%;
  }

  &_item {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
    
    @include sp {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &_ttl {
    width: 18rem;
    line-height: 2;
    flex-shrink: 0;
    margin-right: 2rem;
    background-color: skyBlue;
    text-align: center;

    @include sp {
      margin: 0 0 .5rem 0;
    }
  }

  &_ttl + * {
    margin-top: 0.25em;
  }

  &_txt {

    &--s {
      font-size: smaller;
    }
  }

  &_txt + #{$this}_txt--s {
    margin-top: 1.5em;
  }
}

</style>