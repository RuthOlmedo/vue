<template>
  <div class="home">
    <h1>Bienvenido a la Aplicación de Tareas con Vue</h1>
    <p>Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Secciones de la Aplicación</h3>
    <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
.home {
  text-align: center;
}
</style>

  