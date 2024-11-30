<template>
  <div class="add-task-container">
      <h1>Añadir Tarea</h1>
      <div class="input-group">
          <input 
              v-model="newTask" 
              @keyup.enter="addTask" 
              placeholder="Añadir nueva tarea" 
              class="task-input"
          />
          <button @click="addTask" class="add-button">Añadir</button>
      </div>

      <div v-if="tasks.length > 0" class="task-list">
          <div v-for="task in tasks" :key="task.id" class="task-item">
              <span :class="{ completed: task.completed }">{{ task.todo }}</span>
              <div>
                  <button @click="toggleTaskCompletion(task)">
                      {{ task.completed ? 'Desmarcar' : 'Completar' }}
                  </button>
                  <button @click="deleteTask(task)">Eliminar</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
      return {
          newTask: "", // Campo de entrada para la nueva tarea
          tasks: [],   // Lista de tareas locales
      };
  },
  methods: {
      addTask() {
          if (this.newTask.trim() === "") return;

          const newTask = {
              todo: this.newTask,
              completed: false,
              id: Date.now(), 
          };

          // Añadir la nueva tarea al inicio de la lista
          this.tasks.unshift(newTask);
          this.newTask = ""; // Limpiar el campo de entrada después de agregar

          // Emitir evento para agregar tarea a otras secciones si es necesario
          this.$emit("taskAdded", newTask);
      },

      deleteTask(task) {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },

      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },
  },
};
</script>

<style scoped>
.add-task-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f0f8ff;
  border-radius: 8px;
}

.input-group {
  display: flex;
  margin-bottom: 10px;
}

.task-input {
  flex-grow: 1;
  padding: 8px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>


  