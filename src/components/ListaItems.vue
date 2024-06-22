<script setup>
import ItemIndividual from './ItemIndividual.vue';

const props = defineProps({
    listado: Array
})

const emit = defineEmits(["eliminar-item", "editar-item"])
const eliminar = (index) => {
  
    emit("eliminar-item", index);
}

const editar = (editItem, index) => {
   emit("editar-item", editItem, index);
}
</script>

<template>
   <section class="items">
    <ItemIndividual v-for="(item, index) of props.listado" :key="index" :item="item" :index="index"
    @eliminarItem="eliminar" @editarItem="editar"/>

   </section>
</template>



<style scoped>
.items {
    width: 400px;
    max-width: 100%;
    padding: 0;
    margin: 0;
}


</style>