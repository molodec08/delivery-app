<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
  .btn {
    width: 100%;
    height: 65px;
    margin-top: 50px;
    /*padding: 10px 15px;*/
    background: #1E6FB9;
    border-radius: 6px;
    border: none;
    color: #fff;

    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
  }
</style>
