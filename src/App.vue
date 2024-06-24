<template>
  <div class="app">
    <my-navbar></my-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 14px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  margin: 0;
  padding: 0;
}
.container {
  width: 1024px;
  max-width: 100%;
  padding: 0 24px;
  margin: 0 auto;
}
.app {
  min-height: 100vh;
  background: #17181F;
  color: #fff;
  padding: 0 0 100px;
}
h1, h2, h3 {
  font-family: 'Times New Roman', Times, serif;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 20px;
  font-weight: 700;
}
</style>