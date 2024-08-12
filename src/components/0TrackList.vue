<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Task Tracker</h1>
    <div class="space-y-2">
      <!-- Ensure tasks are accessed correctly -->
      <TaskItem
        v-for="task in taskStore.tasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTaskCompletion"
      />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import TaskItem from './TaskItem.vue';

// Initialize the task store
const taskStore = useTaskStore();

// Define the toggleTaskCompletion method to update task status
function toggleTaskCompletion(id) {
  taskStore.toggleTaskCompletion(id);
}
</script>
