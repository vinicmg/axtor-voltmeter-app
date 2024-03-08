<template>
    <dialogSector :showDialog="dialogSave" @closeDialog="closeSaveDialog" @saveDialog="saveDialog"></dialogSector>
    <v-stepper v-model="e1" alt-labels mobile>
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
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Comunicação com Placa "Desligada"
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <div class="d-flex flex-row mx-10">
                                <span class="d-flex align-center pr-4">1. Testar Conexão de Porta COM do conector J3
                                    (USB-B YH-USB03 Tipo Impressora)</span>
                                <v-img :src="image1" width="150" height="120"></v-img>
                            </div>
                            <div class="text-center">
                                <span>✓ Verificar no Gerenciador de Dispositivos do
                                    Windows se aparece Porta COM</span>
                            </div>
                            <div class="d-flex justify-center border mt-5">
                                <v-img :src="image2" width="300" height="250"></v-img>
                            </div>
                            <div class="text-center">
                                <span><i>Figura 1 - Conexão de Cabo USB para teste de
                                        Comunicação</i></span>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="2">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Energização da Placa AXD1001 sem Firmware Gravado
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <div class="mx-10">
                                <span>1. Utilizar uma Fonte Chaveada com as Tensões VDC nominais de 5V, 12V e
                                    -12V</span>
                                <div class="d-flex justify-center border">
                                    <v-img :src="image3" width="400" height="200"></v-img>
                                </div>
                                <div class="text-center">
                                    <span><i>Figura 2 - Fonte Chaveada e Esquema do Borne</i></span>
                                </div>
                            </div>
                            <div class="mx-10 mt-4">
                                <span>
                                    2. Utilizar o Multímetro de Bancada
                                </span>
                                <div class="d-flex justify-center border">
                                    <v-img :src="image4" width="400" height="200"></v-img>
                                </div>
                                <div class="text-center">
                                    <span><i>Figura 3 - Multímetro de Bancada de Referência</i></span>
                                </div>
                            </div>
                            <div class="mx-10 mt-4">
                                <div class="d-flex flex-column">
                                    <span>3. Alimentação <b>“antes”</b> da gravação do firmware da placa</span>
                                    <span class="pl-5">&bull; Sem gravar</span>
                                    <v-table density="compact" class="border">
                                        <tbody>
                                            <tr>
                                                <td>Consumo da fonte +5V (Ajustado 5,07V) → 30mA a 40mA</td>
                                            </tr>
                                            <tr>
                                                <td>Consumo da fonte +12V (Ajustado 12,0V) → 30mA a 40mA</td>
                                            </tr>
                                            <tr>
                                                <td>Consumo da fonte -12V (Ajustado -12,0V) → -30mA a -40mA</td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </div>
                            </div>
                            <div class="mx-10 mt-4">
                                <span>
                                    4. Exemplo de Medição e Resultados (Pontas de Prova em Série para Medição de
                                    Corrente)
                                </span>
                                <div class="d-flex justify-center border">
                                    <v-img :src="image5" width="400" height="200"></v-img>
                                </div>
                                <div class="text-center">
                                    <span><i>Figura 4 - Exemplo de Medição de Alimentação +5Vcc sem Gravar a
                                            Placa</i></span>
                                </div>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="3">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                GRAVAÇÃO da Placa AXD1001
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <div class="mx-10 d-flex flex-column">
                                <span>1. Utilizar o programa MPLAB X IPE v5.30</span>
                                <span>2. Selecionar o Microcontrolador PIC18F87K22.</span>
                                <span>3. Energizar a Placas AXD1001 com a Fonte do <b>PROCEDIMENTO 2</b></span>
                                <span>4. Selecionar o FIRMWARE: “ZPower10 Bootloader.hex”</span>
                                <div class="d-flex justify-center border">
                                    <v-img :src="image6" width="400" height="200"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 5 - Exemplo de Placa gravada com
                                        sucesso</i></span>
                                <span>5. Abrir o Programa AN1310 para Gravar o FIRMWARE
                                    operacional das placas.</span>
                                <div class="d-flex flex-row">
                                    <span>
                                        6. Utilizar o Procedimento de Gravação por BOOTLOADER adotado para a Fonte
                                        ZPOWER e o Cabo USB para Impressora.
                                    </span>
                                    <v-img :src="image1" width="150" height="120"></v-img>
                                </div>
                                <div class="d-flex justify-center border mb-2">
                                    <v-img :src="image7" width="500" height="400"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 6 - Tela de Gravação do BOOTLOADER</i></span>
                                <span>
                                    7. Selecionar o FIRMWARE: “AXD1001 1.05”.
                                </span>
                                <span>
                                    8. Realizar a gravação e verificar se a placa “APITOU”.
                                </span>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="4">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Energização da Placa AXD1001 com Firmware Gravado
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <div class="mx-10 d-flex flex-column">
                                <span>1. Utilizar uma Fonte Chaveada com as Tensões VDC nominais de 5V, +12V e
                                    -12V</span>
                                <span>2. Repetir o <b>PROCEDIMENTO 2</b> e verificar estes resultados</span>
                                <v-table density="compact" class="border mb-2">
                                    <tbody>
                                        <tr>
                                            <th>Consumo da fonte +5V (Ajustado 5,07V) → 50mA a 60mA</th>
                                            <td>
                                                <v-text-field v-model="editedItem.dados.posgrav_5" variant="underlined"
                                                    density="compact" type="number"></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Consumo da fonte +12V (Ajustado 12,0V) → 100mA a 110mA (após bip)</th>
                                            <td>
                                                <v-text-field v-model="editedItem.dados.posgrav_12" variant="underlined"
                                                    density="compact" type="number"></v-text-field>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Consumo da fonte -12V (Ajustado -12,0V) → -30mA a -40mA</th>
                                            <td>
                                                <v-text-field v-model="editedItem.dados.posgrav_neg12"
                                                    variant="underlined" density="compact" type="number"></v-text-field>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                                <span>3. Exemplo de Medição e Resultados (Pontas de Prova em Série para Medição de
                                    Corrente)</span>
                                <div class="d-flex justify-center border mb-2">
                                    <v-img :src="image8" width="500" height="150"></v-img>
                                </div>
                                <span class="text-center"><i>Figura 7 - Exemplo de Medição de Corrente no Pino +5Vcc com
                                        Placa Gravada</i></span>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="5">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Ajuste de TRIMPOTs da Placa AXD1001 com placa desenergizada
                            </h3>
                        </div>
                        <div class="mx-5 my-4">
                            <span>1. Desenergizar a Placa AXD1001 retirando o conector da Fonte Chaveada</span>
                            <span>2. Conferência de TRIMPOTs utilizando o Multímetro de Bancada Keysight 34465A</span>
                            <v-table density="compact" class="border mb-2">
                                <tbody>
                                    <tr>
                                        <th>RV7 = 3,62 kΩ</th>
                                        <th>RV8 = 2,47 kΩ</th>
                                        <th>RV6 = 4,30 kΩ</th>
                                    </tr>
                                    <tr>
                                        <th>RV5 = 96,10 kΩ</th>
                                        <th>RV4 = 96,4 kΩ</th>
                                        <th>RV1 = 4,58 kΩ</th>
                                    </tr>
                                    <tr>
                                        <th>RV2 = 7,22 kΩ</th>
                                        <th>RV3= 3,44 kΩ</th>
                                        <th>RV9 = 4,95 kΩ</th>
                                    </tr>
                                    <tr>
                                        <th>RV10 = 525Ω (R84)</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.trim_rv10" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span>3. Localizar os TRIMPOTs para realizar o pré-ajuste</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image9" width="500" height="250"></v-img>
                            </div>
                            <div class="text-center mb-2">
                                <span><i>Figura 8 - Localização dos TRIMPOTs para
                                        pré-ajuste</i></span>
                            </div>
                            <div class="d-flex flex-column">
                                <span>4. Realizar o ajuste dos TRIMPOTs utilizando as Ponteiras do Multímetro para
                                    medição
                                    de
                                    Resistência</span>
                                <span class="pl-5">
                                    a. Atenção!!! para a Posição RV10 a medição diferente das demais
                                </span>
                                <div class="d-flex justify-center border mb-2">
                                    <v-img :src="image10" width="500" height="150"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 9 - Esquema para Posicionamento das Ponteiras
                                        do Multímetro para Medição de Resistência</i></span>
                                <span>5. Exemplo para realizar o ajuste dos TRIMPOTs observando o valor da Resistência
                                    no
                                    Multímetro Digital</span>
                                <div class="d-flex justify-center border mb-2">
                                    <v-img :src="image11" width="500" height="150"></v-img>
                                </div>
                                <span class="text-center"><i>Figura 10 – Exemplo de Medição de Resistência do TRIMPOT
                                        “RV7”</i></span>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="6">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center mt-2">
                            <h3>
                                Montagem da Placa AXD1001 no Equipamento
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Com a Placa AXD1001 gravada e ajustada, realizar a montagem e fixação no CHASSI do
                                equipamento,</span>
                            <span>2. Realizar a montagem da placa Placas FV300, a qual deve estar previamente testada e
                                aprovada
                                pela produção,</span>
                            <span>3. Conectar os cabos na Placa AXD1001 e pressionar o botão LIGA:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image12" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 11 - Montagem da Placa AXD1001 e FV300 no
                                    CHASSI</i></span>
                            <span>4. Verificar a tensão de referência:</span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Tensão de Nominal</th>
                                        <th>Pinagem/ Local</th>
                                        <th>Valor Esperado ± 5%</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>+5V</th>
                                        <th>J8 / 1</th>
                                        <th>5,080V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.j8_1" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>GND /0V</th>
                                        <th>J8 / 2</th>
                                        <th>0V</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>+12V</th>
                                        <th>J8 / 3</th>
                                        <th>11,18V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.j8_3" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>-12V</th>
                                        <th>J8 / 4</th>
                                        <th>-11,92V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.j8_4" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image13" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 12 - Esquema de Alimentação do Conector J8 e Exemplo de
                                    Medição do
                                    +5Vcc</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="7">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Verificação das Tensões de Referência da Placa AXD1001
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Com a Placa AXD1001 gravada e ajustada, realizar a Medição da Tensão +5Vcc de
                                Referência
                                indicado pelo TestPoint TP3 e pelo Capacitor C3:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image14" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 13 - Localização da Area de Medição de Tensão
                                    +5Vcc</i></span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Ponto</th>
                                        <th>Valor
                                            Esperado ± 0,5%</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>TP3 e GND</th>
                                        <th>5,001V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.tp3" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>C3 e GND</th>
                                        <th>5,001V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.c3" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span class="mt-2">2. Utilizar as Ponteira do Multímetro nos pontos indicado abaixo:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image15" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 14 - Esquema de Pontos de Medição da Tensão de
                                    Referência</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="8">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Verificação das Tensões dos Reguladores da Placa AXD1001
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Com a Placa AXD1001 gravada e ajustada, realizar a Medição da Tensão +8Vcc e -8Vcc
                                indicado pelos componentes U12 e U13:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image16" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 15 - Localização da Area de Medição de Tensão +8Vcc
                                    e -8Vcc</i></span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Ponto</th>
                                        <th>Valor
                                            Esperado ± 0,5%</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>U12 - PIN3</th>
                                        <th>+8,001V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.u12_pin3" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>U13 - PIN3</th>
                                        <th>-8,010V</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.u13_pin3" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span class="mt-2">2. Utilizar as Ponteira do Multímetro nos pontos indicado abaixo:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image17" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 16 - Esquema de Pontos de Medição da Tensão dos
                                    Reguladores de Tensão</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="9">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Utilizando o AXDControl.exe
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <div class="d-flex flex-row">
                                <span class="d-flex align-center">1. Abrir o Programa o AXDControl.exe</span>
                                <div class="d-flex justify-center pl-2">
                                    <v-img :src="image18" width="50" height="50"></v-img>
                                </div>
                            </div>
                            <span>2. Conectar placa AXD1001 com cabo Conversor USB → RS485. Verificar Porta COM e
                                testar
                                a Comunicação, lendo o “Parâmetro 11” e obtendo o resultado com “Valor 200”.</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image19" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 17 - Sequência de Comandos para Comunicação com
                                    AXDControl</i></span>
                            <span>3. Na aba “Parâmetros Máquina” realizar o ENVIO dos Parâmetros:</span>
                            <div class="d-flex justify-center border mb-2">
                                <v-img :src="image20" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 18 - Sequência de Comandos para Envio de Parâmetros com
                                    AXDControl</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="10">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Configuração da Tensão de Referência Vref
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Na aba “Geral” Localizar na seção ConfigMaquina o Parâmetro <b>“Vref”</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image21" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-3"><i>Figura 19 - Ajuste e Gravação da Tensão de Referência
                                    Vref</i></span>
                            <span>2. Utilizar as Ponteira do Multímetro no ponto TP3 indicado abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image22" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-3"><i>Figura 20 - Esquema de Pontos de Medição da Tensão de
                                    Referência</i></span>
                            <span>3. Verificar o Valor da Tensão Vref, conforme PROCEDIMENTO 7 e <b>“Salvar
                                    Config”</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image23" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 21 - Valor aproximado para Tensão "Vref "</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="11">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Ajuste de Frequências
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Na aba “Aferição” utilizar o GERADOR DE SINAIS:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image24" width="500" height="400"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 22 - Seleção de frequências para ajuste pelo
                                    TRIMPOTs</i></span>
                            <span>2. Aplicar as pontas de prova do Osciloscópio no TESTPOINT “TP1”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image25" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 23 - Posição do Osciloscópio para Ajuste de
                                    Frequências no TP1</i></span>
                            <span>3. Ajustar pelos TRIMPOTs indicados no <b>“PROCEDIMENTO 5”</b> as frequências da
                                Tabela
                                abaixo e conferir no Osciloscópio os resultados:</span>
                            <caption class="border mt-2"><b>Ajuste de Frequências para Onda Quadrada</b></caption>
                            <v-table density="compact" class="border mb-2">
                                <tbody>
                                    <tr>
                                        <th>
                                            <div class="d-flex flex-column text-center">
                                                <span>100Hz / Duty Cycle 50%</span>
                                                <span>RV3 (Freq.)</span>
                                                <span>RV4 (Duty)</span>
                                            </div>
                                        </th>
                                        <th>TP1</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div class="d-flex flex-column text-center">
                                                <span>1kHz / Duty Cycle 50%</span>
                                                <span>RV2 (Freq.)</span>
                                                <span>RV6 (Duty)</span>
                                            </div>
                                        </th>
                                        <th>TP1</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div class="d-flex flex-column text-center">
                                                <span>10kHz / Duty Cycle 50%</span>
                                                <span>RV1 (Freq.)</span>
                                                <span>RV5 (Duty)</span>
                                            </div>
                                        </th>
                                        <th>TP1</th>
                                        <th></th>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span>
                                4. Exemplo de resultado para 100Hz, utilizando os TRIMPOTs RV3 e RV4:
                            </span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image26" width="500" height="300"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 24 - Exemplo de Ajuste para Onda Quadrada de
                                    100Hz</i></span>
                            <span>5. Realizar o Ajuste da Frequências de 100Hz, 1kHz e 10kHz, após ajuste realizar a
                                conferência e
                                repetir os ajustes se precisar.</span>
                            <span>6. A seguir aplicar as pontas de prova do Osciloscópio no TESTPOINT “TP2”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image27" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 25 - Posição do Osciloscópio para Ajuste de
                                    Frequências no TP2</i></span>
                            <span>7. Ajustar pelos TRIMPOTs indicados no <b>“PROCEDIMENTO 5”</b> a amplitude e offset da
                                Tabela
                                abaixo e conferir no Osciloscópio os resultados:</span>
                            <caption class="border"><b>Ajuste de Frequências para Onda Senoidal</b></caption>
                            <v-table density="compact" class="border mb-2">
                                <tbody>
                                    <tr>
                                        <th>
                                            <div class="d-flex flex-column text-center">
                                                <span>VMÁX <b>(+1,4V)</b> / VMIN <b>(-1,8V)</b></span>
                                                <span>RV7 (Offset)</span>
                                                <span>RV8 (Amplitude)</span>
                                            </div>
                                        </th>
                                        <th>
                                            TP2
                                        </th>
                                        <th>100Hz
                                            apenas</th>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span>8. Exemplo de resultado para 100Hz, utilizando os TRIMPOTs RV3 e RV4:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image28" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center"><i>Figura 26 - Exemplo de Ajuste para Onda Senoidal de
                                    100Hz</i></span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="12">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Ajuste de Sensibilidade de Corrente
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e um resistor de 2,2Ω 5W como carga,
                                conectado em
                                série com o Multímetro (Ajustar Amperímetro em Range Manual de 3A).</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image29" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 27 - Aplicação da Carga para Medição de Corrente no
                                    Ajuste de Sensibilidade</i></span>
                            <span>2. Na aba “Aferição” realizar o TESTAR na seção de <b>“Ajuste
                                    sens.corrente”</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image30" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 28 - Tela de Ajuste de Sensibilidade de
                                    Corrente</i></span>
                            <span>3. Verificar na tela do Multímetro o Valor máximo lido e anotar.</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image31" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 29 - Medição de Sensibilidade de
                                    Corrente</i></span>
                            <span>4. ANOTAR o Valor “real” no Multímetro ENVIAR e SALVAR:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image32" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 30 - Avaliação da Sensibilidade de
                                    Corrente</i></span>
                            <span>5. COMPARAR Valor “lido” com o Valor “real” devem ser similares, erro máximo de ±0,1%,
                                no
                                exemplo abaixo o resultado da Sensibilidade foi de “199”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image33" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2"><i>Figura 31 - Resultado da Sensibilidade de
                                    Corrente</i></span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Sensibilidade Calculada</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.sens_calc" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Resultado da Sensibilidade da Corrente</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.res_sens_corr" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
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
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Leitura de Corrente pela FONTE MANUAL
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e um resistor de 2,2Ω 5W como carga,
                                conectado em
                                série com o Multímetro (Ajustar Range Manual em 3A).</span>
                            <span>2. Realizar a conexão do Multímetro conforme a Figura 25 do Procedimento 12.</span>
                            <span>3. Realizar a sequência de acionamento da Figura abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image34" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 32 - Sequência de verificação da leitura de corrente
                                pela Fonte Manual</span>
                            <span>4. Comparar com a leitura do Multímetro, caso não seja similar, ajustar o “PARÂMETRO
                                11”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image35" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 33 - Ajuste de sensibilidade de corrente</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="14">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Carregando PADRÃO de TESTES para Scania 044
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e um resistor de 2,2Ω 5W como carga,
                                conectado em
                                série com o Multímetro (Ajustar Range Manual em 3A).</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image36" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 34 - Carregando Planos de Testes pelo
                                AXDControl</span>
                            <span>2. Abrir os Planos de testes localizados no SERVIDOR da AXTOR:</span>
                            <span class="mx-5">a. \\server\Compartilhado\03-AXD 1001\Planos de teste:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image37" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 35 - Acessando Planos de Testes do Servidor</span>
                            <span>3. Após carregar os planos, a Tela ficará com os dados necessários para o
                                teste:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image38" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 36 - Dados dos Planos de Testes do Servidor da Axtor</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="15">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Correção de PWM A e B do PULSADOR
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e uma Unidade Injetora Scania 044 de
                                Referência.</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image39" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 37 - Forma de Onda Padrão para Scania 044 no Teste de
                                Pulsador</span>
                            <span>2. Obter o valor de “Corrente de Mantem” de 8,4A, conforme Figura acima, caso
                                contrário ajustar
                                os “PARÂMETROS 30 e 31” na aba “GERAL”, utilizar aumentos gradativos (1 a 5 unidades),
                                pois pode ocasionar a QUEIMA da Unidade Injetora:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image40" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 38 - Ajuste da" Corrente de Mantém do Pulsador" pelos
                                PARÂMETROS</span>
                            <span>3. Salvar os Valores Obtidos dos “PARÂMETROS 30 e 31” após ajuste, conforme imagem
                                Figura
                                acima.</span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Parâmetro 30</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.param_30" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Parâmetro 31</th>
                                        <td><v-text-field v-model="editedItem.dados.param_31" variant="underlined"
                                                density="compact" type="number"></v-text-field></td>
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
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Correção de PWM A e B da VEDAÇÃO
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e uma Unidade Injetora Scania 044 de
                                Referência.</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image40" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 39 - Forma de Onda Padrão para Scania 044 no Teste de
                                Pulsador</span>
                            <span>2. Obter o valor de “Corrente de Vedação” de 5,0A, conforme Figura acima, caso
                                contrário ajustar
                                os “PARÂMETROS 32 e 33” na aba “GERAL”, utilizar aumentos gradativos (1 a 5 unidades),
                                pois pode ocasionar a QUEIMA da Unidade Injetora:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image41" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 40 - Ajuste da" Corrente de Mantém do Pulsador" pelos
                                PARÂMETROS</span>
                            <span>3. Salvar os Valores Obtidos dos “PARÂMETROS 32 e 33” após ajuste, conforme imagem
                                Figura
                                acima.</span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Parâmetro 32</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.param_32" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Parâmetro 33</th>
                                        <td><v-text-field v-model="editedItem.dados.param_33" variant="underlined"
                                                density="compact" type="number"></v-text-field></td>
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
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Medição de Corrente de Atracamento
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e uma Unidade Injetora Scania 044 de
                                Referência.</span>
                            <span>2. Na aba “CARACTERISTICAS DO ATUADOR E PULSO” Carregar o PADRÃO Scania 044:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image43" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 41 - Acessando Planos de Testes do Servidor</span>
                            <span>3. Acessar a aba “TESTES” e pressionar a tecla EXECUTA da Seção ATRACAMENTO:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image44" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 42 - Leitura de Indutância no AXDControl</span>
                            <span>4. Obter os valores de atracamento próximos de 12A a 14A em pelo menos 3(três) medidas
                                seguidas. Caso o Valor não seja similar, ajustar o “TRIMPOT RV10” e repetir a
                                leitura:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image45" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 43 - Ajuste de Indutância pelo TRIMPOT RV10</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="18">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Tempo de Resposta
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e uma Unidade Injetora Scania 044 de
                                Referência.</span>
                            <span>2. Utilizar o Suporte de Unidades e Instalar a Unidade:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image46" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 44 - Unidade Injetora montada no Suporte de Unidades
                                da AXD1001</span>
                            <span>3. Realizar previamente os Testes abaixo e obter valores próximos a:</span>
                            <div class="d-flex flex-column mx-5">
                                <span>a. Resistencia = 515 mΩ;</span>
                                <span>b. Indutância = 1,040 uH;</span>
                                <span>c. Atracamento = 12A a 14A;</span>
                            </div>
                            <span>4. Localizar a Seção de Tempo de Resposta (BIP) e <b>“Executar”</b> o Teste de Tempo
                                de Resposta:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image47" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 45 - Tela de Resultados para Tempo de Resposta</span>
                            <span>5. Obter os valores de tempo de resposta próximos de 840us já no primeiro teste com o
                                gráfico
                                constante e sem falhas nos “10 pulsos”.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="19">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Medição de Resistência
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e o Resistor de Referência de 100mΩ.</span>
                            <span>2. Acessar a aba “TESTES” e pressionar “Verificar” e depois a tecla “Executa” da Seção
                                RESISTÊNCIA:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image48" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 46 - Leitura de Indutância no AXDControl</span>
                            <span>3. Obter os valores de Resistencia de <b>80mΩ</b> na primeira leitura;</span>
                            <span>4. Pressionar novamente a tecla “Executa” da Seção RESISTÊNCIA;</span>
                            <span>5. Obter os valores de Resistencia de <b>60mΩ</b> na segunda leitura</span>
                            <span>6. Repetir a sequência do item 2 a 5, em pelo menos 3(três) medidas seguidas.</span>
                            <span>7. Caso o Valor não seja similar, ajustar o “PARAMETRO 28 e 29” e repetir a leitura de
                                resistência da sequência do item 2 a 5:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image49" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 47 - Ajuste de Offset de Resistência</span>
                            <span class="mb-2">8. Após ajustar o “PARAMETRO 28 e 29” e repetir a leitura da sequência do
                                item 2 a 5,
                                SALVAR o CONFIG no parâmetro “Offset Resistencia A” e “Offset Resistencia B”.</span>
                            <span>9. Utilizar o Cabo de Injetores “CABO 1” e uma Unidade Injetora <b>“Scania 044”</b> de
                                Referência.
                                Realizar previamente os Testes abaixo e obter valores próximos a:</span>
                            <div class="d-flex flex-row">
                                <div class="d-flex flex-column">
                                    <span>a. Resistencia = <b>590mΩ</b> na primeira leitura <b>com</b> VERIFICAR</span>
                                    <span>b. Resistencia = <b>510mΩ</b> na segunda leitura <b>sem</b> VERIFICAR</span>
                                </div>
                                <v-img :src="image50" width="100" height=""></v-img>
                            </div>
                            <span>10. Utilizar o Cabo de Injetores “CABO 2” e uma Unidade Injetora <b>“Iveco 004”</b> de
                                Referência.
                                Realizar previamente os Testes abaixo e obter valores próximos a:</span>
                            <div class="d-flex flex-column mx-5">
                                <span>a. Resistencia = <b>385mΩ</b> na primeira leitura <b>com</b> VERIFICAR</span>
                                <span>b. Resistencia = <b>325mΩ</b> na segunda leitura <b>sem</b> VERIFICAR</span>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="20">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Medição de Indutância
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 2” e uma Unidade D12D de Referência.</span>
                            <span>2. Na aba “CARACTERISTICAS DO ATUADOR E PULSO” Carregar o PADRÃO <b>Delphi
                                    E1</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image51" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 48 - Carregando o Plano da Unidade D12D para Teste de
                                Indutância</span>
                            <span>3. Acessar a aba “TESTES” e pressionar a tecla INDUTANCIA:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image52" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 49 - Leitura de Indutância no AXDControl</span>
                            <span>4. Obter os valores de indutância próximos de 11,85mH em pelo menos 3(três) medidas
                                seguidas.</span>
                            <span>5. Caso o Valor não seja similar, ajustar o “TRIMPOT RV8” e repetir a leitura:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image53" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 50 - Ajuste de Indutância pelo TRIMPOT RV8</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="21">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste de Medição de Capacitância
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Utilizar o Cabo de Injetores “CABO 1” e Capacitor de Referência de 4,95uF 250V
                                (Poliéster).</span>
                            <span>2. Acessar a aba “TESTES” e pressionar a tecla Executar da Seção CAPACITÂNCIA:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image54" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 51 - Leitura de Indutância no AXDControl</span>
                            <span>3. Utilizar um Capacitor de Referência de 4,95uF 250V (Poliéster).</span>
                            <span>4. Obter os valores de capacitância próximos de 4950nF em pelo menos 3(três) medidas
                                seguidas.</span>
                            <span>5. Caso o Valor não seja similar, ajustar o “TRIMPOT <b>RV9</b>” e repetir a
                                leitura:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image55" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 52 - Ajuste de Indutância pelo TRIMPOT RV9</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="22">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Carregando o Padrão da 77550 (RANGER)
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Na aba “CARACTERISTICAS DO ATUADOR E PULSO” Carregar o PADRÃO 77550:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image56" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 53 - Carregando o Plano do Injetor 77550 para Teste de
                                Megôhmetro</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="23">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Ajuste Fonte Boost
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Aplicar as ponteiras do Multímetro no conector de saída da Fonte FV300 e realizar a
                                Medição
                                de Tensão:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image57" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 54 - Esquema de Medição de Tensão da Fonte
                                FV300</span>
                            <span>3. Na aba “AFERIÇÃO”, pressionar o botão “LER” da Seção “Ajuste Fonte Boost”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image58" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 55 - Seção de Ajuste da Fonte Boost FV300</span>
                            <span>4. Escrever no Campo “Duty 0 -1023” o valor exato para se obter uma tensão de
                                <b>30Vcc</b> do
                                Multímetro, conforme “Item 2”, neste caso o Duty Min foi de <b>101</b> para uma Tensão
                                de
                                30Vcc:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image59" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 56 - Seção de Ajuste do “DUTY MIN” Fonte Boost
                                FV300</span>
                            <v-table density="compact" class="border mb-2">
                                <tbody>
                                    <tr>
                                        <th>Duty Min</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.duty_min" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span>5. Escrever no Campo “Duty 0 -1023” o valor exato para se obter uma tensão de
                                <b>300Vcc</b>
                                do
                                Multímetro, conforme “Item 2”, neste caso o Duty Max foi de <b>996</b> para uma Tensão
                                de
                                300Vcc:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image60" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 57 - Seção de Ajuste do “DUTY MÁX” Fonte Boost
                                FV300</span>
                            <v-table density="compact" class="border mb-2">
                                <tbody>
                                    <tr>
                                        <th>Duty Máx</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.duty_max" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <span>6. Ao finalizar o ajuste da Tensão, na aba “AFERIÇÃO”, pressionar o botão “SALVAR
                                CONFIG”
                                e depois “ENVIAR” da Seção “Parametrização”, conforme figura abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image61" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 58 - Salvar e Enviar Ajuste de Duty Máx e Duty Min</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="24">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Correção Tensão Boost
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Aplicar as ponteiras do Multímetro no conector de saída da Fonte FV300 e realizar a
                                Medição
                                de Tensão:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image57" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 59 - Esquema de Medição de Tensão da Fonte
                                FV300</span>
                            <span>3. Na aba “AFERIÇÃO”, pressionar o botão “INICIAR” da Seção “Correção Tensão
                                Boost”</span>
                            <span>4. Na sequência pressionar o botão “100V”</span>
                            <span>5. Depois, na seção “Calculado” digitar os mesmos valores da Seção “Atual” para
                                “Linear e
                                Proporcional”</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image62" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 60 - Seção de Ajuste de "Correção Tensão Boost"</span>
                            <span>6. Na seção “Calculado” após digitar os valores para “Linear e Proporcional”,
                                pressionar “Enviar”,
                                voltar a pressionar o botão “100V” e pressionar “Salvar Config”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image63" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 61 - Envio de Ajuste da Tensão Boost</span>
                            <caption><b>Correção Tensão Boost</b></caption>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Linear</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.tens_boost_linear"
                                                variant="underlined" density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Proporcional</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.tens_boost_proporcional"
                                                variant="underlined" density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="25">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Resistor HV Megôhmetro
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Remover qualquer cabo de injetor da Fonte AXD.</span>
                            <span>3. Na aba “Resistor HV Megôhmetro”, pressionar o botão “DEFINIR”, aguardar a Tensão HV
                                cair
                                para 80Vcc, na sequência pressionar “LER” e depois “SALVAR CONFIG”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image64" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 62 - Leitura de Resistencia HV</span>
                            <span>4. O valor de Resistencia deve ser próximo a 20600, conforme imagem acima, valores
                                muito
                                diferentes indicam defeito na Placa Eletrônica.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="26">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Resistor HV Megôhmetro
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Remover qualquer cabo de injetor da Fonte AXD.</span>
                            <span>3. Na aba “Offset Corrente Megôhmetro”, pressionar o botão “INICIAR”, aguardar o valor
                                estabilizar, assim que a Tensão na Fonte FV300 caia para 24Vcc. Na sequência pressionar
                                “SALVAR CONFIG E ENVIAR”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image65" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 63 - Leitura de Resistencia HV</span>
                            <span>4. O valor de Resistencia deve ser próximo a 0,5 a 0,8, conforme imagem acima, valores
                                muito
                                diferentes indicam defeito na Placa Eletrônica.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="27">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Resistor Corrente Megôhmetro
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Utilizar o Cabo de Injetores “CABO 1” e um Resistor de 1kΩ 1/4W de referência como
                                carga,
                                conectado em série com o Multímetro (Ajustar Amperímetro em Range Manual de 3A).</span>
                            <span>3. Utilizar a carcaça do suporte de unidades em serie com o Resistor de 1kΩ 1/4W para
                                realizar
                                esta medida de corrente com o Multímetro, conforme figura abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image66" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 64 - Aplicação da Carga para Medição de Corrente no
                                Ajuste de Sensibilidade</span>
                            <span>4. Na aba “Resistor Corrente Megôhmetro”, pressionar o botão “INICIAR”, aguardar o
                                valor
                                estabilizar, assim que a Corrente aparecer no Multímetro Comparar com o Valor mostrado
                                no
                                AXDControl e ajustar se necessário pela opção “Resistor x10”, os valores de corrente
                                devem
                                coincidir. Na sequência pressionar “SALVAR CONFIG”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image67" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 65 - Ajuste do Valor de Corrente do Megôhmetro</span>
                            <v-table density="compact" class="border">
                                <tbody>
                                    <tr>
                                        <th>Resistor x10</th>
                                        <td>
                                            <v-text-field v-model="editedItem.dados.res_x10" variant="underlined"
                                                density="compact" type="number"></v-text-field>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="28">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Teste funcional de Leitura de Resistência de Isolação
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Utilizar o Cabo de Injetores “CABO 1” e um Resistor de 330kΩ 5W de referência como
                                carga.</span>
                            <span>3. Utilizar a carcaça do suporte de unidades em serie com o Resistor de 330kΩ 5W para
                                realizar
                                esta medida de resistência, conforme figura abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image68" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 66 - Aplicação do Resistor de 330kΩ para medir a
                                resistência de isolamento</span>
                            <span>4. Acessar a aba “MEGOHMETRO” e pressionar a tecla <b>“ENVIAR”</b> da Seção “SetPoint
                                Boost”
                                e verificar com o multímetro se a Tensão de saída da Placa FV300 é igual a
                                <b>100Vcc</b>.</span>
                            <span>5. Na aba “SetPoint Boost”, pressionar o botão <b>“ATIVA”</b>.</span>
                            <span>6. Na mesma aba “SetPoint Boost”, pressionar o botão <b>“LEITURA”</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image69" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 67 - Teste de Leitura de Resistência de
                                Isolação</span>
                            <span>7. Verificar se a Leitura é de 0,330MΩ:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image70" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 68 - Verificação da Resistência de Isolação</span>
                            <span>8. ATENÇÃO: Após realizar a Leitura, pressionar o botão <b>“DESATIVA”</b>:</span>
                            <span>9. Repetir este Procedimento, desde o Item 1, porém deve-se utilizar o Cabo de
                                Injetores “CABO
                                11” e o injetor de referência Ranger 77550. Obter valores próximos
                                a de <b>160MΩ</b>.</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="29">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Megôhmetro: Teste funcional de Leitura de Resistência HV
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Utilizar o Cabo de Injetores “CABO 1” e um Resistor de 330kΩ 5W de referência como
                                carga.</span>
                            <span>3. Utilizar a carcaça do suporte de unidades em serie com o Resistor de 330kΩ 5W para
                                realizar
                                esta medida de resistência, conforme figura abaixo:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image71" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 69 - Aplicação do Resistor de 330kΩ para medir a
                                Resistência HV</span>
                            <span>4. Acessar a aba “MEGOHMETRO” e pressionar a tecla <b>“ENVIAR”</b> da Seção
                                “Resistencia HV”
                                e verificar com o multímetro se a Tensão de saída da Placa FV300 é igual a
                                <b>100Vcc</b>.</span>
                            <span>5. Na aba “SetPoint Boost”, pressionar o botão <b>“ATIVA”</b>.</span>
                            <span>6. Na mesma aba “SetPoint Boost”, pressionar o botão <b>“LEITURA”</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image72" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 70 - Teste de Leitura de Resistência HV</span>
                            <span>7. Verificar se a <b>Leitura</b> é de <b>330kΩ</b>:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image73" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 71 - Verificação da Resistência HV</span>
                            <span>8. ATENÇÃO: Após realizar a <b>Leitura</b>, pressionar o botão
                                <b>“DESATIVA”</b>:</span>
                            <span>9. Repetir este Procedimento, desde o Item 1, porém deve-se utilizar o Cabo de
                                Injetores “CABO
                                11” e o injetor de referência Ranger 77550. Obter valores próximos
                                a de <b>195kΩ</b>.</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image74" width="500" height="250"></v-img>
                            </div>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <v-stepper-window-item :value="30">
                <v-card border height="65vh" class="d-flex justify-center pa-5">
                    <v-sheet border elevation="4" class="sheet-item overflow-auto">
                        <div class="d-flex justify-center text-center mt-2">
                            <h3>
                                Teste funcional de Pulso de Injetores Piezo
                            </h3>
                        </div>
                        <div class="mx-5 my-4 d-flex flex-column">
                            <span>1. Verificar previamente se o “Procedimento 22” foi realizado.</span>
                            <span>2. Utilizar o Cabo de Injetores “CABO 11” e o injetor de referência Ranger
                                77550.</span>
                            <span>3. Acessar a aba “MEGOHMETRO” e pressionar a tecla <b>“ENVIAR”</b> da Seção “SetPoint
                                Boost”
                                e verificar com o multímetro se a Tensão de saída da Placa FV300 é igual a
                                <b>100Vcc</b>.</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image75" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 72 – Ajuste de 100Vcc na Fonte FV300</span>
                            <span>4. Na aba “TESTES”, pressionar o botão “EXECUTAR” da Seção “Pulsador”:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image76" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center mb-2">Figura 73 - Procedimento de Pulsador para Injetor
                                Piezo</span>
                            <span>5. Verificar os resultados obtidos no osciloscópio, ao finalizar a análise, pressionar
                                o botão
                                “PARAR”.</span>
                            <span>6. Verificar se a forma de onda é similar a estes valores:</span>
                            <div class="d-flex justify-center border">
                                <v-img :src="image77" width="500" height="250"></v-img>
                            </div>
                            <span class="text-center">Figura 74 - Forma de Onda da Ranger 77550</span>
                        </div>
                    </v-sheet>
                </v-card>
            </v-stepper-window-item>
            <div class="action_button">
                <v-chip class="ma-2" color="red" label href="/files/afericao_eletronica.pdf" download>
                    <v-icon start icon="mdi-file-pdf-box"></v-icon>
                    <a>Manual</a>
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
        <div class="group_buttons pa-4">
            <v-btn @click="goBack()" :disabled="disableBack">Anterior</v-btn>
            <v-btn color="orange-darken-2" @click="goForward()">{{ nextOrDoneText() }}</v-btn>
        </div>
    </v-stepper>
</template>

<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import StepElectronicService from '@/services/StepElectronicService'
import PlateService from '@/services/PlateService'
import ConfigService from '@/services/ConfigService'
import viewer from '@/components/3d-viewer.vue'
import dialogSector from '@/components/dialog_sector.vue'
import image1 from '@/assets/electronic/AXD/image1.png'
import image2 from '@/assets/electronic/AXD/image2.png'
import image3 from '@/assets/electronic/AXD/image3.png'
import image4 from '@/assets/electronic/AXD/image4.png'
import image5 from '@/assets/electronic/AXD/image5.png'
import image6 from '@/assets/electronic/AXD/image6.png'
import image7 from '@/assets/electronic/AXD/image7.png'
import image8 from '@/assets/electronic/AXD/image8.png'
import image9 from '@/assets/electronic/AXD/image9.png'
import image10 from '@/assets/electronic/AXD/image10.png'
import image11 from '@/assets/electronic/AXD/image11.png'
import image12 from '@/assets/electronic/AXD/image12.png'
import image13 from '@/assets/electronic/AXD/image13.png'
import image14 from '@/assets/electronic/AXD/image14.png'
import image15 from '@/assets/electronic/AXD/image15.png'
import image16 from '@/assets/electronic/AXD/image16.png'
import image17 from '@/assets/electronic/AXD/image17.png'
import image18 from '@/assets/electronic/AXD/image18.png'
import image19 from '@/assets/electronic/AXD/image19.png'
import image20 from '@/assets/electronic/AXD/image20.png'
import image21 from '@/assets/electronic/AXD/image21.png'
import image22 from '@/assets/electronic/AXD/image22.png'
import image23 from '@/assets/electronic/AXD/image23.png'
import image24 from '@/assets/electronic/AXD/image24.png'
import image25 from '@/assets/electronic/AXD/image25.png'
import image26 from '@/assets/electronic/AXD/image26.png'
import image27 from '@/assets/electronic/AXD/image27.png'
import image28 from '@/assets/electronic/AXD/image28.png'
import image29 from '@/assets/electronic/AXD/image29.png'
import image30 from '@/assets/electronic/AXD/image30.png'
import image31 from '@/assets/electronic/AXD/image31.png'
import image32 from '@/assets/electronic/AXD/image32.png'
import image33 from '@/assets/electronic/AXD/image33.png'
import image34 from '@/assets/electronic/AXD/image34.png'
import image35 from '@/assets/electronic/AXD/image35.png'
import image36 from '@/assets/electronic/AXD/image36.png'
import image37 from '@/assets/electronic/AXD/image37.png'
import image38 from '@/assets/electronic/AXD/image38.png'
import image39 from '@/assets/electronic/AXD/image39.png'
import image40 from '@/assets/electronic/AXD/image40.png'
import image41 from '@/assets/electronic/AXD/image41.png'
import image42 from '@/assets/electronic/AXD/image42.png'
import image43 from '@/assets/electronic/AXD/image43.png'
import image44 from '@/assets/electronic/AXD/image44.png'
import image45 from '@/assets/electronic/AXD/image45.png'
import image46 from '@/assets/electronic/AXD/image46.png'
import image47 from '@/assets/electronic/AXD/image47.png'
import image48 from '@/assets/electronic/AXD/image48.png'
import image49 from '@/assets/electronic/AXD/image49.png'
import image50 from '@/assets/electronic/AXD/image50.png'
import image51 from '@/assets/electronic/AXD/image51.png'
import image52 from '@/assets/electronic/AXD/image52.png'
import image53 from '@/assets/electronic/AXD/image53.png'
import image54 from '@/assets/electronic/AXD/image54.png'
import image55 from '@/assets/electronic/AXD/image55.png'
import image56 from '@/assets/electronic/AXD/image56.png'
import image57 from '@/assets/electronic/AXD/image57.png'
import image58 from '@/assets/electronic/AXD/image58.png'
import image59 from '@/assets/electronic/AXD/image59.png'
import image60 from '@/assets/electronic/AXD/image60.png'
import image61 from '@/assets/electronic/AXD/image61.png'
import image62 from '@/assets/electronic/AXD/image62.png'
import image63 from '@/assets/electronic/AXD/image63.png'
import image64 from '@/assets/electronic/AXD/image64.png'
import image65 from '@/assets/electronic/AXD/image65.png'
import image66 from '@/assets/electronic/AXD/image66.png'
import image67 from '@/assets/electronic/AXD/image67.png'
import image68 from '@/assets/electronic/AXD/image68.png'
import image69 from '@/assets/electronic/AXD/image69.png'
import image70 from '@/assets/electronic/AXD/image70.png'
import image71 from '@/assets/electronic/AXD/image71.png'
import image72 from '@/assets/electronic/AXD/image72.png'
import image73 from '@/assets/electronic/AXD/image73.png'
import image74 from '@/assets/electronic/AXD/image74.png'
import image75 from '@/assets/electronic/AXD/image75.png'
import image76 from '@/assets/electronic/AXD/image76.png'
import image77 from '@/assets/electronic/AXD/image77.png'

export default defineComponent({
    components: {
        viewer,
        dialogSector,
    },
    data: () => ({
        e1: 1,
        steps: 30,
        testImg: icon,
        dialog: false,
        dialogSave: false,
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
        image24: image24,
        image25: image25,
        image26: image26,
        image27: image27,
        image28: image28,
        image29: image29,
        image30: image30,
        image31: image31,
        image32: image32,
        image33: image33,
        image34: image34,
        image35: image35,
        image36: image36,
        image37: image37,
        image38: image38,
        image39: image39,
        image40: image40,
        image41: image41,
        image42: image42,
        image43: image43,
        image44: image44,
        image45: image45,
        image46: image46,
        image47: image47,
        image48: image48,
        image49: image49,
        image50: image50,
        image51: image51,
        image52: image52,
        image53: image53,
        image54: image54,
        image55: image55,
        image56: image56,
        image57: image57,
        image58: image58,
        image59: image59,
        image60: image60,
        image61: image61,
        image62: image62,
        image63: image63,
        image64: image64,
        image65: image65,
        image66: image66,
        image67: image67,
        image68: image68,
        image69: image69,
        image70: image70,
        image71: image71,
        image72: image72,
        image73: image73,
        image74: image74,
        image75: image75,
        image76: image76,
        image77: image77,
        editedIndex: -1,
        electronics: null,
        configValues: [],
        disableBack: true,
        editedItem: {
            id: '',
            id_placa: '',
            status: 0,
            dados: {
                posgrav_5: 0,
                posgrav_12: 0,
                posgrav_neg12: 0,
                trim_rv10: 0,
                j8_1: 0,
                j8_3: 0,
                j8_4: 0,
                tp3: 0,
                c3: 0,
                u12_pin3: 0,
                u13_pin3: 0,
                sens_calc: 0,
                res_sens_corr: 0,
                param_30: 0,
                param_31: 0,
                param_32: 0,
                param_33: 0,
                duty_min: 0,
                duty_max: 0,
                tens_boost_linear: 0,
                tens_boost_proporcional: 0,
                res_x10: 0,
            }
        },
        defaultItem: {
            id: '',
            id_placa: '',
            status: 0,
            dados: {
                posgrav_5: 0,
                posgrav_12: 0,
                posgrav_neg12: 0,
                trim_rv10: 0,
                j8_1: 0,
                j8_3: 0,
                j8_4: 0,
                tp3: 0,
                c3: 0,
                u12_pin3: 0,
                u13_pin3: 0,
                sens_calc: 0,
                res_sens_corr: 0,
                param_30: 0,
                param_31: 0,
                param_32: 0,
                param_33: 0,
                duty_min: 0,
                duty_max: 0,
                tens_boost_linear: 0,
                tens_boost_proporcional: 0,
                res_x10: 0,
            }
        },
    }),
    created() {
        this.initialize()
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
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
            this.getElectronicForPlate()
            this.getConfigValues()
            window.setTimeout(() => {
                this.createOrUpdateStepElectronic()
            }, 200)
        },
        async getConfigValues() {
            let paramsPlate = {
                id_placa: this.$route.params.id
            }

            let plateResponse = await PlateService.getAll(paramsPlate)
            let paramsConfig = {
                id: plateResponse.data.id_config,
            }
            let configResponse = await ConfigService.getAll(paramsConfig)
            this.configValues = configResponse.data
        },
        async getElectronicForPlate() {
            let params = {
                id_placa: this.$route.params.id,
            }
            let response = await StepElectronicService.getAll(params)
            if (response.data) {
                this.electronics = response.data

                if (this.electronics.ultima_etapa) {
                    this.e1 = this.electronics.ultima_etapa
                }
            }

            if (response.data.dados === null) {
                response.data.dados = this.defaultItem.dados
            }

            this.editedIndex = 0
            this.editedItem = Object.assign({}, response.data);
        },
        async createOrUpdateStepElectronic() {
            let params = {
                id_placa: this.$route.params.id
            }

            if (this.electronics) {
                params = {
                    ...params,
                    id: this.electronics.id
                }
                await StepElectronicService.update(params)
            } else {
                params = {
                    ...params,
                    status: 0,
                }
                await StepElectronicService.create(params)
                this.getElectronicForPlate()
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
            await StepElectronicService.update(this.electronics.id, params)
        },
        open3D() {
            this.dialog = true
        },
        close() {
            this.dialog = false
        },
        save() {
            this.dialogSave = true
        },
        closeSaveDialog() {
            this.dialogSave = false
        },
        async saveDialog(technician) {
            this.editedItem.id_placa = this.$route.params.id
            this.editedItem.status = 2
            this.editedItem.id_tecnico = technician
            this.editedItem.ultima_etapa = 1

            if (this.editedIndex > -1) {
                Object.assign(this.electronics, this.editedItem)
                await StepElectronicService.update(this.editedItem.id, this.editedItem)
            } else {
                this.electronics.push(this.editedItem)
                await StepElectronicService.create(this.editedItem)
            }

            this.dialogSave = false
            this.$router.go(-1)
        },
    },
})
</script>

<style lang="scss" scoped>
.action_button {
    position: absolute;
    bottom: 0;
    left: 0;
}

th,
td {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.group_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.sheet-item {
    width: 100vw;

    @media only screen and (min-width: 768px) {
        width: 50vw;
    }
}
</style>
