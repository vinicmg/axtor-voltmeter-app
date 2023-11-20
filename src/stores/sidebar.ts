import { defineStore } from "pinia";

export const useSideBarStore = defineStore('sidebar', {
    state: () => ({
        isOpen: false,
    })
})