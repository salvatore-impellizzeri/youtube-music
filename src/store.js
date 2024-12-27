import { reactive } from "vue";

export const store = reactive({

    scrollPosition: 0,
    
    // Metodo per inizializzare il listener dello scroll
    initScrollListener() {
        window.addEventListener("scroll", this.updateScroll);
    },

    // Metodo per rimuovere il listener dello scroll
    removeScrollListener() {
        window.removeEventListener("scroll", this.updateScroll);
    },

    // Funzione per aggiornare la posizione dello scroll
    updateScroll: () => {
        store.scrollPosition = window.scrollY;
    },

});