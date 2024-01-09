<template>
    <v-container class="quality_conference">
        <h2 class="d-flex justify-center text-white">Aferição AXD1001</h2>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title v-slot="{ open }">
                    <h3>1. Testes de Unidades Injetoras</h3>
                    <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"></span>
                    </v-fade-transition>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-table density="compact" class="my-1 border">
                        <tbody>
                            <!-- Scania 051 (0 414 701 051) SN 117295 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.1 Scania 051 (0 414 051) SN 117295</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=520mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=1,01m H
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=6,20A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                834us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.1.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Scania 044 (0 414 701 044) SN 044766 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.2 Scania 044 (0 414 701 044) SN 044766</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=520mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=1,02m H
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=6,80A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                855us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.2.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Scania 044 (0 414 701 044) SN 045204 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.3 Scania 044 (0 414 701 044) SN 045204</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=520mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=1,09m H
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=6,47A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                845us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.3.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Scania 019 (0 414 701 019) SN 084388 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.4 Scania 019 (0 414 701 019) SN 084388</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=514mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=1,01m H
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=6,18A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                830us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.4.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D13A 21340611 (REPARADO OU ANTIGO) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.5 D13A 21340611 (REPARADO OU ANTIGO)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                RA=1,49Ω e RB=1,78Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                LA=1,33mH e LB=2,34mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                IatA=1,68A e IatB=3,13A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                TA=776us e TB=1330us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.5.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D13A 21340611 (NOVO) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.6 D13A 21340611 (NOVO)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                RA=1,49Ω e RB=1,77Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                LA=1,35mH e LB=2,30mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                IatA=1,80A e IatB=3,48A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                TA=765us e TB=1370us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.6.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D13A 21340616 (SN000000001) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.7 D13A 21340616 (SN000000001)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                RA=1,49Ω e RB=1,77Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                LA=1,35mH e LB=2,33mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                IatA=1,80A e IatB=3,48A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                TA=810us e TB=1430us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.7.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D13A 21340616 (SN000000002) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.8 D13A 21340616 (SN000000002)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                RA=1,48Ω e RB=1,76Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                LA=1,29mH e LB=2,30mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                IatA=1,85A e IatB=3,40A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                TA=810us e TB=1430us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.8.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Bosch UP OM900 (0 414 799 008) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.9 Bosch UP OM900 (0 414 799 008)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                95mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                455uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=8,65A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                620us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.5 Vedação (USAR BOMBA DE VACUO)</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.6 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.9.7 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Bosch UP OM457 (0 414 799 005) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.10 Bosch UP OM457 (0 414 799 005)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                95mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                460uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=9,01A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                620us
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.10.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D12C BEBE4B12004 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.11 D12C BEBE4B12004</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=1,15Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=8,00mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat1=2,72A e Iat2=3,47A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                2,12ms
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.11.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- D12D BEBE4C00101 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.12 D12D BEBE4C00101</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=4,02Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=11,60mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=2,58A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                3,07ms
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.12.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- IVECO 004 (0 414 703 004) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>1.13 IVECO 004 (0 414 703 004)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=4,02Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=11,60mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.3 Atracamento
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                Iat=2,58A
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.4 Tempo de Resposta
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                3,07ms
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.5 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>1.13.6 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                        </tbody>
                    </v-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title v-slot="{ open }">
                    <h3>2. Testes de Common Rail Injetoras</h3>
                    <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"></span>
                    </v-fade-transition>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-table density="compact" class="my-1 border">
                        <tbody>
                            <!-- Bosch Leve 1 (0 445 110 273) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.1 Bosch Leve 1 (0 445 110 273)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.1.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=328mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.1.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=210uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.1.3 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.1.4 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.1.5 Teste com relógio comparador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Bosch Leve 2 (0 445 110 375) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.2 Bosch Leve 2 (0 445 110 375)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.2.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=234mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.2.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=260uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.2.3 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.2.4 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.2.5 Teste com relógio comparador
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                38µm
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Bosch Leve 2 (0 445 120 257) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.3 Bosch Leve 2 (0 445 120 257)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.3.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=240mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.3.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=150uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.3.3 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.3.4 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                160MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.3.5 Teste com relógio comparador
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                38µm
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Bosch Pesado CRIN1 (0 445 120 007 / 212 / 273) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.4 Bosch Pesado CRIN1 (0 445 120 007 / 212 / 273)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.4.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=341mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.4.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=205uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.4.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=156MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.4.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Denso Baixa (6C1Q 9K546 AC) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.5 Denso Baixa (6C1Q 9K546 AC)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.5.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=475mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.5.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=205uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.5.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                170MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.5.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Denso Alta (23670 0L050) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.6 Denso Alta (23670 0L050)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.6.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=985mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.6.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=640uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.6.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                165MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.6.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Piezo Siemens (77550) Ranger -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.7 Piezo Siemens (77550) Ranger</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.7.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=195kΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.7.2 Capacitância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                C=3,30uF
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.7.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=400MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.7.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Piezo BOSCH (0445 116 059) Amarok/LandRover -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.8 Piezo BOSCH (0445 116 059) Amarok/LandRover</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.8.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=185kΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.8.2 Capacitância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                C=2,60uF
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.8.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=400MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.8.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Piezo DENSO (23670- 30270) Hilux chicotinho -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.9 Piezo DENSO (23670- 30270) Hilux chicotinho</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.9.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=1000kΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.9.2 Capacitância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                C=2,65uF
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.9.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.9.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- BOSCH XPI (CRIN4) -->
                            <tr>
                                <th class="pl-7">
                                    <h4>2.10 BOSCH XPI (CRIN4)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.10.1 BOSCH XPI
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                CRIN4
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.10.2 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                RA=1,38Ω e RB=630mΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.10.3 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                LA=530uH e LB=3,55uH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>2.10.4 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                        </tbody>
                    </v-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title v-slot="{ open }">
                    <h3>3. Testes de Pulsador</h3>
                    <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"></span>
                    </v-fade-transition>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-table density="compact" class="my-1 border">
                        <tbody>
                            <!-- Teste Válvula Bosch:      0 928 400 614 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>3.1 Teste Válvula Bosch (0 928 400 614)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.1.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=2,70Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.1.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=11,60mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.1.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.1.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.1.5 Curso da Válvula (2400mm - Usar Relógio Comparador)</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Teste Válvula Bosch 0 281 006 032 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>3.2 Teste Válvula Bosch (0 281 006 032)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.2.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=3,70Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.2.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=13,00mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.2.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.2.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Teste Válvula Bosch 0 281 002 241 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>3.3 Teste Válvula Bosch (0 281 002 241)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.2.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=2,40Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.3.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=8,15mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.3.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.3.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Teste Válvula Bosch 0 281 002 698 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>3.4 Teste Válvula Bosch (0 281 002 698)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.4.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=2,40Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.4.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=8,16mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.4.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.4.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <!-- Teste Válvula Bosch 0 281 006 074 -->
                            <tr>
                                <th class="pl-7">
                                    <h4>3.5 Teste Válvula Bosch (0 281 006 074)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.5.1 Resistência
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                R=3,70Ω
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.5.2 Indutância
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                L=12,75mH
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.5.3 Isolação
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                250MΩ
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>3.5.4 Pulsador</span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                        </tbody>
                    </v-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title v-slot="{ open }">
                    <h3>4. Testes de Sensor de Pressão</h3>
                    <v-fade-transition leave-absolute>
                        <span v-if="open" key="0"></span>
                    </v-fade-transition>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-table density="compact" class="my-1 border">
                        <tbody>
                            <tr>
                                <th class="pl-7">
                                    <h4>4.1 Teste Sensor Bosch (0 281 002 982)</h4>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th class="th_content pl-10">
                                    <span>4.1.1 Tensão
                                        <v-tooltip activator="parent" location="end">
                                            <template v-slot:activator="{ props }">
                                                <v-icon v-bind="props" end icon="mdi-information"></v-icon>
                                            </template>
                                            <span>
                                                V=495mV
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </th>
                                <th>
                                    <v-text-field variant="underlined" density="compact"></v-text-field>
                                </th>
                            </tr>
                        </tbody>
                    </v-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

        <div class="d-flex justify-end mt-5">
            <v-btn width="15vw" variant="flat" color="orange-darken-4" prepend-icon="mdi-check-circle"
                @click="save()">Finalizar</v-btn>
        </div>
    </v-container>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => ({
        resistencia_0414051: 0,
        indutancia_0414051: 0,
        atracamento_0414051: 0,
        tempo_resposta_0414051: 0,
        isolacao_0414051: 0,
        pulsador_0414051: 0,
        resistencia_0414701044_SN044766: 0,
        indutancia_0414701044_SN044766: 0,
        atracamento_0414701044_SN044766: 0,
        tempo_resposta_0414701044_SN044766: 0,
        isolacao_0414701044_SN044766: 0,
        pulsador_0414701044_SN044766: 0,
        resistencia_0414701044_SN045204: 0,
        indutancia_0414701044_SN045204: 0,
        atracamento_0414701044_SN045204: 0,
        tempo_resposta_0414701044_SN045204: 0,
        isolacao_0414701044_SN045204: 0,
        pulsador_0414701044_SN045204: 0,
        resistencia_0414701019: 0,
        indutancia_0414701019: 0,
        atracamento_0414701019: 0,
        tempo_resposta_0414701019: 0,
        isolacao_0414701019: 0,
        pulsador_0414701019: 0,
        resistencia_21340611_antigo_1: 0,
        indutancia_2134061_antigo_1: 0,
        atracamento_2134061_antigo_1: 0,
        tempo_resposta_2134061_antigo_1: 0,
        isolacao_21340611_antigo_1: 0,
        pulsador_21340611_antigo_1: 0,
        resistencia_21340611_antigo_2: 0,
        indutancia_2134061_antigo_2: 0,
        atracamento_2134061_antigo_2: 0,
        tempo_resposta_2134061_antigo_2: 0,
        isolacao_21340611_antigo_2: 0,
        pulsador_21340611_antigo_2: 0,
        resistencia_21340611_novo_1: 0,
        indutancia_2134061_novo_1: 0,
        atracamento_2134061_novo_1: 0,
        tempo_resposta_2134061_novo_1: 0,
        isolacao_21340611_novo_1: 0,
        pulsador_21340611_novo_1: 0,
        resistencia_21340611_novo_2: 0,
        indutancia_2134061_novo_2: 0,
        atracamento_2134061_novo_2: 0,
        tempo_resposta_2134061_novo_2: 0,
        isolacao_21340611_novo_2: 0,
        pulsador_21340611_novo_2: 0,
        resistencia_21340616_SN000000001_1: 0,
        indutancia_21340616_SN000000001_1: 0,
        atracamento_21340616_SN000000001_1: 0,
        tempo_resposta_21340616_SN000000001_1: 0,
        isolacao_21340616_SN000000001_1: 0,
        pulsador_21340616_SN000000001_1: 0,
        resistencia_21340616_SN000000002_1: 0,
        indutancia_21340616_SN000000002_1: 0,
        atracamento_21340616_SN000000002_1: 0,
        tempo_resposta_21340616_SN000000002_1: 0,
        isolacao_21340616_SN000000002_1: 0,
        pulsador_21340616_SN000000002_1: 0,
        resistencia_21340616_SN000000001_2: 0,
        indutancia_21340616_SN000000001_2: 0,
        atracamento_21340616_SN000000001_2: 0,
        tempo_resposta_21340616_SN000000001_2: 0,
        isolacao_21340616_SN000000001_2: 0,
        pulsador_21340616_SN000000001_2: 0,
        resistencia_21340616_SN000000002_2: 0,
        indutancia_21340616_SN000000002_2: 0,
        atracamento_21340616_SN000000002_2: 0,
        tempo_resposta_21340616_SN000000002_2: 0,
        isolacao_21340616_SN000000002_2: 0,
        pulsador_21340616_SN000000002_2: 0,
        resistencia_0414799008: 0,
        indutancia_0414799008: 0,
        atracamento_0414799008: 0,
        tempo_resposta_0414799008: 0,
        vedacao_0414799008: 0,
        isolacao_0414799008: 0,
        pulsador_0414799008: 0,
        resistencia_0414799005: 0,
        indutancia_0414799005: 0,
        atracamento_0414799005: 0,
        tempo_resposta_0414799005: 0,
        isolacao_0414799005: 0,
        pulsador_0414799005: 0,
        resistencia_BEBE4B12004: 0,
        indutancia_BEBE4B12004: 0,
        atracamento_BEBE4B12004_1: 0,
        atracamento_BEBE4B12004_2: 0,
        tempo_resposta_BEBE4B12004: 0,
        isolacao_BEBE4B12004: 0,
        pulsador_BEBE4B12004: 0,
        resistencia_BEBE4C00101: 0,
        indutancia_BEBE4C00101: 0,
        atracamento_BEBE4C00101: 0,
        tempo_resposta_BEBE4C00101: 0,
        resistencia_0414703004: 0,
        indutancia_0414703004: 0,
        atracamento_0414703004: 0,
        tempo_resposta_0414703004: 0,
        isolacao_0414703004: 0,
        pulsador_0414703004: 0,
        resistencia_0445110273: 0,
        indutancia_0445110273: 0,
        pulsador_0445110273: 0,
        isolacao_0445110273: 0,
        relogio_comparador_0445110273: 0,
        resistencia_0445110375: 0,
        indutancia_0445110375: 0,
        pulsador_0445110375: 0,
        isolacao_0445110375: 0,
        relogio_comparador_0445110375: 0,
        resistencia_0445120257: 0,
        indutancia_0445120257: 0,
        pulsador_0445120257: 0,
        isolacao_0445120257: 0,
        relogio_comparador_0445120257: 0,
        resistencia_0445120007: 0,
        indutancia_0445120007: 0,
        isolacao_0445120007: 0,
        pulsador_0445120007: 0,
        resistencia_6C1Q9K546AC: 0,
        indutancia_6C1Q9K546AC: 0,
        isolacao_6C1Q9K546AC: 0,
        pulsador_6C1Q9K546AC: 0,
        resistencia_236700L050: 0,
        indutancia_236700L050: 0,
        isolacao_236700L050: 0,
        pulsador_236700L050: 0,
        resistencia_77550: 0,
        capacitancia_77550: 0,
        isolacao_77550: 0,
        pulsador_77550: 0,
        resistencia_0445116059: 0,
        capacitancia_0445116059: 0,
        isolacao_0445116059: 0,
        pulsador_0445116059: 0,
        resistencia_2367030270: 0,
        capacitancia_2367030270: 0,
        isolacao_2367030270: 0,
        pulsador_2367030270: 0,
        bosch_xpi_CRIN4: 0,
        resistencia_CRIN4_1: 0,
        resistencia_CRIN4_2: 0,
        indutancia_CRIN4_1: 0,
        indutancia_CRIN4_2: 0,
        isolacao_CRIN4: 0,
        resistencia_0928400614: 0,
        indutancia_0928400614: 0,
        isolacao_0928400614: 0,
        pulsador_0928400614: 0,
        curso_valvula_0928400614: 0,
        resistencia_0281006032: 0,
        indutancia_0281006032: 0,
        isolacao_0281006032: 0,
        pulsador_0281006032: 0,
        resistencia_0281002241: 0,
        indutancia_0281002241: 0,
        isolacao_0281002241: 0,
        pulsador_0281002241: 0,
        resistencia_0281002698: 0,
        indutancia_0281002698: 0,
        isolacao_028100269: 0,
        pulsador_0281002698: 0,
        resistencia_0281006074: 0,
        indutancia_0281006074: 0,
        isolacao_0281006074: 0,
        tensao_0281002982: 0,
    }),
    methods: {
        save() {
            alert('Salvar...')
        }
    }
})
</script>
<style lang="scss">
.th_content {
    border-right: 1px solid rgba($color: #000000, $alpha: 0.12);
}

.quality_conference {
    margin-top: 14px;
    background-color: rgba($color: #1B1464, $alpha: 0.9);
}
</style>