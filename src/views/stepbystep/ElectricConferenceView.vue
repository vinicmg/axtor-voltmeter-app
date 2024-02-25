<template>
    <dialogSector :showDialog="dialog" @closeDialog="closeDialog" @saveDialog="saveDialog"></dialogSector>
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
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6001_IMG"
                            height="200" @click="showOverlay(CI6001_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Cabo de PC
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar 30cm de cabo, soldar a malha no GND(Fio Preto), deixar com 10cm o GND, BP(Branco
                                do Preto),
                                BV(Branco do Vermelho), colocar o termo e colocar conector 4 vias, deixar o cabo vermelho
                                solto para
                                futura fixação na placa. Do outro lado decapar o suficiente para soldar no conector DB9.
                            </span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo PKS 2P X 24 AWG</th>
                                        <td>943</td>
                                        <td>M</td>
                                        <td>1,70</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector DB9</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 3 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="2">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6002_IMG"
                            height="275" @click="showOverlay(CI6002_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Comunicação RS485
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Soldar GND(PRETO) com GND, branco com vermelho e vermelho com branco, usar termo com cola
                                para isolar.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 3x18mm AWG</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>6,60</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector DB9</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="3">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6003_IMG"
                            height="200" @click="showOverlay(CI6003_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Posições 1, 2, 3, 4, 5 e 6
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar os cabos com suas respectivas medidas, estanhar as pontas mais compridas de ambos
                                os cabos e colocar terminal tubular no lado dos conectores 4 vias, colocar o cabo de terra
                                1,5mm² no lado mais comprido de ambos os cabos, se atentar a numeração dos cabos.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 12x1,5mm²</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>5,8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Terminal tubular 1,5mm²</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 4 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="4">
                <v-card border height="90vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6004_IMG"
                            height="200" @click="showOverlay(CI6004_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                LED, PC e Botão ON/OFF
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar os quatro cabos, soldar todos os pretos e a malha do cabo azul juntos, soldar
                                todos os cabos azuis juntos e o terra com o marrom e o branco do cabo azul. Em seguida
                                colocar os conectores, o cabo do led vai ficar sozinho e o restante fica para o lado da
                                placa. A seta do diodo fica para o lado do cabo contrario ao conector.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2x1,5mm²</th>
                                        <td>179</td>
                                        <td>M</td>
                                        <td>1,4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 3x1,5mm²</th>
                                        <td>938</td>
                                        <td>M</td>
                                        <td>1,6</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo Azul</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>1,5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo Laranja</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>3,1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 3 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector LED</th>
                                        <td>9021018</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector P2</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Diodo 1N4007</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Botão de ligar máquina</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="5">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6005_IMG"
                            height="200" @click="showOverlay(CI6005_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Outros Conectores
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar 10cm cada lado, soldar a malha no cabo preto e colocar termo com cola para isolar
                                a malha, em seguida conectar o cabo nos conectores.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2X18 AWG</th>
                                        <td>756</td>
                                        <td>M</td>
                                        <td>0,5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 3 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="6">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6006_IMG"
                            height="200" @click="showOverlay(CI6006_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Outros Conectores
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Cortar os cabos de acordo com as medidas abaixo, colocar as tags 2cm antes da ponta do
                                cabo e usar termo transparente. Conectar de acordo com a numeração mostrada no
                                desenho.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2,5mm²</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>2,7</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 4 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Terminal garfo amarelo</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="7">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6007_IMG"
                            height="200" @click="showOverlay(CI6007_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Sensor de Vazão
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar 10cm do lado do conector 4 vias, desfiar a malha enrolar e colocar termo sem cola,
                                colocar termo com cola na base da malha. Colocar tag 2cm antes da ponta dos cabos. No outro
                                lado do cabo decapar o suficiente para colocar o conector.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 3X18 AWG</th>
                                        <td>755</td>
                                        <td>M</td>
                                        <td>2,2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector</th>
                                        <td>9032014</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 4 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="8">
                <v-card border height="80vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6008_IMG"
                            height="200" @click="showOverlay(CI6008_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Pressão do Óleo e Fim de Curso
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Para o primeiro cabo, decapar 10cm desfiar a malha enrolar e colocar o termo, colocar as
                                tags e o termo transparente, no outro lado decapar 8cm cortar a malha, colocar os terminais
                                e as tags. No segundo cabo fazer o mesmo procedimento de desfiar a malha e colcoar o termo,
                                no outro lado medir 1,05 metros do final do cabo e decapar 15cm, colocar termo com cola em
                                ambos os lados, em seguidos cortar o cabo vermelho no meio, colocar as tags e os
                                terminais.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2X18 AWG</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>7,2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 6 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Terminal olhal grande</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Terminal olhal pequeno</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Terminal garfo pequeno</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="9">
                <v-card border height="70vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6009_IMG"
                            height="200" @click="showOverlay(CI6009_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Sensor
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Para o primeiro, cortar o conector preto de acordo com o desenho ao lado e finalizar com o
                                termo para o acabamento. No segundo, preencher com cola quente o conector branco para isolar
                                o terminal.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2X1,5mm²</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 1,5mm²</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 4 vias</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector</th>
                                        <td>9032014</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector Fêmea</th>
                                        <td></td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="10">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" width="35vw">
                        <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .2)`" :src="CI6010_IMG"
                            height="200" @click="showOverlay(CI6008_IMG)"></v-img>
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Bóia do Tanque
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>Decapar 10cm, desfiar e enrolar a malha, colocar o termo sem cola e o termo com cola na
                                base da malha, colocar as tags e o termo transparente.</span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cabo 2X18 AWG</th>
                                        <td></td>
                                        <td>M</td>
                                        <td>3,2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector 4 vias</th>
                                        <td>938</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Conector</th>
                                        <td>9031014</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
        </v-stepper-window>
        <div class="group_buttons pa-4">
            <v-btn @click="goBack()" width="10vw">Anterior</v-btn>
            <v-btn color="orange-darken-2" width="10vw" @click="goForward()">{{ nextOrDoneText() }}</v-btn>
        </div>
    </v-stepper>
    <v-overlay v-model="overlay" contained class="align-center justify-center">
        <v-img :src="selectedImg" height="90vh" width="90vw" @click="overlay = false"></v-img>
    </v-overlay>
</template>
<script>
import { defineComponent } from 'vue'
import CI6001_IMG from '@/assets/electric/CI6001.png'
import CI6002_IMG from '@/assets/electric/CI6002.png'
import CI6003_IMG from '@/assets/electric/CI6003.png'
import CI6004_IMG from '@/assets/electric/CI6004.png'
import CI6005_IMG from '@/assets/electric/CI6005.png'
import CI6006_IMG from '@/assets/electric/CI6006.png'
import CI6007_IMG from '@/assets/electric/CI6007.png'
import CI6008_IMG from '@/assets/electric/CI6008.png'
import CI6009_IMG from '@/assets/electric/CI6009.png'
import CI6010_IMG from '@/assets/electric/CI6010.png'
import StepElectricService from '@/services/StepElectricService'
import dialogSector from '@/components/dialog_sector.vue'

export default defineComponent({
    data: () => ({
        e1: 1,
        overlay: false,
        steps: 10,
        stepConfig: [
            'CI-6001',
            'CI-6002',
            'CI-6003',
            'CI-6004',
            'CI-6005',
            'CI-6006',
            'CI-6007',
            'CI-6008',
            'CI-6009',
            'CI-6010',
        ],
        currentPlateId: null,
        CI6001_IMG: CI6001_IMG,
        CI6002_IMG: CI6002_IMG,
        CI6003_IMG: CI6003_IMG,
        CI6004_IMG: CI6004_IMG,
        CI6005_IMG: CI6005_IMG,
        CI6006_IMG: CI6006_IMG,
        CI6007_IMG: CI6007_IMG,
        CI6008_IMG: CI6008_IMG,
        CI6009_IMG: CI6009_IMG,
        CI6010_IMG: CI6010_IMG,
        selectedImg: null,
        electrics: [],
        dialog: false,
    }),
    components: {
        dialogSector
    },
    created() {
        this.initialize()
    },
    computed: {
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
            this.getElectricForPlate()
            window.setTimeout(() => {
                this.createOrUpdateStepElectric()
            }, 200);
        },
        async getElectricForPlate() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepElectricService.getAll(params)
            this.electrics = response.data
            if (this.electrics.ultima_etapa) {
                this.e1 = this.electrics.ultima_etapa
            }
        },
        async createOrUpdateStepElectric() {
            let params = {
                id_placa: this.$route.params.id
            }

            if (this.electrics) {
                params = {
                    ...params,
                    id: this.electrics.id
                }
                await StepElectricService.update(params)
            } else {
                params = {
                    ...params,
                    status: 0,
                }
                await StepElectricService.create(params)
            }
        },
        nextOrDoneText() {
            return this.e1 === this.steps ? 'Concluir' : 'Próximo'
        },
        goBack() {
            if (this.e1 !== 1) {
                this.updateLastStep()
                this.e1--
            } else {
                this.save()
            }
        },
        goForward() {
            if (this.e1 !== this.steps) {
                this.updateLastStep()
                this.e1++
            } else {
                this.save()
            }
        },
        showOverlay(selectedImg) {
            this.selectedImg = selectedImg
            this.overlay = !this.overlay
        },
        async updateLastStep() {
            let params = {
                ultima_etapa: this.e1 + 1,
                status: 1,
            }
            await StepElectricService.update(this.electrics.id, params)
        },
        save() {
            this.dialog = true
        },
        async saveDialog(technician) {
            let params = {
                id_placa: this.$route.params.id,
                id_tecnico: technician,
                status: 2,
                ultima_etapa: 1,
            }
            await StepElectricService.update(this.electrics.id, params)
            this.dialog = false
            this.$router.go(-1)
        },
        closeDialog() {
            this.dialog = false
        }
    },
})
</script>
<style lang="scss">
.group_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>