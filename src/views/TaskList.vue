<template>
  <div class="task-list-container">
      <h1>Lista de Tareas</h1>
      <button @click="fetchTasks" class="btn btn-primary">Cargar Tareas</button>
      <div v-if="tasks.length > 0" class="task-list">
          <div v-for="task in tasks" :key="task.id" class="task-item">
              <span :class="{ completed: task.completed }">{{ task.todo }}</span>
              <div>
                  <button @click="toggleTaskCompletion(task)" class="btn btn-success">
                      {{ task.completed ? 'Desmarcar' : 'Completar' }}
                  </button>
                  <button @click="deleteTask(task)" class="btn btn-danger">Eliminar</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
      return {
          tasks: [], // Almacenamiento local de las tareas traídas de la API
      };
  },
  methods: {
      fetchTasks() {
          fetch('https://dummyjson.com/todos')
              .then(response => response.json())
              .then(data => {
                  this.tasks = data.todos;
              });
      },
      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },
      deleteTask(task) {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
  },
};
</script>

<style scoped>
.task-list-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f0f8ff;
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #333;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.completed {
  text-decoration: line-through;
  color: gray;
}

button {
  margin-left: 10px;
}
</style>

