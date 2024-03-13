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
                                Inspeção visual da Base das Fontes
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>1. Base das fontes</span>
                            <span class="px-5">✓ Verificar pintura, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e abaulamentos.</span>
                            <v-img :src="image1" height="200" @click="showOverlay(image1)"></v-img>
                            <span class="text-center mb-2"><i>Figura 1 – Base das fontes</i></span>
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
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
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
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Inspeção visual da Tampa Posterior
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>2. Tampa posterior AXD</span>
                            <span class="px-5">✓ Verificar pintura, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e abaulamentos.</span>
                            <v-img :src="image2" height="200" @click="showOverlay(image2)"></v-img>
                            <span class="text-center mb-2"><i>Figura 2 – Tampa posterior AXD</i></span>
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
                                        <th scope="row">TAMPA POSTERIOR AXD 1001 - 1001.01.02.02.02</th>
                                        <td>9269</td>
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
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Inspeção visual da Carcaça
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>3. Carcaça AXD</span>
                            <span class="px-5">✓ Verificar pintura, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e abaulamentos.</span>
                            <v-img :src="image3" height="200" @click="showOverlay(image3)"></v-img>
                            <span class="text-center mb-2"><i>Figura 3 – Carcaça AXD</i></span>
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
                                        <th scope="row">CARCACA AXD 1001 (BASE CARCAÇA 1001.01.01.01 /
                                            FECHAMENTO DA CARCAÇA 1001.01.01.02)</th>
                                        <td>8355</td>
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
                                Inspeção visual da Base das Placas
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>4. Base das placas</span>
                            <span class="px-5">✓ Verificar pintura, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e abaulamentos.</span>
                            <v-img :src="image4" height="200" @click="showOverlay(image4)"></v-img>
                            <span class="text-center mb-2"><i>Figura 4 – Base das placas AXD</i></span>
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
                                        <th scope="row">BASE PLACAS AXD 1001 - 1001.01.02.01.01</th>
                                        <td>8356</td>
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
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Montagem dos componentes da tampa posterior
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>5. Tampa posterior</span>
                            <span class="px-5">✓ Colocar os componentes em seus respectivos lugares.</span>
                            <v-img :src="image5" height="200" @click="showOverlay(image5)"></v-img>
                            <span class="text-center mb-2"><i>Figura 5 Tampa posterior AXD</i></span>
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
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CHAVE BOTAO AÇO INOX. C/ SIMB. POWER ILUMINADO 19mm
                                            CORES DIVERSAS</th>
                                        <td>9058</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PORTA FUSÍVEL 5X20 C/ ROSCA PAINEL BLX PRETO</th>
                                        <td>1228</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TOMADA AC FÊMEA 3 TERMINAIS AC-04 / AS-07 FUSIVEL
                                            FIXAÇÃO CHASSIS</th>
                                        <td>3597</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PUXADOR EMBUTIDO PRETO 30.77.110.01 (TASCO 92998)</th>
                                        <td>5016</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C CHATA 3X20 INOX</th>
                                        <td>4375</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PORCA SEXTAVADA 3MM</th>
                                        <td>3402</td>
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
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Colocação dos rebites na Base das Fontes
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>6. Base das fontes</span>
                            <span class="px-5">✓ Colocar os rebites.</span>
                            <v-img :src="image6" height="200" @click="showOverlay(image6)"></v-img>
                            <span class="text-center mb-2"><i>Figura 6 – Base das fontes com tampa</i></span>
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
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">REBITE ROSC INTERNA M040-020.000C</th>
                                        <td>9716</td>
                                        <td>UN</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">REBITE ROSC INTERNA M030-015.000C</th>
                                        <td>5831</td>
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
                                Instalação do trilho interno
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>7. Base das fontes</span>
                            <span class="px-5">✓ Colocar os trilhos.</span>
                            <span class="px-5">✓ Deixar os trilhos rente a frente da base das fontes.</span>
                            <v-img :src="image7" height="200" @click="showOverlay(image7)"></v-img>
                            <span class="text-center mb-2"><i>Figura 7 – Base das fontes com tampa</i></span>
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
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">REBITE ROSC INTERNA M040-020.000C</th>
                                        <td>9716</td>
                                        <td>UN</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TRILHO TELESCOPICO LIGHT 300MM HD 3009</th>
                                        <td>9312</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>6</td>
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
                                Instalação do trilho externo e os pés de borracha
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>8. Carcaça AXD</span>
                            <span class="px-5">✓ Colocar os pés de borracha com arruela.</span>
                            <span class="px-5">✓ Essa parte dos trilhos são fixadas com porcas e não rebites.</span>
                            <span class="px-5">✓ O trilho deve ser lixado no lado do fim de curso até perto da
                                borracha.</span>
                            <v-img :src="image8" height="200" @click="showOverlay(image8)"></v-img>
                            <v-img :src="image8_2" height="200" @click="showOverlay(image8_2)"></v-img>
                            <span class="text-center mb-2"><i>Figura 8 – Carcaça AXD</i></span>
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
                                        <th scope="row">CARCACA AXD 1001 (BASE CARCAÇA 1001.01.01.01 /
                                            FECHAMENTO DA CARCAÇA 1001.01.01.02)</th>
                                        <td>8355</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">BORRACHA P/ PE DE CAIXA MINI LUDOVICO 30MM</th>
                                        <td>498</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ARRUELA LISA 4 MM</th>
                                        <td>2244</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 5 X 8 INOX</th>
                                        <td>9724</td>
                                        <td>UN</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PORCA SEXT. MA 5MM</th>
                                        <td>260</td>
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
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Instalação dos conectores
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>9. Fixação cabo unidade AXD</span>
                            <span class="px-5">✓ Fixar os conectores.</span>
                            <span class="px-5">✓ Não forçar os conectores ao parafusar.</span>
                            <v-img :src="image9" height="200" @click="showOverlay(image9)"></v-img>
                            <span class="text-center mb-2"><i>Figura 9 – Fixação cabo unidade AXD</i></span>
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
                                        <th scope="row">FIXACAO CABO UNIDADE AXD 1001 - 1001.01.03</th>
                                        <td>9002</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR ITC 4 VIAS M16 MACHO PARA PAINEL QUADRADA
                                            IP67 10A (SKU: CQV43PT)</th>
                                        <td>9254</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CONECTOR ITC 8 VIAS M24 MACHO PARA PAINEL QUADRADA
                                            IP67 10A (SKU: CQV83-PT)</th>
                                        <td>9252</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NL4MPXX - CONECTOR SPEAKON PRETO MACHO (ANTIGO
                                            NL4MP)</th>
                                        <td>398</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADADA 3X16 INOX (CISER
                                            28410500)</th>
                                        <td>4</td>
                                        <td>UN</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C CHATA 3X20 INOX</th>
                                        <td>4375</td>
                                        <td>UN</td>
                                        <td>2</td>
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
                                Fixação do suporte de cabos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>10. Tampa posterior AXD</span>
                            <span class="px-5">✓ Fixar o suporte de cabos na tampa.</span>
                            <span class="px-5">✓ Usar porcas de pressão.</span>
                            <span class="px-5">✓ Regular a posição para dar o aperto final, a regulagem deve ser feita
                                na carcaça.</span>
                            <v-img :src="image10" height="200" @click="showOverlay(image10)"></v-img>
                            <span class="text-center mb-2"><i>Figura 10 – Tampa posterior AXD</i></span>
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
                                        <th scope="row">TAMPA POSTERIOR AXD 1001 - 1001.01.02.02.02</th>
                                        <td>9269</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">FIXACAO CABO UNIDADE AXD 1001 - 1001.01.03</th>
                                        <td>9002</td>
                                        <td>UN</td>
                                        <td>1</td>
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
                                Marcação dos Furos da Base das Fontes com a Tampa Posterior
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>11. Montagem e marcação para furação</span>
                            <span class="px-5">✓ Colocar a base das fontes no trilho da carcaça.</span>
                            <span class="px-5">✓ Encaixar a tampa posterior na carcaça, alinhar e fazer as marcações com
                                CANETA.</span>
                            <span class="px-5">✓ Deve-se usar duas brocas para a furação, uma 3MM e outra 4,5MM.</span>
                            <span class="px-5">✓ Para “escariar” deve ser feito com uma broca 12MM, só para tirar as
                                rebarbas.</span>
                            <v-img :src="image11" height="200" @click="showOverlay(image11)"></v-img>
                            <span class="text-center mb-2"><i>Figura 11 – Montagem AXD</i></span>
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
                                        <th scope="row">FIXACAO CABO UNIDADE AXD 1001 - 1001.01.03</th>
                                        <td>9002</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CARCACA AXD 1001 (BASE CARCAÇA 1001.01.01.01 /
                                            FECHAMENTO DA CARCAÇA 1001.01.01.02)</th>
                                        <td>8355</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TAMPA POSTERIOR AXD 1001 - 1001.01.02.02.02</th>
                                        <td>9269</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
                                        <td>UN</td>
                                        <td>1</td>
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
                                Fixação da Base das Fontes com a Tampa Posterior
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>12. Colocação dos rebites</span>
                            <span class="px-5">✓ Depois de feito a furações deve ser colocado os rebites.</span>
                            <span class="px-5">✓ Na colocação dos parafusos não os forçar.</span>
                            <span class="px-5">✓ Primeiro colocar todos os parafusos para depois dar o aperto
                                final.</span>
                            <v-img :src="image12" height="200" @click="showOverlay(image12)"></v-img>
                            <span class="text-center mb-2"><i>Figura 12 – Montagem AXD</i></span>
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
                                        <th scope="row">CARCACA AXD 1001 (BASE CARCAÇA 1001.01.01.01 /
                                            FECHAMENTO DA CARCAÇA 1001.01.01.02)</th>
                                        <td>8355</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TAMPA POSTERIOR AXD 1001 - 1001.01.02.02.02</th>
                                        <td>9269</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">BASE FONTES COM TAMPA AXD 1001 - 1001.01.02.02.01</th>
                                        <td>8357</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4 X 12 - INOX.</th>
                                        <td>5804</td>
                                        <td>UN</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="13">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação dos pés do suporte de unidades e relógio
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>13. Ponteira externa</span>
                            <span class="px-5">✓ Verificar enegrecimento, mudanças de tonalidade.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image13" height="200" @click="showOverlay(image13)"></v-img>
                            <span class="text-center mb-2"><i>Figura 13 – Ponteira externa</i></span>
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
                                        <th scope="row">PINO SUPORTE FONTE ZPOWER - 06.03.04</th>
                                        <td>7362</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PONTEIRA EXTERNA PVC P/ TUBO 5/8 - PÉ DE MESA/CADEIRA
                                            P/. MORSA ZPOWER</th>
                                        <td>7363</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="14">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação do suporte de relógio (Viga)
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>14. Haste guia horizontal 12x12 MM</span>
                            <span class="px-5">✓ Verificar enegrecimento, mudanças de tonalidade.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image14" height="200" @click="showOverlay(image14)"></v-img>
                            <span class="text-center mb-2"><i>Figura 14 – Haste guia horizontal 12x12 MM</i></span>
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
                                        <th scope="row">Haste guia horizontal 12x12x180 MM
                                            VIGA QUADRADA AXD 1001.02.03.01</th>
                                        <td>9541</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="15">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação do Engaste Quadrado
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>15. Regulador de posição</span>
                            <span class="px-5">✓ Verificar enegrecimento, mudanças de tonalidade.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image15" height="200" @click="showOverlay(image15)"></v-img>
                            <span class="text-center mb-2"><i>Figura 15 – Regulador de posição</i></span>
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
                                        <th scope="row">ESGASTE QUADRADO AXD 1001.02.05.01</th>
                                        <td>9543</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MANIPULO M6x13-RAC</th>
                                        <td>4059</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TAMPA VIGA AXD 1001.02.04</th>
                                        <td>9542</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="16">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação do suporte de relógio (Coluna)
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>16. Haste guia vertical 12x12 MM</span>
                            <span class="px-5">✓ Verificar enegrecimento, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image16" height="200" @click="showOverlay(image16)"></v-img>
                            <span class="text-center mb-2"><i>Figura 16 – Haste vertical 12x12 MM</i></span>
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
                                        <th scope="row">Haste vertical 12x12 MM
                                            COLUNA QUADRADA AXD 1001.02.02.01</th>
                                        <td>9540</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ISOLADOR DE NYLON AXD 1001.02.01</th>
                                        <td>9539</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ARRUELA LISA 3/16 ZINCADO BRANCO</th>
                                        <td>6800</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C CILINDRICA 10 X 30 ENEGRECIDO</th>
                                        <td>231</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="17">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação da Mesa de Teste e Suporte de Unidades
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>17. Mesa de teste</span>
                            <span class="px-5">✓ Verificar enegrecimento, mudanças de tonalidade e arranhões.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image17" height="200" @click="showOverlay(image17)"></v-img>
                            <span class="text-center mb-2"><i>Figura 17– Mesa de teste</i></span>
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
                                        <th scope="row">SUPORTE (FONTE) 06.03.01</th>
                                        <td>4067</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CASTANHA (FONTE) 06.03.02</th>
                                        <td>4066</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PINO ELAST 3X18</th>
                                        <td>5810</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 5 X 10</th>
                                        <td>1378</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="18">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação dos Parafusos
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>18. Parafusos e arruela</span>
                            <span class="px-5">✓ Verificar se não estão espanados.</span>
                            <span class="px-5">✓ Rachaduras e oxidações.</span>
                            <v-img :src="image18" height="200" @click="showOverlay(image18)"></v-img>
                            <span class="text-center mb-2"><i>Figura 18 – Parafusos e arruela</i></span>
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
                                        <th scope="row">PARAFUSO ALLEN C/C CILINDRICA 10 X 30 ENEGRECIDO</th>
                                        <td>1378</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ARRUELA LISA 3/16 ZINCADO BRANCO</th>
                                        <td>6800</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="19">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes do Relógio Comparador
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>19. Conjunto relógio</span>
                            <span class="px-5">✓ Verificar rachaduras no relógio.</span>
                            <span class="px-5">✓ Verificar se o cabo não está rompido.</span>
                            <span class="px-5">✓ Verificar estado da agulha.</span>
                            <v-img :src="image19" height="200" @click="showOverlay(image19)"></v-img>
                            <span class="text-center mb-2"><i>Figura 19 – Conjunto relógio</i></span>
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
                                        <th scope="row">CABO DE DADOS MINI PARA USB 2.0 1 METRO (RELÓGIO
                                            COMPARADOR)</th>
                                        <td>9336</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">RELOGIO COMPARADOR DIGITAL MILESIMAL (0,001MM)</th>
                                        <td>3813</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">AGULHA HIPODÉRMICA PARA USO ÚNICO/ESTÉRIL 18G X 1.1/2"
                                            (40MM X 1,2MM)</th>
                                        <td>9572</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GUIA DA AGULHA 1001.02.07.01</th>
                                        <td>9574</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PINO GUIA E PRENSA AGULHA 1001.02.07</th>
                                        <td>9573</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="20">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Verificação de componentes do Sensor de Detonação
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>20. Cabo suporte e sensor de detonação</span>
                            <span class="px-5">✓ Verificar estrutura do conector.</span>
                            <span class="px-5">✓ Verificar se a rachaduras no cabo.</span>
                            <span class="px-5">✓ Verificar se o anel não está ressecado.</span>
                            <span class="px-5">✓ Fixação do Parafuso do Sensor com Torque de 3kgf.m.</span>
                            <v-img :src="image20" height="200" @click="showOverlay(image20)"></v-img>
                            <span class="text-center mb-2"><i>Figura 20 – Carcaça AXD</i></span>
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
                                        <th scope="row">CABO SUPORTE DOS ATUADORES - AXD 1001</th>
                                        <td>9325</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO SEXT. FLANGEADO 8X30 BICROM</th>
                                        <td>5090</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ANEL 4 x 1,02 (PARA RETORNO 6805)</th>
                                        <td>6806</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">SENSOR DETONACAO DS 2118</th>
                                        <td>8141</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="21">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Procedimento Final de montagem suporte de unidades
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>21. Procedimentos</span>
                            <span class="px-8">a. Montagem do Suporte de
                                Unidades:</span>
                            <span class="px-5">✓ Fixar as três ponteiras externas na
                                mesa de teste</span>
                            <span class="px-5">✓ Colocar o anel O’ring no parafuso
                                8x30 centralizado no meio do sensor</span>
                            <span class="px-5">✓ Fixar o sensor de detonação com 3 kg
                                de torque no parafuso 8x30</span>
                            <span class="px-5">✓ Conectar o cabo suporte no sensor de
                                detonação</span>
                            <span class="px-5">✓ Parafusar o terra do cabo de suporte
                                na carcaça com o parafuso enegrecido
                                5x10</span>
                            <v-img :src="image21" height="200" @click="showOverlay(image21)"></v-img>
                            <span class="text-center mb-2"><i>Figura 21 – Suporte de unidades</i></span>
                        </div>
                        <div class="px-5">
                            <h4 class="text-center">Montagem do Suporte de Unidades:</h4>
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">SUPORTE (FONTE) 06.03.01</th>
                                        <td>4067</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CASTANHA (FONTE) 06.03.02</th>
                                        <td>4066</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PINO ELAST 3X18</th>
                                        <td>5810</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 5 X 10</th>
                                        <td>1378</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PINO SUPORTE FONTE ZPOWER - 06.03.04</th>
                                        <td>7362</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PONTEIRA EXTERNA PVC P/ TUBO 5/8 - PÉ DE MESA/CADEIRA
                                            P/. MORSA ZPOWER</th>
                                        <td>7363</td>
                                        <td>UN</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO SUPORTE DOS ATUADORES - AXD 1001</th>
                                        <td>9325</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO SEXT. FLANGEADO 8X30 BICROM</th>
                                        <td>5090</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ANEL 4 x 1,02 (PARA RETORNO 6805)</th>
                                        <td>6806</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">SENSOR DETONACAO DS 2118</th>
                                        <td>8141</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="22">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Procedimento de montagem suporte de relógio
                            </h3>
                        </div>
                        <div class="d-flex flex-column mx-5 my-4">
                            <span>22. Procedimentos</span>
                            <span class="px-8">a. Montagem do Suporte de
                                Relógio:</span>
                            <span class="px-5">✓ Fixar a haste guia vertical na mesa de
                                teste</span>
                            <span class="px-5">✓ Encaixar o regulador de posição na
                                haste vertical</span>
                            <span class="px-5">✓ Colocar a arruela com o parafuso
                                inox na ponta da haste vertical</span>
                            <span class="px-5">✓ Colocar a haste horizontal no
                                regulador de posição</span>
                            <span class="px-5">✓ Encaixar o relógio na haste
                                horizontal</span>
                            <v-img :src="image21" height="200" @click="showOverlay(image21)"></v-img>
                            <span class="text-center mb-2"><i>Figura 22 – Suporte de unidades</i></span>
                        </div>
                        <div class="px-5">
                            <h4 class="text-center">Montagem do Suporte de Unidades:</h4>
                            <v-table density="compact" class="my-1 border">
                                <tbody>
                                    <tr>
                                        <th scope="col">Nome do Produto</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">Unid</th>
                                        <th scope="col">Quantidade</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Haste guia horizontal 12x12x180 MM
                                            VIGA QUADRADA AXD 1001.02.03.01</th>
                                        <td>9541</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Haste guia horizontal 12x12x180 MM
                                            VIGA QUADRADA AXD 1001.02.03.01</th>
                                        <td>9541</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ESGASTE QUADRADO AXD 1001.02.05.01</th>
                                        <td>9543</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MANIPULO M6x13-RAC</th>
                                        <td>4059</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TAMPA VIGA AXD 1001.02.04</th>
                                        <td>9542</td>
                                        <td>UN</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Haste vertical 12x12 MM
                                            COLUNA QUADRADA AXD 1001.02.02.01</th>
                                        <td>9540</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ISOLADOR DE NYLON AXD 1001.02.01</th>
                                        <td>9539</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C ABAULADA 4X10 INOX</th>
                                        <td>6592</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ARRUELA LISA 3/16 ZINCADO BRANCO</th>
                                        <td>6800</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PARAFUSO ALLEN C/C CILINDRICA 10 X 30 ENEGRECIDO</th>
                                        <td>231</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO DE DADOS MINI PARA USB 2.0 1 METRO (RELÓGIO
                                            COMPARADOR)</th>
                                        <td>9336</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">RELOGIO COMPARADOR DIGITAL MILESIMAL (0,001MM)</th>
                                        <td>3813</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">AGULHA HIPODÉRMICA PARA USO ÚNICO/ESTÉRIL 18G X 1.1/2"
                                            (40MM X 1,2MM)</th>
                                        <td>9572</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GUIA DA AGULHA 1001.02.07.01</th>
                                        <td>9574</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">PINO GUIA E PRENSA AGULHA 1001.02.07</th>
                                        <td>9573</td>
                                        <td>UN</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CABO DE DADOS MINI PARA USB 2.0 1 METRO (RELÓGIO
                                            COMPARADOR)</th>
                                        <td>9336</td>
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
import StepMechanicalService from '@/services/StepMechanicalService'
import PlateService from '@/services/PlateService'
import dialogSector from '@/components/dialog_sector.vue'
import image1 from '@/assets/mechanical/image1.png'
import image2 from '@/assets/mechanical/image2.png'
import image3 from '@/assets/mechanical/image3.png'
import image4 from '@/assets/mechanical/image4.png'
import image5 from '@/assets/mechanical/image5.png'
import image6 from '@/assets/mechanical/image6.png'
import image7 from '@/assets/mechanical/image7.png'
import image8 from '@/assets/mechanical/image8.png'
import image8_2 from '@/assets/mechanical/image8_2.png'
import image9 from '@/assets/mechanical/image9.png'
import image10 from '@/assets/mechanical/image10.png'
import image11 from '@/assets/mechanical/image11.png'
import image12 from '@/assets/mechanical/image12.png'
import image13 from '@/assets/mechanical/image13.png'
import image14 from '@/assets/mechanical/image14.png'
import image15 from '@/assets/mechanical/image15.png'
import image16 from '@/assets/mechanical/image16.png'
import image17 from '@/assets/mechanical/image17.png'
import image18 from '@/assets/mechanical/image18.png'
import image19 from '@/assets/mechanical/image19.png'
import image20 from '@/assets/mechanical/image20.png'
import image21 from '@/assets/mechanical/image21.png'

export default defineComponent({
    data: () => ({
        e1: 1,
        steps: 22,
        mechanicals: null,
        dialog: false,
        disableBack: true,
        selectedImg: null,
        overlay: false,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        image6: image6,
        image7: image7,
        image8: image8,
        image8_2: image8_2,
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
            this.getMechanicalForPlate()
            window.setTimeout(() => {
                this.createOrUpdateStepMechanical()
            }, 200)
        },
        async getMechanicalForPlate() {
            let param = {
                id_placa: this.$route.params.id
            }
            let response = await StepMechanicalService.getAll(param)

            if (response.data) {
                this.mechanicals = response.data

                if (this.mechanicals.ultima_etapa) {
                    this.e1 = this.mechanicals.ultima_etapa
                }
            }

            this.editedIndex = 0
            this.editedItem = Object.assign({}, response.data);
        },
        async createOrUpdateStepMechanical() {
            let params = {
                id_placa: this.$route.params.id
            }

            if (this.mechanicals) {
                params = {
                    ...params,
                }
                await StepMechanicalService.update(this.mechanicals.id, params)
            } else {
                params = {
                    ...params,
                    status: 0,
                }

                await StepMechanicalService.create(params)
                this.getMechanicalForPlate()
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
        async updateLastStep() {
            let params = {
                ultima_etapa: this.e1,
                status: 1,
            }

            await StepMechanicalService.update(this.mechanicals.id, params)
            this.updatePlateInProgress()
        },
        async updatePlateInProgress() {
            let params = {
                status: 1,
            }

            await PlateService.update(this.$route.params.id, params)
        },
        save() {
            this.dialog = true
        },
        showOverlay(selectedImg) {
            this.selectedImg = selectedImg
            this.overlay = !this.overlay
        },
        async saveDialog(technician) {
            let params = {
                id_placa: this.$route.params.id,
                id_tecnico: technician,
                status: 2,
                ultima_etapa: 1,
            }
            await StepMechanicalService.update(this.mechanicals.id, params)
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
</style>import type StepMechanicalService from '@/services/StepMechanicalService'import type StepMechanicalService from
'@/services/StepMechanicalService'
import type { create } from 'node_modules/axios/index.cjs'
