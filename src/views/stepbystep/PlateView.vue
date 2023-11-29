<template>
    <v-stepper v-model="e1" alt-labels>
        <template v-slot:default="{ prev, next }">
            <v-stepper-header>
                <template v-for="(n, i) in steps" :key="`${n}`">
                    <v-stepper-item :complete="e1 > n" :value="n" :title="this.stepConfig[i]"></v-stepper-item>
                    <v-divider v-if="n !== steps" :key="n"></v-divider>
                </template>
            </v-stepper-header>

            <v-stepper-window>
                <v-stepper-window-item :value="1">
                    <v-card border height="65vh" class="d-flex justify-center pa-5">
                        <v-sheet border elevation="4" width="35vw">
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Mecânica
                                </h3>
                            </div>
                        </v-sheet>
                    </v-card>
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
import icon from '@/assets/icon.png'

export default defineComponent({
    data: () => ({
        e1: 1,
        steps: 11,
        stepConfig: [
            'Conferência Mecânica',
            'Cabos/Chicote Elétrico',
            'Acessórios Elétricos',
            'Carcaça vazia',
            'Trilhos',
            'Conferência de Gaveta',
            'Montagem de Display(Tela)',
            'Adesivagem',
            'Placas',
            'Qualidade',
            'Embalagem'
        ],
        currentPlateId: null,
        plate: null,
        testImg: icon,
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