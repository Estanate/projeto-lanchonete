import { reactive } from 'vue';
export const items = reactive([
{id: 1, category:'Lanche', name: 'X-Burgue', price: 32.99,  available:true},
{id: 2, category:'Bebida', name: 'Milkshake', price: 16.99, available:false},
{id: 3, category:'Sobremesa', name: 'Pudim', price: 9.99, available:true}
])