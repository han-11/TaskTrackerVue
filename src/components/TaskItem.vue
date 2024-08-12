<!-- src/components/TaskItem.vue -->
<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div>
      <router-link :to="'/task/' + task.id" class="text-gray-500 font-semibold mr-2">
        #{{ task.id }}
      </router-link>
      <router-link :to="'/task/' + task.id" :class="{
          'line-through text-gray-500': task.completed,
          'text-black': !task.completed}">
        {{ task.title }}
      </router-link>
    </div>
    <div class="text-sm text-gray-400">
      Due: {{ task.dueDate }}
    </div>
    <input
      type="checkbox"
      :id="'task-' + task.id"  
      :checked="task.completed"
      @change="toggleCompletion"
      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
    <button @click="deleteTask" class="text-red-500 hover:text-red-700">
      <i class="pi pi-trash" style="color: slateblue"></i>
    </button>

  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';


const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskStore = useTaskStore();

const toggleCompletion = () => {
  console.log(`Toggling completion for task ID: ${props.task.id}`); // Debugging log
  taskStore.toggleTaskCompletion(props.task.id);
};

const deleteTask = () => {
  if (confirm(`Are you sure you want to delete the task "${props.task.title}"?`)) {
    taskStore.deleteTask(props.task.id);
  }
};


</script>
