import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [], // Start with an empty tasks array
  }),

  actions: {
    // Fetch tasks from a mock JSON file
    async fetchTasks() {
      try {
        const response = await fetch('tasks.json');
        this.tasks = await response.json();
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    },

    // Add a new task
    addTask(task) {
      this.tasks.push(task);
    },

    // Update an existing task
    updateTask(taskId, title, dueDate) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.title = title;
        task.dueDate = dueDate;
      }
    },

    // Toggle the completion status of a task
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },

    // Delete a task
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    },
  },
});
