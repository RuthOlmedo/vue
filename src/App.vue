<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Aplicación de Tareas</router-link>
        <div class="navbar-nav">
          <router-link class="nav-link" to="/add-task">Añadir Tarea</router-link>
          <router-link class="nav-link" to="/task-list">Lista de Tareas</router-link>
          <router-link class="nav-link" to="/combined-view">Vista Combinada</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Aquí puedes personalizar el estilo global de la aplicación */
</style>

  