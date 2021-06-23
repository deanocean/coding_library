<template>
  <div>

    <button class="c-btn c-btn--main c-btn--arrow">Button</button>
    <button class="c-btn c-btn--arrow02">Button</button>
    <button class="c-btn c-btn--arrow03">Button</button>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
@import "~/assets/scss/style";

.c-btn {
  position: relative;
  display: inline-block;
  border: 2px solid $black;
  font-weight: bold;
  padding: 1.5em 3em;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: all $anime;

  &--main {
    color: black;
    background-color: LightCoral;
    border-color: LightCoral;
    
    &:hover {
      @include pc {
        color: LightCoral;
        background-color: #fff;
      }
    }
  }

  &--arrow {
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-right: 3px solid $black;
      border-bottom: 3px solid $black;
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%) rotate(-45deg);
      transition: all $anime;

      @include sp {
        right: 2rem;
      }
    }

    &:hover {
      @include pc {
        &::after {
          border-color: LightCoral;
        }
      }
    }
  }

  &--arrow02 {
  	overflow: hidden;

    &::after {
      content: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="31.6" height="6.21"><g clip-path="url(%23clip-path)"><path d="M22.2.4L30 5.7H0" fill="none" stroke="%23000" stroke-miterlimit="10"/></g></svg>');
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-75%);
    }

    &:hover {
      &::after {
			  animation: arrow02 .4s ease-in-out;
		  }
    }
  }

  &--arrow03 {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      margin-left: 1rem;
      vertical-align: middle;
      width: 0;
      height: 0;
      border-left: 1.4rem solid #000;
      border-top: .8rem solid rgba(0,0,0,0);
      border-bottom: .8rem solid rgba(0,0,0,0);
    }
  }
}

@keyframes arrow02 {
    0% { transform: translateX(0px) translateY(-75%); opacity: 1;}
   45% { transform: translateX(50px) translateY(-75%);}
   50% { transform: translateX(-50px) translateY(-75%); opacity: 0; }
  100% { transform: translateX(0px) translateY(-75%); opacity: 1;}
}
</style>