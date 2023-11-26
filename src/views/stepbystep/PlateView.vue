<template>
    <v-stepper v-model="e1">
        <template v-slot:default="{ prev, next }">
            <v-stepper-header>
                <template v-for="n in steps" :key="`${n}-step`">
                    <v-stepper-item :complete="e1 > n" :step="`Step {{ n }}`" :value="n"></v-stepper-item>
                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-window class="d-flex justify-content-center">
                <v-stepper-window-item :value="1">
                    <v-card class="d-flex justify-center" color="grey-lighten-1" height="200" width="500px">Etapa 1</v-card>
                </v-stepper-window-item>
            </v-stepper-window>

            <v-stepper-actions :disabled="disabledActions" @click:prev="prev" @click:next="next" prev-text="Anterior"
                next-text="Próximo" color="#F6931E"></v-stepper-actions>
        </template>
    </v-stepper>
</template>
<script>
import PlateService from '@/services/PlateService'
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        e1: 1,
        steps: 15,
        currentPlateId: null,
        plate: null,
    }),
    created() {
        this.initialize()
    },
    computed: {
        disabledActions() {
            return this.e1 === 1 ? 'prev' : this.e1 === this.steps ? 'next' : undefined
        },
    },
    methods: {
        initialize() {
            this.currentPlateId = this.$route.params.id
            this.getPlateInfo()
        },
        async getPlateInfo() {
            let param = {
                id: this.currentPlateId
            }
            let response = await PlateService.getAll(param)
            this.plate = response.data
        }
    },
})
</script>