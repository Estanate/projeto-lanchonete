<script setup>
import { items } from '@/Data/Data';
import { reactive } from 'vue';

//cria o objeto do formulario, e dps coloca o v-model pra preencher as info
const form = reactive({
    category: 'Lanche',
    name: '',
    price: 0,
    available: false
});

//cria a função para adcionar os itens, nao realizando ela se nao tiver nd no nome, no preço ou o preço for menor ou igual a 0
function addItem() {

    //manda pra array o obj do novo item
    items.push({
        id:Date.now(),
        category:form.category,
        name: form.name,
        price: Number(form.price).toFixed(2),
        available:form.available
    })

    //reseta os valores do form
    form.category = 'Lanche';
    form.name = '';
    form.price = '';
    form. available = false;
    console.log("deu certo")
}

</script>

<template>
<div class="cadastro">
  <h1>Cadastro</h1>

  <!-- Crio o formulario, chamando a função de add item quando o botao submit for clickado, nao dando reload na pagina -->
  <form @submit.prevent="addItem">
    <div class="name-item">
        <label for="">Nome: </label>
        <input type="text" v-model="form.name" required=""> 
    </div>
    <div class="price-item">
        <label for="">Preço: </label>
        <input type="number" v-model="form.price" step="0.01" min="0" required=""> 
    </div>
        <div class="available-item">
        <label for="">Disponível: </label>
        <input type="checkbox" v-model="form.available"> 
    </div>
    <div class="category-item">
        <label for="">Categoria: </label>
        <select v-model="form.category" required="">
            <option value="Lanche">Lanche</option>
            <option value="Bebida">Bebida</option>
            <option value="Sobremesa">Sobremesa</option>
        </select> 
    </div>
    <div class="submit-item">
        <button type="submit">Adcionar ao Menu</button>
    </div>
  </form>
</div>
</template>

<style scoped>

</style>