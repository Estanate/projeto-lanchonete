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
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
}
.header{
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
  .logo-header{
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .name-header{
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
