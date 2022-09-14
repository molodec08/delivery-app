<template>
  <input :value="modelValue" @input="updateInput" class="input">
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style scoped>
  .input {
    width: 100%;
    padding: 17px 11px;
    margin-top: 12px;
    background: #FAFAFA;
    border: 2px solid #1E6FB9;
    border-radius: 6px;

    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
  }

</style>
