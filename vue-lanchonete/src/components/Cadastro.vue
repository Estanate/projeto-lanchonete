<script setup>

</script>

<template>
<div class="cadastro">
  <h1>Cadastro</h1>
  <form action="">
    <div class="name-item">
        <label for="">Nome: </label>
        <input type="text" placeholder="X-Burguer"> 
    </div>
    <div class="price-item">
        <label for="">Preço: </label>
        <input type="number" placeholder="99.99"> 
    </div>
    <div class="category-item">
        <label for="">Categoria: </label>
        <select name="category" id="category">
            <option value="lanche">Lanche</option>
            <option value="bebida">Bebida</option>
            <option value="sobremesa">Sobremesa</option>
        </select> 
    </div>
  </form>
</div>
</template>

<style scoped>

</style>