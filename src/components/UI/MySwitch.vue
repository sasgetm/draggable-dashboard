<template>
  <div class="switch">
    <span class="switch__label">{{ label }}</span>
    <input class="switch__input"
      :checked="isDraggable"
      @change="handleCheckboxChange"
      id="checkbox"
      type="checkbox"
    >
    <label class="switch__toggle" for="checkbox"></label>
  </div>
</template>

<script>
export default {
  name: 'my-switch',
  props: {
    label: {
      type: String,
    },
    isDraggable: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleCheckboxChange(event) {
      const isChecked = event.target.checked;
      this.$emit('update:isDraggable', isChecked);
    },
  },
}
</script>

<style scoped>
.switch {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: end;
}
.switch__label {
  font-size: 12px;
  text-align: right;
}

.switch__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.switch__input+label {
  display: block;
  width: 50px;
  height: 30px;
  user-select: none;
  position: relative;
  background: #282A36;
  transition: .2s;
  border-radius: 15px;
  flex-shrink: 0;
}

.switch__input+label::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  display: inline-block;
  width: 26px;
  height: 26px;
  background: #fff;
  border-radius: 13px;
  cursor: pointer;
  transition: .2s;
}

.switch__input:checked+label {
  background: #720f2b;
}

.switch__input:checked+label::before {
  left: 22px;
}
</style>