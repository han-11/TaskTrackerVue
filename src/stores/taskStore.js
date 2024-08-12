// Define the taskStore
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    // Define the tasks array with three tasks
    tasks: [
      { id: 1, title: 'Submit Registration Form', dueDate: '2024-10-15', completed: false },
      { id: 2, title: 'Complete Homework', dueDate: '2024-10-16', completed: false },
      { id: 3, title: 'Grocery Shopping', dueDate: '2024-10-17', completed: true },
    ],
  }),

  actions: {
    // Define the addTask action
    addTask(task) {
      this.tasks.push(task);
    },

    // Define the toggleTaskCompletion action
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});