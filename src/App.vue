<script setup>
import { ref, watch, onMounted } from "vue";
import EncabezadoComponente from "./components/EncabezadoComponente.vue"
import PieComponente from "./components/PieComponente.vue"
import ListaItems from "./components/ListaItems.vue";
import NuevoItem from "./components/NuevoItem.vue";

let listado = ref([
    {
        producto: "Pan",
        prioridad: "baja"
    },
    {
        producto: "Leche",
        prioridad: "media"
    },
    {
        producto: "Manzanas",
        prioridad: "alta"
    }
])

watch(listado, () => {
    localStorage.setItem("listado", JSON.stringify(listado.value));
},
{deep: true})
onMounted(() => {
    const listadoStorage = localStorage.getItem("listado");
    listado.value =  JSON.parse(listadoStorage) ?? [];
})




const agregarItem = (nuevoProducto) => {
    listado.value.push(nuevoProducto);
}
const eliminar = (index) => {
    listado.value.splice(index, 1);
}
const editar = (editItem, index) => {
   listado.value[index] = editItem
}


</script>

<template>
    <EncabezadoComponente />

    <ListaItems :listado="listado" @eliminar-item="eliminar" @editar-item="editar"/>

    <NuevoItem @agregar-item="agregarItem" />

    <PieComponente />
</template>

<style scoped></style>
