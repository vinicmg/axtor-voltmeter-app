<template>
    <v-navigation-drawer v-model="isOpen" :color="colors.secondary" app>
        <v-list>
            <v-list-item :prepend-avatar="logoSolo">Axtor</v-list-item>
            <v-divider></v-divider>
            <v-list-group value="Equipamentos">
                <template #activator="{ props }">
                    <v-list-item v-bind="props">Equipamentos</v-list-item>
                </template>

                <v-list-item to="/equipamentos">Geral</v-list-item>
                <v-list-item to="/equipamentos/0">Não iniciados</v-list-item>
                <v-list-item to="/equipamentos/1">Em andamento</v-list-item>
                <v-list-item to="/equipamentos/2">Finalizadas</v-list-item>
            </v-list-group>
            <v-list-group value="Cadastros">
                <template #activator="{ props }">
                    <v-list-item v-bind="props">Cadastros</v-list-item>
                </template>

                <v-list-item to="/cadastro/equipamentos">Equipamentos</v-list-item>
                <v-list-item to="/cadastro/configuracao">Configurações</v-list-item>
                <v-list-item to="/cadastro/tipodeplaca">Tipos de Placa</v-list-item>
                <v-list-item to="/cadastro/tecnico">Técnico</v-list-item>
                <v-list-item to="/cadastro/setor">Setor</v-list-item>
            </v-list-group>
            <v-list-item to="/relatorios">Relatórios</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { useSideBarStore } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';
import colors from '../assets/globalColors'
import logoSolo from '../assets/logo_axtor_solo.jpg'

const sidebarStore = useSideBarStore();
const { isOpen } = storeToRefs(sidebarStore)
</script>

<style lang="scss"></style>