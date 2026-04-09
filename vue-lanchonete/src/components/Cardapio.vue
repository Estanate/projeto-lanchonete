<script setup>
import { items } from '../Data/Data.js';
import { ref, computed} from 'vue';

const filter = ref('Todos');
const filteredItems = computed(() =>{
    if (filter.value === 'Todos') {
        return items;
    }
    else if (filter.value === 'Lanches') {
        return items.filter(item => item.category === 'Lanche');
    }
    else if (filter.value === 'Bebidas') {
        return items.filter(item => item.category === 'Bebida');
    }
    else if (filter.value === 'Sobremesas') {
        return items.filter(item => item.category === 'Sobremesa');
    }
})

const deleteItem = (id) => {
    if(!confirm('Quer Excluir mesmo dog?')) return;

    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
    }
}

const totalItems = computed(() => items.length);
const availableItems = computed(() => {
    return items.filter(item => item.available).length;
});

const overallPrice = computed(() => {
    return filteredItems.value.filter(item => item.available).reduce((acc, item) => {
        return acc + item.price;
    }, 0);
});

const avaragePrice = computed(() => {
    if(filteredItems.value.filter(item => item.available).length === 0) return "0.00";
    return (overallPrice.value/filteredItems.value.filter(item => item.available).length).toFixed(2);
})

</script>

<template>

    <!-- Filtros -->
    <div class="filters">
        <form>
            <label class="filter-all">
                <input type="radio" v-model="filter" value="Todos">
                Todos
            </label>
            <label class="filter-lanches">
                <input type="radio" v-model="filter" value="Lanches">
                Lanches
            </label>
            <label class="filter-bebidas">
                <input type="radio" v-model="filter" value="Bebidas">
                Bebidas
            </label>
            <label class="filter-sobremesas">
                <input type="radio" v-model="filter" value="Sobremesas">
                Sobremesas
            </label>
        </form>
    </div>

    <!-- Resumos -->
     <div class="resumos">
        <p>Total de Itens: {{ totalItems }}</p>
        <p>Total disponivel: {{ availableItems }}</p>
        <p>Media de preço: {{ avaragePrice }}</p>
     </div>

    <!-- lista de items -->
    <ul class="items-list">
            <div class="items" :class=" item.available ? 'disponivel' : 'indisponivel'" v-for="item in filteredItems" :key="item.id">
                    <span class="category">{{item.category}}</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="price">R$: {{ item.price.toFixed(2) }}</span>
                    <button class="delete" @click="deleteItem(item.id)">Excluir</button>
                </div>
    </ul>

</template>

<style scoped>
.items-list{
    display: flex;
    gap: 10px;
}

.items{
    display: flex;
    flex-direction: column;
    color: white;
    border-radius: 5px;
    padding: 30px;
    margin-bottom:10px;
}

.disponivel{
    order: 0;
    background-color: rgb(9, 157, 103);
}

.indisponivel{
    order: 1;
    color: black;
    background-color: rgb(215, 25, 18);
    span{
    text-decoration: line-through;
    }
}

</style>