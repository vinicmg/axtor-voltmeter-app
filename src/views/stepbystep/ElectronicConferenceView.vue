<template>
    <v-stepper v-model="e1" alt-labels mobile>
        <template v-slot:default="{ prev, next }">
            <v-stepper-header>
                <template v-for="(n) in steps" :key="`${n}`">
                    <v-stepper-item :complete="e1 > n" :value="n"></v-stepper-item>
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
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                                :src="testImg" height="200"></v-img>
                            <div class="d-flex justify-center mt-2">
                                <h3>
                                    Conferência Eletrônica
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
                <div class="action_button">
                    <v-chip class="ma-2" color="red" label @click="openPdf()">
                        <v-icon start icon="mdi-file-pdf-box"></v-icon>
                        Manual
                    </v-chip>
                    <v-chip class="ma-2" color="teal" label @click="open3D()">
                        <v-icon start icon="mdi-cube-outline"></v-icon>
                        Modelo 3D
                    </v-chip>
                </div>
                <v-dialog v-model="dialog">
                    <v-card height="100vh">
                        <viewer></viewer>

                        <v-card-actions>
                            <v-btn color="orange-darken-4" variant="tonal" class="mx-2 my-2" width="10vw"
                                @click="close()">Fechar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-stepper-window>

            <v-stepper-actions :disabled="disabledActions" @click:prev="prev" @click:next="next" prev-text="Anterior"
                :next-text="nextOrDoneText()" color="#F6931E"></v-stepper-actions>
        </template>
    </v-stepper>
</template>
<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import PlateService from '@/services/PlateService'
import viewer from '@/components/3d-viewer.vue'

export default defineComponent({
    components: {
        viewer
    },
    data: () => ({
        e1: 1,
        steps: 8,
        currentPlateId: null,
        plate: null,
        testImg: icon,
        dialog: false,
    }),
    created() {
        this.initialize()
    },
    computed: {
        disabledActions() {
            return this.e1 === 1 ? 'prev' : this.e1 === this.steps ? 'next' : undefined
        },
    },
    watch: {
        dialog(val) {
            val || this.close()
        }
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
        openPdf() {
            alert('Abrindo PDF...')
        },
        open3D() {
            this.dialog = true
        },
        close() {
            this.dialog = false
        }
    },
})
</script>
<style lang="scss">
.action_button {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>