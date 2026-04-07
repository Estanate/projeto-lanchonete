<script setup>
import { items } from '../assets/Assets.js';
</script>

<template>
    <div class="cardapio">
        <ul class="items-list">
                <p class="cards"v-for="item in items" :key="item.id" :class="{indisponivel: !item.available}">
                    <span class="category">{{item.category}}</span>
                    <span class="name">{{ item.name }}</span>
                    <span class="price">R$: {{ item.price }}</span>
                </p>
        </ul>
    </div>
</template>

<style scoped>
.indisponivel{
    text-decoration: line-through;
    color: gray;
}

.cards{
    display: flex;
    flex-direction: column;
    background-color: beige;
    border-radius: 5px;
    padding: 30px;
    margin-bottom:10px;
}

</style>