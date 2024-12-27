<script>
import AppHeader from './Header/AppHeader.vue';
import AppMain from './Main/AppMain.vue';

export default {
  data() {
    return {
      
    }
  },

  methods:{

  },

  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <div class="w-screen h-screen bg-gradient-to-br from-[#0A0514]  to-black">
    <header>
        <AppHeader />
    </header>
    <div>
      <AppMain />
    </div>
  </div> 
</template>

<style scoped>

</style>

