<script>
import { store } from '../../store';

export default {
  data() {
    return {
        store,
        icons:[
            {
                img:'<i class="fa-solid fa-house"></i>',
                title:'Home',
                page:'',
            },
            {
                img:'<i class="fa-regular fa-compass"></i>',
                title:'Esplora',
                page:'',
            },
            {
                img:'<i class="fa-solid fa-list-ul"></i>',
                title:'Raccolta',
                page:'',
            },
        ]
    }
  },

  mounted() {
    store.initScrollListener(); 
  },

  beforeDestroy() {
    store.removeScrollListener();
  },

  components: {

  }
}
</script>

<template>
  <div 
    class="w-[72px] fixed left-0 top-0 h-screen pt-16"
    :class="[store.scrollPosition > 0 ? 'bg-transparent' : 'bg-black border-r border-white/15']"
  >
    <div class="py-2">
        <button 
            v-for="(icon, index) in icons" 
            :key="index"
            class="text-white px-2 py-4 hover:bg-white/20 traansition-all ease-out duration-200 mx-auto w-10/12 flex flex-wrap flex-col rounded-md items-center"
        >
            <div v-html="icon.img"></div>
            <div class="text-[10px] font-medium">
                {{ icon.title }}
            </div>
        </button>
    </div>
  </div> 
</template>

<style scoped>

</style>

