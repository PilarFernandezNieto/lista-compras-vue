<script setup>
import { ref } from 'vue';

const emit = defineEmits(["agregar-item"])

const item = ref("");
const priority = ref("");

const handleClick = () => {
    const nuevoProducto = {
        producto: item.value,
        prioridad: priority.value
    }
    emit("agregar-item", nuevoProducto);
    item.value = "";
    priority.value = "";
}

</script>

<template>
    <section>
        <h4>Nuevo Item</h4>
        <div class="formulario">
            <input type="text" placeholder="Agua" v-model="item" autofocus>
            <select name="prioridad" id="prioridad" v-model="priority">
                <option value="" disabled>Prioridad</option>
                <option value="baja" >🟢 - baja</option>
                <option value="media">🟡 - media</option>
                <option value="alta">🔴 - alta</option>
            </select>
            <button v-show="item && priority" @click="handleClick">
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>
    </section>
</template>



<style scoped>
.formulario {
    display: flex;
    justify-content: space-between;
}
input, select {
    font-family: "Gloria Hallelujah", cursive;;
    border-radius: 5px;
    border: 1px solid white;
    padding: 5px 10px;
    background-color: black;
    color: white;

}
button {
    padding: 0 10px;
    border: 1px solid white;
}

</style>