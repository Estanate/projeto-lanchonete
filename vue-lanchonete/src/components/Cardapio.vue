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
.filters {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.filters form {
  display: flex;
  gap: 15px;
  background: #222;
  padding: 10px 20px;
  border-radius: 10px;
}

.filters label {
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.filters input {
  margin-right: 5px;
}

.filters label:hover {
  color: #ffcc00;
}

/* RESUMO */
.resumos {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

.resumos p {
  background: #222;
  padding: 10px 15px;
  border-radius: 8px;
  border-left: 4px solid #ffcc00;
}

/* LISTA */
.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* CARD */
.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  padding: 20px;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.items:hover {
  transform: scale(1.05);
}

.disponivel {
    order: 0;
  background: linear-gradient(135deg, #00c853, #009624);
  color: white;
}

.indisponivel {
    order: 1;
  background: linear-gradient(135deg, #d50000, #9b0000);
  color: #ddd;
}

.indisponivel span {
  text-decoration: line-through;
}

/* TEXTO */
.category {
  font-size: 12px;
  opacity: 0.8;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.price {
  font-size: 16px;
  color: #ffeb3b;
}

/* BOTÃO */
.delete {
  margin-top: auto;
  padding: 8px;
  border-radius: 6px;
  background: black;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.delete:hover {
  background: #ff5252;
}


/* Formulario */

</style>