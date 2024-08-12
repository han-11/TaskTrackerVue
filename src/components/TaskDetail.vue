<!-- src/components/TaskDetail.vue -->
<template>
  <div class="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
    <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
      Task Detail
    </h2>

    <div v-if="!isEditing">
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
      <div class="flex justify-between mt-4">
        <button @click="startEditing" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Edit Task
        </button>
        <button @click="deleteTask" class="text-red-500 hover:text-red-700">
      <i class="pi pi-trash" style="color: slateblue"></i>
    </button>
        <router-link to="/" class="text-blue-500 hover:underline">Back to Task List</router-link>
      </div>
    </div>

    <div v-else>
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="taskName">Name:</label>
          <input v-model="editedTitle" type="text" id="taskName" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="dueDate">Due Date:</label>
          <input v-model="editedDueDate" type="date" id="dueDate" class="w-full p-2 border rounded" required />
        </div>
        <div class="flex justify-between mt-4">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Save Changes
          </button>
          <button @click="cancelEditing" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const taskStore = useTaskStore();

const task = computed(() => taskStore.tasks.find(t => t.id === parseInt(route.params.id)));

// Handle if task not found
if (!task.value) {
  console.error(`Task with ID ${route.params.id} not found.`);
}

const isEditing = ref(false);
const editedTitle = ref(task.value.title);
const editedDueDate = ref(task.value.dueDate);

const startEditing = () => {
  isEditing.value = true;
};

const saveChanges = () => {
  task.value.title = editedTitle.value;
  task.value.dueDate = editedDueDate.value;
  isEditing.value = false;
};

const cancelEditing = () => {
  isEditing.value = false;
  editedTitle.value = task.value.title;
  editedDueDate.value = task.value.dueDate;
};

const deleteTask = () => {
  if (confirm(`Are you sure you want to delete the task "${task.value.title}"?`)) {
    taskStore.deleteTask(task.value.id);
    router.push('/');
  }
};



</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>
