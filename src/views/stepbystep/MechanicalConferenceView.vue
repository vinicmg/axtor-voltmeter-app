<template>
    <v-stepper v-model="e1" alt-labels :mobile="isMobile" hide-actions>
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
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="2">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="3">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="4">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="5">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="6">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="7">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="8">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="testImg"
                            height="200"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Conferência Mecânica
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus nunc, eu
                                porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                eros
                                accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                tincidunt
                                elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis. Integer
                                auctor
                                porttitor convallis.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>

        </v-stepper-window>
        <v-btn @click="goBack()">Anterior</v-btn>
        <v-btn @click="goForward()">{{ nextOrDoneText() }}</v-btn>
    </v-stepper>
</template>
<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import PlateService from '@/services/PlateService'

export default defineComponent({
    data: () => ({
        e1: 1,
        steps: 10,
        stepConfig: [
            'Conferência Mecânica',
            'Cabos/Chicote Elétrico',
            'Acessórios Elétricos',
            'Carcaça vazia',
            'Trilhos',
            'Conferência de Gaveta',
            'Montagem de Display(Tela)',
            'Adesivagem',
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
        isMobile() {
            if (window.innerWidth < 900) {
                return true
            }
            return false
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
        },
        nextOrDoneText() {
            return this.e1 === this.steps ? 'Concluir' : 'Próximo'
        },
        goBack() {
            this.e1--
        },
        goForward() {
            this.e1++
        }
    },
})
</script>