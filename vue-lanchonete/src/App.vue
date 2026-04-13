<script setup>
import ComponentePrincipal from './components/ComponentePrincipal.vue';
</script>

<template>
  <header class="header">
    <img class="logo-header" src="../public/JOCKEY’S.png" alt="Logo">
    <h1 class="name-header">JOCKEY’S</h1>
  </header>
  <ComponentePrincipal />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #000, #222);
  color: #fff;
  padding: 15px;
  gap: 15px;
  border-bottom: 3px solid #ffcc00;
}

.logo-header {
  width: 60px;
  height: 60px;
}

.name-header {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffcc00;
}
</style>
