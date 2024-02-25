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
                        <v-sheet border elevation="4" width="50vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
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
                        <v-sheet border elevation="4" width="35vw" class="overflow-auto">
                            <div class="d-flex justify-center text-center mt-2">
                                <h3>
                                    Ajuste de Sensibilidade de Corrente
                                </h3>
                            </div>
                            <div class="mx-5 my-4 d-flex flex-column">
                                <span>1. Utilizar o Cabo de Injetores “CABO 1” e um resistor de 2,2Ω 5W como carga,
                                    conectado em
                                    série com o Multímetro (Ajustar Amperímetro em Range Manual de 3A).</span>
                                <div class="d-flex justify-center border border">
                                    <v-img :src="image29" width="500" height="250"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 27 - Aplicação da Carga para Medição de Corrente no
                                        Ajuste de Sensibilidade</i></span>
                                <span>2. Na aba “Aferição” realizar o TESTAR na seção de <b>“Ajuste
                                        sens.corrente”</b>:</span>
                                <div class="d-flex justify-center border border">
                                    <v-img :src="image30" width="500" height="250"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 28 - Tela de Ajuste de Sensibilidade de
                                        Corrente</i></span>
                                <span>3. Verificar na tela do Multímetro o Valor máximo lido e anotar.</span>
                                <div class="d-flex justify-center border border">
                                    <v-img :src="image31" width="500" height="250"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 29 - Medição de Sensibilidade de
                                        Corrente</i></span>
                                <span>4. ANOTAR o Valor “real” no Multímetro ENVIAR e SALVAR:</span>
                                <div class="d-flex justify-center border border">
                                    <v-img :src="image32" width="500" height="250"></v-img>
                                </div>
                                <span class="text-center mb-2"><i>Figura 30 - Avaliação da Sensibilidade de
                                        Corrente</i></span>
                                <span>5. COMPARAR Valor “lido” com o Valor “real” devem ser similares, erro máximo de ±0,1%,
                                    no
                                    exemplo abaixo o resultado da Sensibilidade foi de “199”:</span>
                                <div class="d-flex justify-center border border">
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

export default defineComponent({
    components: {
        viewer
    },
    data: () => ({
        e1: 1,
        steps: 30,
        currentPlateId: null,
        plate: null,
        testImg: icon,
        dialog: false,
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
        editedIndex: -1,
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
            }
        }
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

th,
td {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>