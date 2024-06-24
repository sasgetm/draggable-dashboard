<template>
  <div class="navbar">
    <div class="container navbar__container">
      <router-link to="/"><div class="navbar__logo">Home</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-navbar',
}
</script>

<style scoped>
.navbar {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}
.navbar a {
  text-decoration: none;
}
.navbar a:hover {
  text-decoration: underline;
}
.navbar__logo {
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
}
</style>