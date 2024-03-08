<template>
    <dialogSector :showDialog="dialog" @closeDialog="closeDialog" @saveDialog="saveDialog"></dialogSector>
    <v-stepper v-model="e1" alt-labels hide-actions>
        <v-stepper-header>
            <template v-for="(n) in steps" :key="`${n}`">
                <v-stepper-item :complete="e1 > n" :value="n"></v-stepper-item>
                <v-divider v-if="n !== steps" :key="n"></v-divider>
            </template>
        </v-stepper-header>
        <v-stepper-window>
            <v-stepper-window-item :value="1">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Instalação das fontes
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>1. Fontes</span>
                            <span class="px-5">✓ Fixar as fontes</span>
                            <span class="px-5">✓ Nomear</span>
                            <span class="px-5">✓ Na fonte G3 colocar os calços de EVA</span>
                            <v-img :src="image1" height="200" @click="showOverlay(image1)"></v-img>
                            <span class="text-center mb-2"><i>Figura 1 - Instalação das Fontes</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">FONTE LRS-350-12 COLMEIA 30A 12V BIVOLT FTE 1230 / FTC
                                            1230</th>
                                        <td>4016</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">FONTE RT-50B COLMEIA TRIPLE-OUT 5V/12V/-12V</th>
                                        <td>8338</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4 X 12 - INOX.</th>
                                        <td>5804</td>
                                        <td>UN</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADADA 3X16 INOX (CISER
                                            28410500)</th>
                                        <td>4</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="2">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Identificação dos conectores
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>2. Conectores DEGSON 2EDG</span>
                            <span class="px-5">✓ Verificar rachaduras na estrutura</span>
                            <span class="px-5">✓ Marcar os conectores com Etiquetas</span>
                            <v-img :src="image2" height="200" @click="showOverlay(image2)"></v-img>
                            <span class="text-center mb-2"><i>Figura 2 - Conectores DEGSON 2EDG</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 3 VIAS (FPH-3) DEGSON VERDE 2EDGKD-5.08-
                                            03P-14-00Z(H)</th>
                                        <td>9434</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 2 VIAS (FPH-2) DEGSON VERDE 2EDGKD-5.08-
                                            02P-14-00Z(H)</th>
                                        <td>9433</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 4 VIAS (FPH-4) DEGSON VERDE 2EDGKD-5.08-
                                            04P-14-00Z(H)</th>
                                        <td>9378</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 8 VIAS (FPH-8) DEGSON VERDE 2EDGKD-5.08-
                                            08P-14-00Z(H)</th>
                                        <td>9436</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 6 VIAS (FPH-6) DEGSON VERDE 2EDGKD-5.08-
                                            06P-14-00Z(H)</th>
                                        <td>9435</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="3">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>3. Chicote K2</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image3" height="200" @click="showOverlay(image3)"></v-img>
                            <span class="text-center mb-2"><i>Figura 3 – Chicote K2</i></span>
                            <v-img :src="image4" height="200" @click="showOverlay(image4)"></v-img>
                            <span class="text-center mb-2"><i>Figura 4 – Esquema chicote K2</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1,5 MM BRANCO 750V</th>
                                        <td>5399</td>
                                        <td>M</td>
                                        <td>1,22</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 2,5MM AZUL</th>
                                        <td>6482</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 6 VIAS (FPH-6) DEGSON VERDE 2EDGKD-5.08-
                                            06P-14-00Z(H)</th>
                                        <td>9435</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="4">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>4. Chicote K3</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image5" height="200" @click="showOverlay(image5)"></v-img>
                            <span class="text-center mb-2"><i>Figura 5 – Chicote K3</i></span>
                            <v-img :src="image6" height="200" @click="showOverlay(image6)"></v-img>
                            <span class="text-center mb-2"><i>Figura 6 – Esquema chicote K3</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 6 VIAS (FPH-6) DEGSON VERDE 2EDGKD-5.08-
                                            06P-14-00Z(H)</th>
                                        <td>9435</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 3 VIAS (FPH-3) DEGSON VERDE 2EDGKD-5.08-
                                            03P-14-00Z(H)</th>
                                        <td>9434</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 2 VIAS (FPH-2) DEGSON VERDE 2EDGKD-5.08-
                                            02P-14-00Z(H)</th>
                                        <td>9433</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 2,5MM AZUL</th>
                                        <td>6482</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>M</td>
                                        <td>0,56</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM BRANCO 750V</th>
                                        <td>195</td>
                                        <td>M</td>
                                        <td>1,6</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="5">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>5. Chicote K4</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image7" height="200" @click="showOverlay(image7)"></v-img>
                            <span class="text-center mb-2"><i>Figura 7 – Chicote K4</i></span>
                            <v-img :src="image8" height="200" @click="showOverlay(image8)"></v-img>
                            <span class="text-center mb-2"><i>Figura 8 – Esquema chicote K4</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 4 VIAS (FPH-4) DEGSON VERDE 2EDGKD-5.08-
                                            04P-14-00Z(H)</th>
                                        <td>9378</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM BRANCO 750V</th>
                                        <td>195</td>
                                        <td>M</td>
                                        <td>1,29</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="6">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>6. Chicotes K5</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image9" height="200" @click="showOverlay(image9)"></v-img>
                            <span class="text-center mb-2"><i>Figura 9 – Chicotes K5</i></span>
                            <v-img :src="image10" height="200" @click="showOverlay(image10)"></v-img>
                            <span class="text-center mb-2"><i>Figura 10 – Esquema chicotes K5</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 3 VIAS (FPH-3) DEGSON VERDE 2EDGKD-5.08-
                                            03P-14-00Z(H)</th>
                                        <td>9434</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM BRANCO 750V</th>
                                        <td>195</td>
                                        <td>M</td>
                                        <td>1,59</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 2,5MM AZUL</th>
                                        <td>6482</td>
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
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>7. Cabo do PC e cabo solto</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image11" height="200" @click="showOverlay(image11)"></v-img>
                            <span class="text-center mb-2"><i>Figura 11 – Cabo do PC e cabo solto</i></span>
                            <v-img :src="image12" height="200" @click="showOverlay(image12)"></v-img>
                            <span class="text-center mb-2"><i>Figura 12 – Cabo do PC e cabo solto</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM BRANCO 750V</th>
                                        <td>195</td>
                                        <td>M</td>
                                        <td>0,20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO DE MICROFONE 2X22AWG / SC-30P SANTO ANGELO</th>
                                        <td>2098</td>
                                        <td>M</td>
                                        <td>0,51</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 3,81 2 VIAS (FPH-2) AMPHENOL VERDE 300V 10A
                                            (TJ0231530000G)</th>
                                        <td>9559</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMO RETRATIL PAREDE DUPLA ADESIVADO 9,5MM</th>
                                        <td>5828</td>
                                        <td>M</td>
                                        <td>0,06</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="8">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>8. Chicotes neutro e terra</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos e soldar cuidadosamente os terminais e
                                cabos com estanho</span>
                            <v-img :src="image13" height="200" @click="showOverlay(image13)"></v-img>
                            <span class="text-center mb-2"><i>Figura 13 – Chicotes neutro e terra</i></span>
                            <v-img :src="image14" height="200" @click="showOverlay(image14)"></v-img>
                            <span class="text-center mb-2"><i>Figura 14 – Esquema neutro e terra</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM BRANCO 750V</th>
                                        <td>195</td>
                                        <td>M</td>
                                        <td>0,38</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 1,5MM VERMELHO</th>
                                        <td>1083</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL GARFINHO 2,5MM AZUL</th>
                                        <td>6482</td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM VERDE 750V</th>
                                        <td>197</td>
                                        <td>M</td>
                                        <td>0,35</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="9">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>9. Speakon</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos</span>
                            <span class="px-5">✓ Primeiro fixar o sensor na carcaça para depois conectar nos
                                DEGSON</span>
                            <v-img :src="image15" height="200" @click="showOverlay(image15)"></v-img>
                            <span class="text-center mb-2"><i>Figura 15 – Speakon</i></span>
                            <v-img :src="image16" height="200" @click="showOverlay(image16)"></v-img>
                            <span class="text-center mb-2"><i>Figura 16 – Esquema Speakon</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">NL4MPXX - CONECTOR SPEAKON PRETO MACHO (ANTIGO
                                            NL4MP)</th>
                                        <td>398</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO FLEX 1 MM VERDE 750V</th>
                                        <td>197</td>
                                        <td>M</td>
                                        <td>0,66</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 8 VIAS (FPH-8) DEGSON VERDE 2EDGKD-5.08-
                                            08P-14-00Z(H)</th>
                                        <td>9436</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMO RETRATIL PAREDE DUPLA ADESIVADO 9,5MM</th>
                                        <td>5828</td>
                                        <td>M</td>
                                        <td>0,12</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="10">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>10. Tampa posterior AXD</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos</span>
                            <span class="px-5">✓ Primeiro fixar os sensores na carcaça para depois conectar nos
                                har-flexicon</span>
                            <v-img :src="image17" height="200" @click="showOverlay(image17)"></v-img>
                            <span class="text-center mb-2"><i>Figura 17 – Sensor</i></span>
                            <v-img :src="image18" height="200" @click="showOverlay(image18)"></v-img>
                            <span class="text-center mb-2"><i>Figura 18 – Esquema sensor</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR ITC 8 VIAS M24 MACHO PARA PAINEL QUADRADA
                                            IP67 10A (SKU: CQV83-PT)</th>
                                        <td>9252</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO BLIND MALHA TRANÇADA AFT 7X26AWG</th>
                                        <td>9350</td>
                                        <td>M</td>
                                        <td>0,40</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 8 VIAS (FPH-8) DEGSON VERDE 2EDGKD-5.08-
                                            08P-14-00Z(H)</th>
                                        <td>9436</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO SIMPLES ILHOIS 0,5MM</th>
                                        <td>8014</td>
                                        <td>UN</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMO RETRATIL PAREDE DUPLA ADESIVADO 9,5MM</th>
                                        <td>5828</td>
                                        <td>M</td>
                                        <td>0,06</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="11">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes elétricos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>11. Sensor de detonação</span>
                            <span class="px-5">✓ Se atentar a bitola dos cabos</span>
                            <span class="px-5">✓ Colocar os terminais nos cabos</span>
                            <span class="px-5">✓ Primeiro fixar os sensores na carcaça para depois conectar nos
                                DEGSON</span>
                            <v-img :src="image19" height="200" @click="showOverlay(image19)"></v-img>
                            <span class="text-center mb-2"><i>Figura 19 – Esquema sensor de detonação</i></span>
                            <v-img :src="image20" height="200" @click="showOverlay(image20)"></v-img>
                            <span class="text-center mb-2"><i>Figura 20 – Esquema sensor de detonação</i></span>
                        </div>
                        <div class="px-5">
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR ITC 4 VIAS M16 MACHO PARA PAINEL
                                            QUADRADA IP67 10A (SKU: CQV43PT)</th>
                                        <td>9254</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO BLIND MALHA TRANÇADA AFT 2 X 18AWG</th>
                                        <td>756</td>
                                        <td>M</td>
                                        <td>0,37</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR 5, 08 8 VIAS (FPH-8) DEGSON VERDE 2EDGKD-
                                            5.08-08P-14-00Z(H)</th>
                                        <td>9436</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL TUBO 1,0MM VERMELHO</th>
                                        <td>9422</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMINAL ANEL OLHAL AMARELO 6,0MM M6 TP-6-6</th>
                                        <td>9475</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TERMO RETRATIL PAREDE DUPLA ADESIVADO 9,5MM</th>
                                        <td>5828</td>
                                        <td>M</td>
                                        <td>0,06</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="12">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Diagrama para montagem final
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>12. Para a colocação dos cabos</span>
                            <span class="px-5">✓ Começar a montagem no K2, K3, K4 e K5</span>
                            <span class="px-5">✓ Verificar o aperto nas entradas da fonte</span>
                            <span class="px-5">✓ Inspecionar os cabos para possíveis rachaduras ou cortes no
                                isolamento</span>
                            <span class="px-5">✓ Depois de instalado os cabos revisar a instalação</span>
                            <v-img :src="image21" height="200" @click="showOverlay(image21)"></v-img>
                            <v-img :src="image22" height="200" @click="showOverlay(image22)"></v-img>
                            <span class="text-center mb-2"><i>Figura 21 – Esquema elétrico AXD</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="13">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Disposição dos chicotes na placa
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>13. Colocação dos rebites</span>
                            <span class="px-5">✓ Os conectores não podem ficar tensionados</span>
                            <span class="px-5">✓ Não fazer dobras nos cabos</span>
                            <span class="px-5">✓ Acabamento com abraçadeiras de nylon preto</span>
                            <v-img :src="image23" height="200" @click="showOverlay(image23)"></v-img>
                            <span class="text-center mb-2"><i>Figura 22 – Disposição dos cabos</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
        </v-stepper-window>
        <div class="group_buttons pa-4">
            <v-btn @click="goBack()" :disabled="disableBack">Anterior</v-btn>
            <v-btn color="orange-darken-2" @click="goForward()">{{ nextOrDoneText() }}</v-btn>
        </div>
    </v-stepper>
    <v-overlay v-model="overlay" contained class="align-center justify-center">
        <v-img :src="selectedImg" height="90vh" width="90vw" @click="overlay = false"></v-img>
    </v-overlay>
</template>

<script>
import { defineComponent } from 'vue'
import image1 from '@/assets/electric/image1.png'
import image2 from '@/assets/electric/image2.png'
import image3 from '@/assets/electric/image3.png'
import image4 from '@/assets/electric/image4.png'
import image5 from '@/assets/electric/image5.png'
import image6 from '@/assets/electric/image6.png'
import image7 from '@/assets/electric/image7.png'
import image8 from '@/assets/electric/image8.png'
import image9 from '@/assets/electric/image9.png'
import image10 from '@/assets/electric/image10.png'
import image11 from '@/assets/electric/image11.png'
import image12 from '@/assets/electric/image12.png'
import image13 from '@/assets/electric/image13.png'
import image14 from '@/assets/electric/image14.png'
import image15 from '@/assets/electric/image15.png'
import image16 from '@/assets/electric/image16.png'
import image17 from '@/assets/electric/image17.png'
import image18 from '@/assets/electric/image18.png'
import image19 from '@/assets/electric/image19.png'
import image20 from '@/assets/electric/image20.png'
import image21 from '@/assets/electric/image21.png'
import image22 from '@/assets/electric/image22.png'
import image23 from '@/assets/electric/image23.png'
import StepElectricService from '@/services/StepElectricService'
import dialogSector from '@/components/dialog_sector.vue'

export default defineComponent({
    data: () => ({
        e1: 1,
        overlay: false,
        steps: 13,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        image6: image6,
        image7: image7,
        image8: image8,
        image9: image9,
        image10: image10,
        image11: image11,
        image12: image12,
        image13: image13,
        image14: image14,
        image15: image15,
        image16: image16,
        image17: image17,
        image18: image18,
        image19: image19,
        image20: image20,
        image21: image21,
        image22: image22,
        image23: image23,
        selectedImg: null,
        electrics: null,
        dialog: false,
        disableBack: true,
    }),
    components: {
        dialogSector
    },
    created() {
        this.initialize()
    },
    watch: {
        e1(newValue) {
            if (newValue === 1) {
                this.disableBack = true
            } else {
                this.disableBack = false
            }
        }
    },
    methods: {
        initialize() {
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

            if (response.data) {
                this.electrics = response.data

                if (this.electrics.ultima_etapa) {
                    this.e1 = this.electrics.ultima_etapa
                }
            }

            this.editedIndex = 0
            this.editedItem = Object.assign({}, response.data);
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
                this.getElectricForPlate()
            }
        },
        nextOrDoneText() {
            return this.e1 === this.steps ? 'Concluir' : 'Próximo'
        },
        goBack() {
            if (this.e1 !== 1) {
                this.e1--
                this.updateLastStep()
            } else {
                this.save()
            }
        },
        goForward() {
            if (this.e1 !== this.steps) {
                this.e1++
                this.updateLastStep()
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
                ultima_etapa: this.e1,
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

<style lang="scss" scoped>
.group_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

th,
td {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.sheet-item {
    width: 100vw;

    @media only screen and (min-width: 768px) {
        width: 50vw;
    }
}
</style>