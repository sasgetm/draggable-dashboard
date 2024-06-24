<template>
  <textarea class="textarea" v-model="textValue" @input="handleInput"></textarea>
</template>

<script>
export default {
  name: 'my-textarea',
  props: {
    value: [String],
  },
  data() {
    return {
      textValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.textValue = newValue;
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
      // this.$emit('update:other', event.target.value)
    },
    handleInput() {
      this.$emit('input', this.textValue);
    },
  }
}
</script>

<style scoped>
.textarea {
  padding: 8px;
  border-radius: 4px;
  background: #23242E;
  border: none;
}
</style>