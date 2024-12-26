<script>
import AppHeader from './components/AppHeader.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      message: 'Template Vite + Vue'
    }
  },

  components: {
    AppHeader,
  }
}
</script>

<template> 
  <header>
    <h1> 
        <AppHeader />
    </h1>
  </header>
</template>

<style lang="scss" scoped>
@use 'assets/scss/main.scss' as *;

header {
    background-color: aquamarine;
    text-align: center;
}

h1 {
    color: lightcoral;
}
</style>

