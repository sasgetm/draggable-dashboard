<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
 name: 'my-input',
 props: {
  modelValue: [String, Number],
  other: [String],
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
  padding: 8px;
  border-radius: 4px;
  background: #23242E;
  border: none;
}
</style>