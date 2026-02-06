// examples/vue-example.js
// Example usage in Vue.js application (Vue 3)

// ======================
// Option 1: Auto-disable in production
// ======================
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'console-off'; // Auto-disables console in production

createApp(App).mount('#app');

// ======================
// Option 2: Manual control with options
// ======================
/*
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { disableConsole } from 'console-off';

// Disable console in production, but keep errors and warnings
if (import.meta.env.PROD) {
  disableConsole({ 
    exclude: ['error', 'warn'],
    env: 'production'
  });
}

createApp(App).mount('#app');
*/

// ======================
// Example App.vue component
// ======================
/*
<template>
  <div id="app">
    <h1>Vue Console-Off Demo</h1>
    <div class="controls">
      <button @click="logMessage">Log Message</button>
      <button @click="logWarning">Log Warning</button>
      <button @click="logError">Log Error</button>
    </div>
    <div class="status">
      <p>Check your browser's console to see the effect.</p>
      <p>In production, only errors and warnings will show by default.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logMessage() {
      console.log('This is a regular log message');
    },
    logWarning() {
      console.warn('This is a warning message');
    },
    logError() {
      console.error('This is an error message');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
.controls {
  margin: 20px 0;
}
button {
  margin: 0 10px;
  padding: 8px 16px;
  cursor: pointer;
}
.status {
  margin-top: 30px;
  color: #666;
}
</style>
*/
