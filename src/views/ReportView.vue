<template>
  <v-container class="my-5">
    <reportViewerVue :showDialog="dialog" @closeDialog="closeDialog" :items="selectedItem"></reportViewerVue>
    <v-data-table :headers="headers" :items="plates">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Relatórios</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:[`item.createdAt`]="{ item }">
        <span>{{ new Date(item.createdAt).toLocaleString() }}</span>
      </template>

      <template v-slot:[`item.status`]="{ item }">
        <v-chip variant="elevated" :color="getStatusColor(item.status)">
          {{ statusFormatted(item.status) }}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex flex-row align-center justify-end">
          <v-icon size="small" class="me-2" @click="openItem(item)">
            mdi-eye
          </v-icon>
          <download-excel :data="organizeExcel(item)" type="xlsx" name="filename.xlsx" :fields="organizedFields">
            <v-icon size="small" class="me-2">
              mdi-file-excel
            </v-icon>
          </download-excel>
        </div>
      </template>

      <template v-slot:no-data>
        <v-col class="d-flex justify-center">
          <v-sheet class="d-flex justify-center" width="256" height="128">
            <img src="../assets/no_data.png" :height="128" />
          </v-sheet>
        </v-col>
        <v-btn color="orange-darken-2" @click="initialize">
          Tente Novamente
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import PlateService from '@/services/PlateService'
import reportViewerVue from '@/components/report-viewer.vue'

export default defineComponent({
  data: () => ({
    plates: [],
    headers: [
      {
        title: 'ID',
        align: 'start',
        sortable: false,
        key: 'id'
      },
      {
        title: 'Nome',
        key: 'nome'
      },
      {
        title: 'Número de Série',
        key: 'num_serie'
      },
      {
        title: 'Data de Cadastro',
        key: 'createdAt',
      },
      {
        title: 'Status',
        key: 'status'
      },
      {
        title: 'Ações',
        key: 'actions',
        align: 'end',
        sortable: false
      }
    ],
    fields: [
      { fieldValue: "Pós Gravação 5v", fieldName: "posgrav_5", fieldSuffix: 'mA' },
      { fieldValue: "Pós Gravação 12v", fieldName: "posgrav_12", fieldSuffix: "mA" },
      { fieldValue: "Pós Gravação -12v", fieldName: "posgrav_neg12", fieldSuffix: "mA" },
      { fieldValue: "RV10", fieldName: "trim_rv10", fieldSuffix: "kΩ" },
      { fieldValue: "Tensão Nominal 5v - J8/1", fieldName: "j8_1", fieldSuffix: "V" },
      { fieldValue: "Tensão Nominal 12v - J8/3", fieldName: "j8_3", fieldSuffix: "V" },
      { fieldValue: "Tensão Nominal -12v - J8/4", fieldName: "j8_4", fieldSuffix: "V" },
      { fieldValue: "TP3 e GND", fieldName: "tp3", fieldSuffix: "V" },
      { fieldValue: "C3 e GND", fieldName: "c3", fieldSuffix: "V" },
      { fieldValue: "U12 - PIN3", fieldName: "u12_pin3", fieldSuffix: "V" },
      { fieldValue: "U13 - PIN3", fieldName: "u13_pin3", fieldSuffix: "V" },
      { fieldValue: "Sensibilidade Calculada", fieldName: "sens_calc", fieldSuffix: "" },
      { fieldValue: "Resultado da Sensibilidade de Corrente", fieldName: "res_sens_corr", fieldSuffix: "" },
      { fieldValue: "Parâmetro 30", fieldName: "param_30", fieldSuffix: "" },
      { fieldValue: "Parâmetro 31", fieldName: "param_31", fieldSuffix: "" },
      { fieldValue: "Parâmetro 32", fieldName: "param_32", fieldSuffix: "" },
      { fieldValue: "Parâmetro 33", fieldName: "param_33", fieldSuffix: "" },
      { fieldValue: "Parâmetro 28", fieldName: "param_28", fieldSuffix: "" },
      { fieldValue: "Parâmetro 29", fieldName: "param_29", fieldSuffix: "" },
      { fieldValue: "Duty Min", fieldName: "duty_min", fieldSuffix: "" },
      { fieldValue: "Duty Max", fieldName: "duty_max", fieldSuffix: "" },
      { fieldValue: "Tensão Boost Linear", fieldName: "tens_boost_linear", fieldSuffix: "" },
      { fieldValue: "Tensão Boost Proporcional", fieldName: "tens_boost_proporcional", fieldSuffix: "" },
      { fieldValue: "Resistor x10", fieldName: "res_x10", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 701 051) SN 117295", fieldName: "resistencia_04140510414701051", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 701 051) SN 117295", fieldName: "indutancia_0414051", fieldSuffix: "mH" },
      { fieldValue: "Atracamento (0 414 701 051) SN 117295", fieldName: "atracamento_0414051", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 701 051) SN 117295", fieldName: "tempo_resposta_0414051", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 701 051) SN 117295", fieldName: "isolacao_0414051", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 701 051) SN 117295", fieldName: "pulsador_0414051", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 701 044) SN 044766", fieldName: "resistencia_0414701044_SN044766", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 701 044) SN 044766", fieldName: "indutancia_0414701044_SN044766", fieldSuffix: "mH" },
      { fieldValue: "Atracamento (0 414 701 044) SN 044766", fieldName: "atracamento_0414701044_SN044766", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 701 044) SN 044766", fieldName: "tempo_resposta_0414701044_SN044766", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 701 044) SN 044766", fieldName: "isolacao_0414701044_SN044766", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 701 044) SN 044766", fieldName: "pulsador_0414701044_SN044766", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 701 044) SN 045204", fieldName: "resistencia_0414701044_SN045204", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 701 044) SN 045204", fieldName: "indutancia_0414701044_SN045204", fieldSuffix: "mH" },
      { fieldValue: "Atracamento (0 414 701 044) SN 045204", fieldName: "atracamento_0414701044_SN045204", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 701 044) SN 045204", fieldName: "tempo_resposta_0414701044_SN045204", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 701 044) SN 045204", fieldName: "isolacao_0414701044_SN045204", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 701 044) SN 045204", fieldName: "pulsador_0414701044_SN045204", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 701 019) SN 084388", fieldName: "resistencia_0414701019", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 701 019) SN 084388", fieldName: "indutancia_0414701019", fieldSuffix: "mH" },
      { fieldValue: "Atracamento (0 414 701 019) SN 084388", fieldName: "atracamento_0414701019", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 701 019) SN 084388", fieldName: "tempo_resposta_0414701019", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 701 019) SN 084388", fieldName: "isolacao_0414701019", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 701 019) SN 084388", fieldName: "pulsador_0414701019", fieldSuffix: "" },
      { fieldValue: "Resistência D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "resistencia_21340611_antigo_1", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "indutancia_2134061_antigo_1", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "atracamento_2134061_antigo_1", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "tempo_resposta_2134061_antigo_1", fieldSuffix: "us" },
      { fieldValue: "Isolação D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "isolacao_21340611_antigo", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador D13A 21340611 (REPARADO OU ANTIGO)", fieldName: "pulsador_21340611_antigo", fieldSuffix: "" },
      { fieldValue: "Resistência D13A 21340611 (REPARADO OU ANTIGO) - 2", fieldName: "resistencia_21340611_antigo_2", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340611 (REPARADO OU ANTIGO) - 2", fieldName: "indutancia_2134061_antigo_2", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340611 (REPARADO OU ANTIGO) - 2", fieldName: "atracamento_2134061_antigo_2", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340611 (REPARADO OU ANTIGO) - 2", fieldName: "tempo_resposta_2134061_antigo_2", fieldSuffix: "us" },
      { fieldValue: "Resistência D13A 21340611 (NOVO)", fieldName: "resistencia_21340611_novo_1", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340611 (NOVO)", fieldName: "indutancia_2134061_novo_1", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340611 (NOVO)", fieldName: "atracamento_2134061_novo_1", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340611 (NOVO)", fieldName: "tempo_resposta_2134061_novo_1", fieldSuffix: "us" },
      { fieldValue: "Isolação D13A 21340611 (NOVO)", fieldName: "isolacao_21340611_novo", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador D13A 21340611 (NOVO)", fieldName: "pulsador_21340611_novo", fieldSuffix: "" },
      { fieldValue: "Resistência D13A 21340611 (NOVO) - 2", fieldName: "resistencia_21340611_novo_2", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340611 (NOVO) - 2", fieldName: "indutancia_2134061_novo_2", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340611 (NOVO) - 2", fieldName: "atracamento_2134061_novo_2", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340611 (NOVO) - 2", fieldName: "tempo_resposta_2134061_novo_2", fieldSuffix: "us" },
      { fieldValue: "Resistência D13A 21340616 (SN000000001)", fieldName: "resistencia_21340616_SN000000001_1", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340616 (SN000000001)", fieldName: "indutancia_21340616_SN000000001_1", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340616 (SN000000001)", fieldName: "atracamento_21340616_SN000000001_1", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340616 (SN000000001)", fieldName: "tempo_resposta_21340616_SN000000001_1", fieldSuffix: "us" },
      { fieldValue: "Isolação D13A 21340616 (SN000000001)", fieldName: "isolacao_21340616_SN000000001", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador D13A 21340616 (SN000000001)", fieldName: "pulsador_21340616_SN000000001", fieldSuffix: "" },
      { fieldValue: "Resistência D13A 21340616 (SN000000002)", fieldName: "resistencia_21340616_SN000000002_1", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340616 (SN000000002)", fieldName: "indutancia_21340616_SN000000002_1", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340616 (SN000000002)", fieldName: "atracamento_21340616_SN000000002_1", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340616 (SN000000002)", fieldName: "tempo_resposta_21340616_SN000000002_1", fieldSuffix: "us" },
      { fieldValue: "Isolação D13A 21340616 (SN000000002)", fieldName: "isolacao_21340616_SN000000002", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador D13A 21340616 (SN000000002)", fieldName: "pulsador_21340616_SN000000002", fieldSuffix: "" },
      { fieldValue: "Resistência D13A 21340616 (SN000000001) - 2", fieldName: "resistencia_21340616_SN000000001_2", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340616 (SN000000001) - 2", fieldName: "indutancia_21340616_SN000000001_2", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340616 (SN000000001) - 2", fieldName: "atracamento_21340616_SN000000001_2", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340616 (SN000000001) - 2", fieldName: "tempo_resposta_21340616_SN000000001_2", fieldSuffix: "us" },
      { fieldValue: "Resistência D13A 21340616 (SN000000002) - 2", fieldName: "resistencia_21340616_SN000000002_2", fieldSuffix: "Ω" },
      { fieldValue: "Indutância D13A 21340616 (SN000000002) - 2", fieldName: "indutancia_21340616_SN000000002_2", fieldSuffix: "mH" },
      { fieldValue: "Atracamento D13A 21340616 (SN000000002) - 2", fieldName: "atracamento_21340616_SN000000002_2", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta D13A 21340616 (SN000000002) - 2", fieldName: "tempo_resposta_21340616_SN000000002_2", fieldSuffix: "us" },
      { fieldValue: "Resistência (0 414 799 008)", fieldName: "resistencia_0414799008", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 799 008)", fieldName: "indutancia_0414799008", fieldSuffix: "mH" },
      { fieldValue: "Atracamento (0 414 799 008)", fieldName: "atracamento_0414799008", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 799 008)", fieldName: "tempo_resposta_0414799008", fieldSuffix: "us" },
      { fieldValue: "Vedação (0 414 799 008)", fieldName: "vedacao_0414799008", fieldSuffix: "" },
      { fieldValue: "Isolação (0 414 799 008)", fieldName: "isolacao_0414799008", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 799 008)", fieldName: "pulsador_0414799008", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 799 005)", fieldName: "resistencia_0414799005", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 799 005)", fieldName: "indutancia_0414799005", fieldSuffix: "uH" },
      { fieldValue: "Atracamento (0 414 799 005)", fieldName: "atracamento_0414799005", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 799 005)", fieldName: "tempo_resposta_0414799005", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 799 005)", fieldName: "isolacao_0414799005", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 799 005)", fieldName: "pulsador_0414799005", fieldSuffix: "" },
      { fieldValue: "Resistência BEBE4B12004", fieldName: "resistencia_BEBE4B12004", fieldSuffix: "Ω" },
      { fieldValue: "Indutância BEBE4B12004", fieldName: "indutancia_BEBE4B12004", fieldSuffix: "mH" },
      { fieldValue: "Atracamento BEBE4B12004", fieldName: "atracamento_BEBE4B12004_1", fieldSuffix: "A" },
      { fieldValue: "Atracamento BEBE4B12004 - 2", fieldName: "atracamento_BEBE4B12004_2", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta BEBE4B12004", fieldName: "tempo_resposta_BEBE4B12004", fieldSuffix: "ms" },
      { fieldValue: "Isolação BEBE4B12004", fieldName: "isolacao_BEBE4B12004", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador BEBE4B12004", fieldName: "pulsador_BEBE4B12004", fieldSuffix: "" },
      { fieldValue: "Resistência BEBE4C00101", fieldName: "resistencia_BEBE4C00101", fieldSuffix: "Ω" },
      { fieldValue: "Indutância BEBE4C00101", fieldName: "indutancia_BEBE4C00101", fieldSuffix: "mH" },
      { fieldValue: "Atracamento BEBE4C00101", fieldName: "atracamento_BEBE4C00101", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta BEBE4C00101", fieldName: "tempo_resposta_BEBE4C00101", fieldSuffix: "ms" },
      { fieldValue: "Isolação BEBE4C00101", fieldName: "isolacao_BEBE4C00101", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador BEBE4C00101", fieldName: "pulsador_BEBE4C00101", fieldSuffix: "" },
      { fieldValue: "Resistência (0 414 703 004)", fieldName: "resistencia_0414703004", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 414 703 004)", fieldName: "indutancia_0414703004", fieldSuffix: "uH" },
      { fieldValue: "Atracamento (0 414 703 004)", fieldName: "atracamento_0414703004", fieldSuffix: "A" },
      { fieldValue: "Tempo de Resposta (0 414 703 004)", fieldName: "tempo_resposta_0414703004", fieldSuffix: "us" },
      { fieldValue: "Isolação (0 414 703 004)", fieldName: "isolacao_0414703004", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 414 703 004)", fieldName: "pulsador_0414703004", fieldSuffix: "" },
      { fieldValue: "Resistência (0 445 110 273)", fieldName: "resistencia_0445110273", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 445 110 273)", fieldName: "indutancia_0445110273", fieldSuffix: "mH" },
      { fieldValue: "Pulsador (0 445 110 273)", fieldName: "pulsador_0445110273", fieldSuffix: "A" },
      { fieldValue: "Isolação (0 445 110 273)", fieldName: "isolacao_0445110273", fieldSuffix: "us" },
      { fieldValue: "Relógio Comparador (0 445 110 273)", fieldName: "relogio_comparador_0445110273", fieldSuffix: "μm" },
      { fieldValue: "Resistência (0 445 110 375)", fieldName: "resistencia_0445110375", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 445 110 375)", fieldName: "indutancia_0445110375", fieldSuffix: "uH" },
      { fieldValue: "Pulsador (0 445 110 375)", fieldName: "pulsador_0445110375", fieldSuffix: "" },
      { fieldValue: "Isolação (0 445 110 375)", fieldName: "isolacao_0445110375", fieldSuffix: "MΩ" },
      { fieldValue: "Relógio Comparador (0 445 110 375)", fieldName: "relogio_comparador_0445110375", fieldSuffix: "μm" },
      { fieldValue: "Rsistência (0 445 120 257)", fieldName: "resistencia_0445120257", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 445 120 257)", fieldName: "indutancia_0445120257", fieldSuffix: "uH" },
      { fieldValue: "Pulsador (0 445 120 257)", fieldName: "pulsador_0445120257", fieldSuffix: "" },
      { fieldValue: "Isolação (0 445 120 257)", fieldName: "isolacao_0445120257", fieldSuffix: "MΩ" },
      { fieldValue: "Relógio Comparador (0 445 120 257)", fieldName: "relogio_comparador_0445120257", fieldSuffix: "μm" },
      { fieldValue: "Resistência (0 445 120 007 / 212 / 273)", fieldName: "resistencia_0445120007", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (0 445 120 007 / 212 / 273)", fieldName: "indutancia_0445120007", fieldSuffix: "uH" },
      { fieldValue: "Isolação (0 445 120 007 / 212 / 273)", fieldName: "isolacao_0445120007", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 445 120 007 / 212 / 273)", fieldName: "pulsador_0445120007", fieldSuffix: "" },
      { fieldValue: "Resistência (6C1Q 9K546 AC)", fieldName: "resistencia_6C1Q9K546AC", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (6C1Q 9K546 AC)", fieldName: "indutancia_6C1Q9K546AC", fieldSuffix: "uH" },
      { fieldValue: "Isolação (6C1Q 9K546 AC)", fieldName: "isolacao_6C1Q9K546AC", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (6C1Q 9K546 AC)", fieldName: "pulsador_6C1Q9K546AC", fieldSuffix: "" },
      { fieldValue: "Resistência (23670 0L050)", fieldName: "resistencia_236700L050", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (23670 0L050)", fieldName: "indutancia_236700L050", fieldSuffix: "uH" },
      { fieldValue: "Isolação (23670 0L050)", fieldName: "isolacao_236700L050", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (23670 0L050)", fieldName: "pulsador_236700L050", fieldSuffix: "" },
      { fieldValue: "Resistência (77550) Ranger", fieldName: "resistencia_77550", fieldSuffix: "kΩ" },
      { fieldValue: "Capacitância (77550) Ranger", fieldName: "capacitancia_77550", fieldSuffix: "uF" },
      { fieldValue: "Isolação (77550) Ranger", fieldName: "isolacao_77550", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (77550) Ranger", fieldName: "pulsador_77550", fieldSuffix: "" },
      { fieldValue: "Resistência (0445 116 059) Amarok/LandRover", fieldName: "resistencia_0445116059", fieldSuffix: "kΩ" },
      { fieldValue: "Capacitância (0445 116 059) Amarok/LandRover", fieldName: "capacitancia_0445116059", fieldSuffix: "uF" },
      { fieldValue: "Isolação (0445 116 059) Amarok/LandRover", fieldName: "isolacao_0445116059", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0445 116 059) Amarok/LandRover", fieldName: "pulsador_0445116059", fieldSuffix: "" },
      { fieldValue: "Resistência (23670- 30270) Hilux chicotinho", fieldName: "resistencia_2367030270", fieldSuffix: "kΩ" },
      { fieldValue: "Capacitância (23670- 30270) Hilux chicotinho", fieldName: "capacitancia_2367030270", fieldSuffix: "uF" },
      { fieldValue: "Isolação (23670- 30270) Hilux chicotinho", fieldName: "isolacao_2367030270", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (23670- 30270) Hilux chicotinho", fieldName: "pulsador_2367030270", fieldSuffix: "" },
      { fieldValue: "BOSCH XPI (CRIN4)", fieldName: "bosch_xpi_CRIN4", fieldSuffix: "" },
      { fieldValue: "Resistência (CRIN4)", fieldName: "resistencia_CRIN4_1", fieldSuffix: "Ω" },
      { fieldValue: "Resistência (CRIN4) - 2", fieldName: "resistencia_CRIN4_2", fieldSuffix: "mΩ" },
      { fieldValue: "Indutância (CRIN4)", fieldName: "indutancia_CRIN4_1", fieldSuffix: "uH" },
      { fieldValue: "Indutância (CRIN4) - 2", fieldName: "indutancia_CRIN4_2", fieldSuffix: "uH" },
      { fieldValue: "Isolação (CRIN4)", fieldName: "isolacao_CRIN4", fieldSuffix: "MΩ" },
      { fieldValue: "Resistência (0 928 400 614)", fieldName: "resistencia_0928400614", fieldSuffix: "Ω" },
      { fieldValue: "Indutância (0 928 400 614)", fieldName: "indutancia_0928400614", fieldSuffix: "mH" },
      { fieldValue: "Isolação (0 928 400 614)", fieldName: "isolacao_0928400614", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 928 400 614)", fieldName: "pulsador_0928400614", fieldSuffix: "" },
      { fieldValue: "Curso Válvula (0 928 400 614)", fieldName: "curso_valvula_0928400614", fieldSuffix: "" },
      { fieldValue: "Resistência (0 281 006 032)", fieldName: "resistencia_0281006032", fieldSuffix: "Ω" },
      { fieldValue: "Indutância (0 281 006 032)", fieldName: "indutancia_0281006032", fieldSuffix: "mH" },
      { fieldValue: "Isolação (0 281 006 032)", fieldName: "isolacao_0281006032", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 281 006 032)", fieldName: "pulsador_0281006032", fieldSuffix: "" },
      { fieldValue: "Resistência (0 281 002 241)", fieldName: "resistencia_0281002241", fieldSuffix: "Ω" },
      { fieldValue: "Indutância (0 281 002 241)", fieldName: "indutancia_0281002241", fieldSuffix: "mH" },
      { fieldValue: "Isolação (0 281 002 241)", fieldName: "isolacao_0281002241", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 281 002 241)", fieldName: "pulsador_0281002241", fieldSuffix: "" },
      { fieldValue: "Resistência (0 281 002 698)", fieldName: "resistencia_0281002698", fieldSuffix: "Ω" },
      { fieldValue: "Indutância (0 281 002 698)", fieldName: "indutancia_0281002698", fieldSuffix: "mH" },
      { fieldValue: "Isolação (0 281 002 698)", fieldName: "isolacao_028100269", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 281 002 698)", fieldName: "pulsador_0281002698", fieldSuffix: "" },
      { fieldValue: "Resistência (0 281 006 074)", fieldName: "resistencia_0281006074", fieldSuffix: "Ω" },
      { fieldValue: "Indutância (0 281 006 074)", fieldName: "indutancia_0281006074", fieldSuffix: "mH" },
      { fieldValue: "Isolação (0 281 006 074)", fieldName: "isolacao_0281006074", fieldSuffix: "MΩ" },
      { fieldValue: "Pulsador (0 281 006 074)", fieldName: "pulsador_0281006074", fieldSuffix: "" },
      { fieldValue: "Tensão Sensor Bosch (0 281 002 982)", fieldName: "tensao_0281002982", fieldSuffix: "mV" },
    ],
    statusValue: null,
    status: [
      {
        title: 'Não iniciado',
        value: 0,
      },
      {
        title: 'Em andamento',
        value: 1,
      },
      {
        title: 'Finalizado',
        value: 2,
      }
    ],
    dialog: false,
    selectedItem: null,
  }),
  components: {
    reportViewerVue
  },
  created() {
    this.initialize()
  },
  computed: {
    organizedFields() {
      let returnedFields = []

      this.fields.forEach(val => {
        let x = {
          [`"${val.fieldValue}"`]: val.fieldName
        }
        returnedFields.push(x)
      })

      return returnedFields
    }
  },
  methods: {
    initialize() {
      this.getPlates()
    },
    async getPlates() {
      let params = {
        status: 2,
      }
      let response = await PlateService.getAll(params)
      this.plates = response.data
    },
    organizeExcel(item) {
      if (item.StepElectronic !== null && item.StepQuality !== null) {
        let firstData = item.StepElectronic.dados
        let secondData = item.StepQuality.dados
        Object.assign(firstData, secondData)
        return Array.of(firstData)
      } else {
        return [item]
      }
    },
    statusFormatted(val) {
      switch (val) {
        case 1:
          return 'Em andamento'
        case 2:
          return 'Finalizado'
        default:
          return 'Não iniciado'
      }
    },
    getStatusColor(status) {
      switch (status) {
        case 0:
          return 'green'
        case 1:
          return 'blue-grey'
        case 2:
          return 'red'
      }
    },
    onFilterSearch() {
      let params = {
        status: this.statusValue
      }

      this.getFilterData(params)
    },
    onClearFilter() {
      this.statusValue = null;

      this.getPlates()
    },
    async getFilterData(params) {
      let response = await PlateService.getAll(params)
      this.plates = response.data
    },
    openItem(item) {
      let firstData = null
      let result = []
      if (item.StepElectronic !== null && item.StepQuality !== null) {
        firstData = item.StepElectronic.dados
        let secondData = item.StepQuality.dados
        Object.assign(firstData, secondData)

        let values = Object.entries(firstData)

        let returnedFields = []

        this.fields.forEach(val => {
          let x = {
            [val.fieldValue]: val.fieldName
          }
          returnedFields.push(x)
        })

        let keys = Object.entries(returnedFields)
        console.log(keys)
        keys.forEach((titleValue, index) => {
          //console.log(titleValue[1])
          if (values[index][0] === titleValue[1]) {
            let x = {
              title: titleValue[0],
              value: values[index][1]
            }
            result.push(x)
          }
        })
      }

      this.selectedItem = result
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    }
  },
})
</script>

<style lang="scss" scoped></style>
