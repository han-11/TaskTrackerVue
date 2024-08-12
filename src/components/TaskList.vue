<!-- src/components/TaskList.vue -->
<template>
  <div class="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg">
    <h1 class="text-4xl font-bold text-center text-blue-600 mt-6 mb-4">
      Task Tracker
    </h1>

     <!-- Form Header -->
     <div class="flex items-center justify-between p-4 border-b bg-gray-100 font-semibold">
      <div class="w-1/6 text-gray-700">Task ID</div>
      <div class="w-1/3 text-gray-700">Name</div>
      <div class="w-1/3 text-gray-700">Due Date</div>
      <div class="w-1/6 text-gray-700 text-center">Status</div>
    </div>


    <div v-if="tasks.length === 0" class="p-4 text-center">
      No tasks available.
    </div>
    <div v-else>
      <task-item v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { onMounted } from 'vue';
import TaskItem from './TaskItem.vue';

// Initialize the task store
const taskStore = useTaskStore();
const { tasks } = taskStore;


</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>
