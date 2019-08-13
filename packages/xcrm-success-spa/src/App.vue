<template>
  <div id="app">
    <test-module/>
  </div>
</template>

<script>
  import TestModule from './components/test-module.vue'

  export default {
    name: 'app',
    components: {
      TestModule
    }
  }
</script>
