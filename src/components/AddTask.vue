<!-- src/components/AddTask.vue -->
<template>
    <div class="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
        Add New Task
      </h2>


    <!-- Back Button -->
    <div class="mb-4 text-left">
      <router-link to="/" class="text-blue-500 hover:underline">&larr; Back to Task List</router-link>
    </div>

      <form @submit.prevent="addTask">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="taskId">Task ID:</label>
          <input v-model="taskId" type="number" id="taskId" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="taskName">Name:</label>
          <input v-model="taskName" type="text" id="taskName" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="dueDate">Due Date:</label>
          <input v-model="dueDate" type="date" id="dueDate" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '@/stores/taskStore';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const taskStore = useTaskStore();
  const router = useRouter();
  
  const taskId = ref('');
  const taskName = ref('');
  const dueDate = ref('');
  
  const addTask = () => {
    if (taskId.value && taskName.value && dueDate.value) {
      taskStore.addTask({
        id: parseInt(taskId.value),
        title: taskName.value,
        dueDate: dueDate.value,
        completed: false
      });
      router.push('/'); // Navigate back to Task List after adding the task
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here if necessary */
  </style>
  