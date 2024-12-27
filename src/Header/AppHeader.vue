<script>
import { store } from '../store';

export default {
  data() {
    return {
      store
    }
  },

  mounted() {
    store.initScrollListener(); 
  },

  beforeDestroy() {
    store.removeScrollListener();
  },
}
</script>

<template> 
  <div 
    class="flex justify-between fixed top-0 h-16 w-full text-white items-center pl-4 pr-28 z-10"
    :class="[store.scrollPosition > 0 ? 'bg-transparent' : 'bg-black border-b border-white/15']"
  >
    <div class="flex gap-3 items-center w-4/12">
      <button class="rounded-full w-[40px] aspect-square hover:bg-white/15 transition-all duration-200 ease-in-out">
        <i class="fa-solid fa-bars scale-125"></i>
      </button>
      <button>
        <img src="/logo.png" class="scale-90" alt="logo">
      </button>
    </div>
    <div class="px-5 w-11/12">
      <div class="relative">
        <i class="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#aaa] w-4 h-4 fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Cerca brani, album, artisti, podcast"
          class=" w-[480px] h-11 rounded-lg border border-white/15 bg-white/15  focus:bg-black focus:border pl-14 pr-4 text-white placeholder:font-medium placeholder:text-[16px] placeholder-[#aaa] text-sm outline-none transition-all ease-in-out duration-200"
        />
      </div>
    </div>
    <div class="w-4/12 flex items-center justify-end">
      <button class="rounded-full bg-white/20 w-[30px] aspect-square">
        
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
