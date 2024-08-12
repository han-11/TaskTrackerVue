<template>
  <div class="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg">
    <h1 class="text-4xl font-bold text-center text-blue-600 mt-6 mb-4">
      Task Tracker
    </h1>
    <!-- Navigation -->
    <nav class="mb-6 text-center">
      <router-link to="/add-task" class="ml-4 text-blue-500 hover:underline">Add New Task</router-link>
    </nav>

    <!-- Form Header -->
    <div class="flex items-center justify-between p-4 border-b bg-gray-100 font-semibold">
      <div class="w-1/6 text-gray-700">Task ID</div>
      <div class="w-1/3 text-gray-700">Name</div>
      <div class="w-1/3 text-gray-700">Due Date</div>
      <div class="w-1/6 text-gray-700 text-center">Completed</div>
      <div class="w-1/6 text-gray-700 text-center">Delete</div>
    </div>

    <!-- Task Items -->
    <div v-if="taskStore.tasks.length === 0" class="p-4 text-center">
      No tasks available.
    </div>
    <div v-else class="space-y-2">
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
import { onMounted } from 'vue';

const taskStore = useTaskStore();

// Fetch tasks when the component is mounted
onMounted(() => {
  taskStore.fetchTasks();
});

// Define the toggleTaskCompletion method to handle the event emitted from TaskItem
const toggleTaskCompletion = (taskId) => {
  taskStore.toggleTaskCompletion(taskId);
};
</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>
