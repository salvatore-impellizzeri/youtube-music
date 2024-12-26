<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<template> 
  <div class="bg-black flex justify-between border-b border-white/15 h-16 w-full text-white items-center pl-7 pr-28">
    <div class="flex gap-6 items-center w-4/12">
      <i class="fa-solid fa-bars scale-125"></i>
      <div>
        <img src="/logo.png" class="scale-90" alt="logo">
      </div>
    </div>
    <div class="px-4 w-11/12">
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
