<template>
  <div class="hello">
    <h1>Home page!</h1>
    <div class="hello__container">
      <hello :name="name" :initialEnthusiasm="5"></hello>
      <hello-decorator :name="name" :initialEnthusiasm="5" />
    </div>
  </div>
</template>

<script lang="ts">

import Hello from '../components/Hello.component.vue'
import HelloDecorator from '../components/HelloDecorator.component.vue'

export default {
  name: 'home-page',
  data: () => ({
    name: "penis"
  }),
  components: {
    Hello,
    HelloDecorator
  }
}
</script>

<style lang="scss">
.hello {
  margin: 5px;
  &__container {
    background-color: $color-primary
  }
}
</style>
