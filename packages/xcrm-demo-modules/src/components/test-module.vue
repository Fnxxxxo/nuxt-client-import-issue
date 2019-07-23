<template>
  <section>{{content}}</section>
</template>
<script lang="ts">
  /**
   * Created by Jaron Long on 2019/7/19
   */
  import Vue from 'vue'

  export default Vue.extend({
    name: 'test-module',
    data() {
      return {
        content: 'CMS demo!'
      }
    }
  })
</script>
