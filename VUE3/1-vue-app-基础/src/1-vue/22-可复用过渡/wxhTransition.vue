<template>
    <div>
      <Transition :name="myname">
        <slot></slot>
      </Transition>
    </div>
  </template>
  
  <script>
  export default {
    props:["myname"],
    data() {
        return {
            isshow:true
        }
    }
  }
  </script>
  
  <style>
  .ltr-enter-active{
    animation: wxhanimate 1s;
  }
  .ltr-leave-active{
    animation: wxhanimate 1s reverse;
  }
  @keyframes wxhanimate{
    0%{
      transform: translateX(100px);
      opacity: 0;
    }
    100%{
      transform: translateX(0);
      opacity: 1;
    }
  }
  .rtl-enter-active{
    animation: wxhanimate2 1s;
  }
  .rtl-leave-active{
    animation: wxhanimate2 1s reverse;
  }
  @keyframes wxhanimate2{
    0%{
      transform: translateX(-100px);
      opacity: 0;
    }
    100%{
      transform: translateX(0);
      opacity: 1;
    }
  }
  </style>