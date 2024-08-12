<!-- src/components/TaskItem.vue -->
<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div>
      <span class="text-gray-500 font-semibold mr-2">#{{ task.id }}</span>
      <span :class="{ 'line-through text-gray-500': task.completed }">{{ task.title }}</span>
    </div>
    <input
      type="checkbox"
      v-model="task.completed"
      @change="toggleCompletion"
      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { toRefs } from 'vue';

const props = defineProps({
  task: Object,
});

const { toggleTaskCompletion } = useTaskStore();

const toggleCompletion = () => {
  toggleTaskCompletion(props.task.id);
};
</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>
