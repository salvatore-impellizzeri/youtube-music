<script>

export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<!-- All'interno del template ci va un solo figlio -->
<template> 
  <div>
    <header>
        <h1> 
            {{ message }}
        </h1>
    </header>
  </div>
</template>

<style scoped>

</style>
