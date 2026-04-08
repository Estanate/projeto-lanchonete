<script setup>
import { items } from '../Data/Data.js';
import { ref, computed } from 'vue';

const localItems = ref([...items]);

const filter = ref('Todos');
const filteredItems = computed(() =>{
    if (filter.value === 'Todos') {
        return localItems.value;
    }
    else if (filter.value === 'Lanches') {
        return localItems.value.filter(item => item.category === 'Lanche');
    }
    else if (filter.value === 'Bebidas') {
        return localItems.value.filter(item => item.category === 'Bebida');
    }
    else if (filter.value === 'Sobremesas') {
        return localItems.value.filter(item => item.category === 'Sobremesa');
    }
})

const deleteItem = (id) => {
    if(!confirm('Quer Excluir mesmo dog?')) return;

    localItems.value = localItems.value.filter(item => item.id !== id)
}

const totalItems = computed(() => localItems.value.length);
const availableItems = computed(() => {
    return localItems.value.filter(item => item.available).length;
});

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

    <!-- Resumos --
     <div class="resumos">
        <p>Total de Itens: {{ totalItems }}</p>
        <p>Total disponivel: {{ availableItems }}</p>
     </div>

    <!-- lista de items -->
    <ul class="items-list">
            <p class="items" v-for="item in filteredItems" :key="item.id">
                <div class="card"
                :class="{indisponivel: !item.available}">
                    <span class="category">{{item.category}}</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="price">R$: {{ item.price }}</span>
                    <button class="delete" @click="deleteItem(item.id)">Excluir</button>
                </div>
            </p>
    </ul>

</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    background-color: rgb(9, 157, 103);
    color: white;
    border-radius: 5px;
    padding: 30px;
    margin-bottom:10px;
}

.indisponivel{
    color: black;
    background-color: rgb(215, 25, 18);
    span{
    text-decoration: line-through;
    }
}

</style>