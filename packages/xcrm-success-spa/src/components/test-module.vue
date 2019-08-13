<template>
  <test-module/>
</template>

<script>
  import { TestModule } from '@xcrm-demo/modules'

  export default {
    name: 'HelloWorld',
    components: {
      TestModule
    },
    props: {
      msg: String
    }
  }
</script>
