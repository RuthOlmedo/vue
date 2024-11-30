<template>
    <div>
      <div>
        <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
          {{ title }}
        </h5>
        <span>{{ completed ? 'Completada' : 'Pendiente' }}</span>
      </div>
      <div>
        <button @click="$emit('toggle-completion')">
          Marcar como {{ completed ? 'Pendiente' : 'Completada' }}
        </button>
        <button @click="$emit('delTodo')">Eliminar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      title: String,
      completed: Boolean,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados */
  </style>
  