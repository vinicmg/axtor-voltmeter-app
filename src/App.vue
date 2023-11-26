<template>
    <v-app>
        <sideBar></sideBar>
        <v-app-bar :color="colors.primary" app>
            <v-app-bar-nav-icon @click="isOpen = !isOpen"></v-app-bar-nav-icon>
            <v-app-bar-title class="d-flex justify-center">Axtor Bancadas e Ferramentas</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <RouterView />
        </v-main>

        <v-footer height="0.1vh" color="transparent" class="d-flex justify-center align-end">
            <span class="footer" color="white">© 2023 Axtor Bancadas e Ferramentas</span>
        </v-footer>
    </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useSideBarStore } from './stores/sidebar';
import sideBar from './components/side-bar.vue';
import { storeToRefs } from 'pinia';
import colors from './assets/colors'

const sidebarStore = useSideBarStore();

const { isOpen } = storeToRefs(sidebarStore)
</script>

<style>
.footer {
    color: white
}
</style>
