<!-- <template>
  <div class="app-container">
    
   
    <TaskList />
    
  </div>
</template>

<script setup>
import TaskList from './components/TaskList.vue';

</script> -->


<template>
  <div class="app-container">
   
    <router-view />
  </div>
</template>



<style scoped>
.app-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
