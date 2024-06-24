<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  outline: none;
  background: #720f2b;
  color: #fff;
  border-radius: 8px;
  border: 0;
  padding: 12px;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
}
.btn:hover {
  background: #921b3d;
}
.btn[disabled] {
  background: #23242E;
  color: #ccc;
  cursor: initial;
}
</style>