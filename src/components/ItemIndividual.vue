<script setup>
import { ref } from 'vue';
const props = defineProps({
   item: Object,
   index: Number
})

const isEditing = ref(false);
const editItem = ref({
   producto: props.item.producto,
   prioridad: props.item.prioridad
})

const emit = defineEmits(["eliminar-item", "editar-item"]);

const prioridades = {
    alta: '🔴',
    media: '🟡',
    baja: '🟢'
}

const handleDeleteClick = () => {
   emit("eliminar-item", props.index)
}
const handleEditClick = () => {
  isEditing.value = !isEditing.value;
}
const handleSaveClick = () => {
   emit("editar-item", editItem.value, props.index);
   isEditing.value = !isEditing.value;
}





</script>

<template>

   <article>

      <div class="nombre">
         <p v-if="!isEditing">{{ props.index +1 }} - {{ props.item.producto }}</p>
         <div v-else>
            <input type="text" v-model="editItem.producto">
         </div>
      </div>
      <div class="resto">
         <p v-if="!isEditing">{{ prioridades[props.item.prioridad] }}</p>
         <div v-else>
            <select name="priority" v-model="editItem.prioridad"> 
                <option value="" disabled>Prioridad</option>
                <option value="baja">🟢 - baja</option>
                <option value="media">🟡 - media</option>
                <option value="alta">🔴 - alta</option>
            </select>
         </div>
      </div>
      <div v-if="!isEditing" class="resto">
         <button @click="handleDeleteClick">
            <font-awesome-icon icon="trash-can" />
         </button>
         <button @click="handleEditClick">
            <font-awesome-icon icon="user-pen" />
         </button>
      </div>
      <div v-else class="resto">
         <button @click="handleSaveClick">Guardar</button>
      </div>
   </article>
</template>



<style scoped>
article {
   width: auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
}
p {
    margin: 5px 0;
}
.nombre {
   flex: 2;
}
.resto {
   flex: 1;
   text-align: center;
}
.resto:last-child {
   text-align: end;
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
   font-family: "Gloria Hallelujah", cursive;
   font-size: 14px;
    padding: 5px 10px;
    border: 1px solid white;
}



</style>