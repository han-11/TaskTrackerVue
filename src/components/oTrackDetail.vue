<!-- src/components/TaskDetail.vue -->
<template>
    <div class="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
        Task Detail
      </h2>
      <div class="mb-4">
        <span class="text-gray-700 font-semibold">Task ID:</span>
        <span class="text-gray-900">{{ task.id }}</span>
      </div>
      <div class="mb-4">
        <span class="text-gray-700 font-semibold">Name:</span>
        <span class="text-gray-900">{{ task.title }}</span>
      </div>
      <div class="mb-4">
        <span class="text-gray-700 font-semibold">Due Date:</span>
        <span class="text-gray-900">{{ task.dueDate }}</span>
      </div>
      <div>
        <router-link to="/" class="text-blue-500 hover:underline">Back to Task List</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '@/stores/taskStore';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const taskStore = useTaskStore();
  
  // Find the task by id from the store
  const task = computed(() => taskStore.tasks.find(t => t.id === parseInt(route.params.id)));
  
  // Handle if task not found
  if (!task.value) {
    // Redirect to home or show an error message
    console.error(`Task with ID ${route.params.id} not found.`);
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here if necessary */
  </style>
  