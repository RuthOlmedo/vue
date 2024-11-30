<template>
  <div class="combined-view-container">
      <h1>Vista Combinada</h1>
      <div class="task-container">
          <!-- Esta es la sección donde puedes ver y añadir tareas -->
          <add-task @taskAdded="handleTaskAdded" />
          <task-list :tasks="tasks" />
      </div>
  </div>
</template>

<script>
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';

export default {
  name: "CombinedView",
  components: {
      AddTask,
      TaskList,
  },
  data() {
      return {
          tasks: [],
      };
  },
  methods: {
      handleTaskAdded(task) {
          // Cuando se añade una tarea, actualiza la lista
          this.tasks.push(task);
      },
  },
};
</script>

<style scoped>
.combined-view-container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #333;
}

.task-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

  