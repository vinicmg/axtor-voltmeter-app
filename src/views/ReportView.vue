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
          <download-excel :data="organizeExcel(item)" type="xlsx" name="filename.xlsx" :fields="this.fields">
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
      { fieldValue: "Pós Gravação 5v", fieldName: "posgrav_5", fieldSuffix: 'mA'},
      { fieldValue: "Pós Gravação 12v", fieldName: "posgrav_12", fieldSuffix: "mA"},
      { fieldValue: "Pós Gravação -12v ", fieldName: "posgrav_neg12", fieldSuffix: "mA"},
      { fieldValue: "RV10", fieldName: "trim_rv10", fieldSuffix: "kΩ"},
      { fieldValue: "Tensão Nominal 5v - J8/1", fieldName: "j8_1", fieldSuffix: "V"},
      { fieldValue: "Tensão Nominal 12v - J8/3", fieldName: "j8_3", fieldSuffix: "V"},
      { fieldValue: "Tensão Nominal -12v - J8/4", fieldName: "j8_4", fieldSuffix: "V"},
      { fieldValue: "TP3 e GND", fieldName: "tp3", fieldSuffix: "V"},
      { fieldValue: "C3 e GND", fieldName: "c3", fieldSuffix: "V"},
      { fieldValue: "U12 - PIN3", fieldName: "u12_pin3", fieldSuffix: "V"},
      { fieldValue: "U13 - PIN3", fieldName: "u13_pin3", fieldSuffix: "V"},
      { fieldValue: "Sensibilidade Calculada", fieldName: "sens_calc", fieldSuffix: ""},
      { fieldValue: "Resultado da Sensibilidade de Corrente", fieldName: "res_sens_corr", fieldSuffix: ""},
      { fieldValue: "Parâmetro 30", fieldName: "param_30", fieldSuffix: ""},
      { fieldValue: "Parâmetro 31", fieldName: "param_31", fieldSuffix: ""},
      { fieldValue: "Parâmetro 32", fieldName: "param_32", fieldSuffix: ""},
      { fieldValue: "Parâmetro 33", fieldName: "param_33", fieldSuffix: ""},
      { fieldValue: "Parâmetro 28", fieldName: "param_28", fieldSuffix: ""},
      { fieldValue: "Parâmetro 29", fieldName: "param_29", fieldSuffix: ""},
      { fieldValue: "Duty Min", fieldName: "duty_min", fieldSuffix: ""},
      { fieldValue: "Duty Max", fieldName: "duty_max", fieldSuffix: ""},
      { fieldValue: "Tensão Boost Linear", fieldName: "tens_boost_linear", fieldSuffix: ""},
      { fieldValue: "Tensão Boost Proporcional", fieldName: "tens_boost_proporcional", fieldSuffix: ""},
      { fieldValue: "Resistor x10", fieldName: "res_x10", fieldSuffix: ""},
      { fieldValue: "Resistência (0 414 701 051) SN 117295", fieldName: "resistencia_041405", fieldSuffix: "mΩ"},
      { fieldValue: "Indutância (0 414 701 051) SN 117295", fieldName: "indutancia_0414051", fieldSuffix: "mH"},
      { fieldValue: "Atracamento (0 414 701 051) SN 117295", fieldName: "atracamento_0414051", fieldSuffix: "A"},
      { fieldValue: "Tempo de Resposta (0 414 701 051) SN 117295", fieldName: "tempo_resposta_0414051", fieldSuffix: "us"},
      { fieldValue: "Isolação (0 414 701 051) SN 117295", fieldName: "isolacao_0414051", }
      "Pulsador (0 414 701 051) SN 117295": "pulsador_0414051",
      "Resistência (0 414 701 044) SN 044766": "resistencia_0414701044_SN044766",
      "Indutância (0 414 701 044) SN 044766": "indutancia_0414701044_SN044766",
      "Atracamento (0 414 701 044) SN 044766": "atracamento_0414701044_SN044766",
      "Tempo de Resposta (0 414 701 044) SN 044766": "tempo_resposta_0414701044_SN044766",
      "Isolação (0 414 701 044) SN 044766": "isolacao_0414701044_SN044766",
      "Pulsador (0 414 701 044) SN 044766": "pulsador_0414701044_SN044766",
      "Resistência (0 414 701 044) SN 045204": "resistencia_0414701044_SN045204",
      "Indutância (0 414 701 044) SN 045204": "indutancia_0414701044_SN045204",
      "Atracamento (0 414 701 044) SN 045204": "atracamento_0414701044_SN045204",
      "Tempo de Resposta (0 414 701 044) SN 045204": "tempo_resposta_0414701044_SN045204",
      "Isolação (0 414 701 044) SN 045204": "isolacao_0414701044_SN045204",
      "Pulsador (0 414 701 044) SN 045204": "pulsador_0414701044_SN045204",
      "Resistência (0 414 701 019) SN 084388": "resistencia_0414701019",
      "Indutância (0 414 701 019) SN 084388": "indutancia_0414701019",
      "Atracamento (0 414 701 019) SN 084388": "atracamento_0414701019",
      "Tempo de Resposta (0 414 701 019) SN 084388": "tempo_resposta_0414701019",
      "Isolação (0 414 701 019) SN 084388": "isolacao_0414701019",
      "Pulsador (0 414 701 019) SN 084388": "pulsador_0414701019",
      "Resistência D13A 21340611 (REPARADO OU ANTIGO)": "resistencia_21340611_antigo_1",
      "Indutância D13A 21340611 (REPARADO OU ANTIGO)": "indutancia_2134061_antigo_1",
      "Atracamento D13A 21340611 (REPARADO OU ANTIGO)": "atracamento_2134061_antigo_1",
      "Tempo de Resposta D13A 21340611 (REPARADO OU ANTIGO)": "tempo_resposta_2134061_antigo_1",
      "Isolação D13A 21340611 (REPARADO OU ANTIGO)": "isolacao_21340611_antigo",
      "Pulsador D13A 21340611 (REPARADO OU ANTIGO)": "pulsador_21340611_antigo",
      "Resistência D13A 21340611 (REPARADO OU ANTIGO) - 2": "resistencia_21340611_antigo_2",
      "Indutância D13A 21340611 (REPARADO OU ANTIGO) - 2": "indutancia_2134061_antigo_2",
      "Atracamento D13A 21340611 (REPARADO OU ANTIGO) - 2": "atracamento_2134061_antigo_2",
      "Tempo de Resposta D13A 21340611 (REPARADO OU ANTIGO) - 2": "tempo_resposta_2134061_antigo_2",
      "Resistência D13A 21340611 (NOVO)": "resistencia_21340611_novo_1",
      "Indutância D13A 21340611 (NOVO)": "indutancia_2134061_novo_1",
      "Atracamento D13A 21340611 (NOVO)": "atracamento_2134061_novo_1",
      "Tempo de Resposta D13A 21340611 (NOVO)": "tempo_resposta_2134061_novo_1",
      "Isolação D13A 21340611 (NOVO)": "isolacao_21340611_novo",
      "Pulsador D13A 21340611 (NOVO)": "pulsador_21340611_novo",
      "Resistência D13A 21340611 (NOVO) - 2": "resistencia_21340611_novo_2",
      "Indutância D13A 21340611 (NOVO) - 2": "indutancia_2134061_novo_2",
      "Atracamento D13A 21340611 (NOVO) - 2": "atracamento_2134061_novo_2",
      "Tempo de Resposta D13A 21340611 (NOVO) - 2": "tempo_resposta_2134061_novo_2",
      "Resistência D13A 21340616 (SN000000001)": "resistencia_21340616_SN000000001_1",
      "Indutância D13A 21340616 (SN000000001)": "indutancia_21340616_SN000000001_1",
      "Atracamento D13A 21340616 (SN000000001)": "atracamento_21340616_SN000000001_1",
      "Tempo de Resposta D13A 21340616 (SN000000001)": "tempo_resposta_21340616_SN000000001_1",
      "Isolação D13A 21340616 (SN000000001)": "isolacao_21340616_SN000000001",
      "Pulsador D13A 21340616 (SN000000001)": "pulsador_21340616_SN000000001",
      "Resistência D13A 21340616 (SN000000002)": "resistencia_21340616_SN000000002_1",
      "Indutância D13A 21340616 (SN000000002)": "indutancia_21340616_SN000000002_1",
      "Atracamento D13A 21340616 (SN000000002)": "atracamento_21340616_SN000000002_1",
      "Tempo de Resposta D13A 21340616 (SN000000002)": "tempo_resposta_21340616_SN000000002_1",
      "Isolação D13A 21340616 (SN000000002)": "isolacao_21340616_SN000000002",
      "Pulsador D13A 21340616 (SN000000002)": "pulsador_21340616_SN000000002",
      "Resistência D13A 21340616 (SN000000001) - 2": "resistencia_21340616_SN000000001_2",
      "Indutância D13A 21340616 (SN000000001) - 2": "indutancia_21340616_SN000000001_2",
      "Atracamento D13A 21340616 (SN000000001) - 2": "atracamento_21340616_SN000000001_2",
      "Tempo de Resposta D13A 21340616 (SN000000001) - 2": "tempo_resposta_21340616_SN000000001_2",
      "Resistência D13A 21340616 (SN000000002) - 2": "resistencia_21340616_SN000000002_2",
      "Indutância D13A 21340616 (SN000000002) - 2": "indutancia_21340616_SN000000002_2",
      "Atracamento D13A 21340616 (SN000000002) - 2": "atracamento_21340616_SN000000002_2",
      "Tempo de Resposta D13A 21340616 (SN000000002) - 2": "tempo_resposta_21340616_SN000000002_2",
      "Resistência (0 414 799 008)": "resistencia_0414799008",
      "Indutância (0 414 799 008)": "indutancia_0414799008",
      "Atracamento (0 414 799 008)": "atracamento_0414799008",
      "Tempo de Resposta (0 414 799 008)": "tempo_resposta_0414799008",
      "Vedação (0 414 799 008)": "vedacao_0414799008",
      "Isolação (0 414 799 008)": "isolacao_0414799008",
      "Pulsador (0 414 799 008)": "pulsador_0414799008",
      "Resistência (0 414 799 005)": "resistencia_0414799005",
      "Indutância (0 414 799 005)": "indutancia_0414799005",
      "Atracamento (0 414 799 005)": "atracamento_0414799005",
      "Tempo de Resposta (0 414 799 005)": "tempo_resposta_0414799005",
      "Isolação (0 414 799 005)": "isolacao_0414799005",
      "Pulsador (0 414 799 005)": "pulsador_0414799005",
      "Resistência BEBE4B12004": "resistencia_BEBE4B12004",
      "Indutância BEBE4B12004": "indutancia_BEBE4B12004",
      "Atracamento BEBE4B12004": "atracamento_BEBE4B12004_1",
      "Atracamento BEBE4B12004 - 2": "atracamento_BEBE4B12004_2",
      "Tempo de Resposta BEBE4B12004": "tempo_resposta_BEBE4B12004",
      "Isolação BEBE4B12004": "isolacao_BEBE4B12004",
      "Pulsador BEBE4B12004": "pulsador_BEBE4B12004",
      "Resistência BEBE4C00101": "resistencia_BEBE4C00101",
      "Indutância BEBE4C00101": "indutancia_BEBE4C00101",
      "Atracamento BEBE4C00101": "atracamento_BEBE4C00101",
      "Tempo de Resposta BEBE4C00101": "tempo_resposta_BEBE4C00101",
      "Isolação BEBE4C00101": "isolacao_BEBE4C00101",
      "Pulsador BEBE4C00101": "pulsador_BEBE4C00101",
      "Resistência (0 414 703 004)": "resistencia_0414703004",
      "Indutância (0 414 703 004)": "indutancia_0414703004",
      "Atracamento (0 414 703 004)": "atracamento_0414703004",
      "Tempo de Resposta (0 414 703 004)": "tempo_resposta_0414703004",
      "Isolação (0 414 703 004)": "isolacao_0414703004",
      "Pulsador (0 414 703 004)": "pulsador_0414703004",
      "Resistência (0 445 110 273)": "resistencia_0445110273",
      "Indutância (0 445 110 273)": "indutancia_0445110273",
      "Pulsador (0 445 110 273)": "pulsador_0445110273",
      "Isolação (0 445 110 273)": "isolacao_0445110273",
      "Relógio Comparador (0 445 110 273)": "relogio_comparador_0445110273",
      "Resistência (0 445 110 375)": "resistencia_0445110375",
      "Indutância (0 445 110 375)": "indutancia_0445110375",
      "Pulsador (0 445 110 375)": "pulsador_0445110375",
      "Isolação (0 445 110 375)": "isolacao_0445110375",
      "Relógio Comparador (0 445 110 375)": "relogio_comparador_0445110375",
      "Rsistência (0 445 120 257)": "resistencia_0445120257",
      "Indutância (0 445 120 257)": "indutancia_0445120257",
      "Pulsador (0 445 120 257)": "pulsador_0445120257",
      "Isolação (0 445 120 257)": "isolacao_0445120257",
      "Relógio Comparador (0 445 120 257)": "relogio_comparador_0445120257",
      "Resistência (0 445 120 007 / 212 / 273)": "resistencia_0445120007",
      "Indutância (0 445 120 007 / 212 / 273)": "indutancia_0445120007",
      "Isolação (0 445 120 007 / 212 / 273)": "isolacao_0445120007",
      "Pulsador (0 445 120 007 / 212 / 273)": "pulsador_0445120007",
      "Resistência (6C1Q 9K546 AC)": "resistencia_6C1Q9K546AC",
      "Indutância (6C1Q 9K546 AC)": "indutancia_6C1Q9K546AC",
      "Isolação (6C1Q 9K546 AC)": "isolacao_6C1Q9K546AC",
      "Pulsador (6C1Q 9K546 AC)": "pulsador_6C1Q9K546AC",
      "Resistência (23670 0L050)": "resistencia_236700L050",
      "Indutância (23670 0L050)": "indutancia_236700L050",
      "Isolação (23670 0L050)": "isolacao_236700L050",
      "Pulsador (23670 0L050)": "pulsador_236700L050",
      "Resistência (77550) Ranger": "resistencia_77550",
      "Capacitância (77550) Ranger": "capacitancia_77550",
      "Isolação (77550) Ranger": "isolacao_77550",
      "Pulsador (77550) Ranger": "pulsador_77550",
      "Resistência (0445 116 059) Amarok/LandRover": "resistencia_0445116059",
      "Capacitância (0445 116 059) Amarok/LandRover": "capacitancia_0445116059",
      "Isolação (0445 116 059) Amarok/LandRover": "isolacao_0445116059",
      "Pulsador (0445 116 059) Amarok/LandRover": "pulsador_0445116059",
      "Resistência (23670- 30270) Hilux chicotinho": "resistencia_2367030270",
      "Capacitância (23670- 30270) Hilux chicotinho": "capacitancia_2367030270",
      "Isolação (23670- 30270) Hilux chicotinho": "isolacao_2367030270",
      "Pulsador (23670- 30270) Hilux chicotinho": "pulsador_2367030270",
      "BOSCH XPI (CRIN4)": "bosch_xpi_CRIN4",
      "Resistência (CRIN4)": "resistencia_CRIN4_1",
      "Resistência (CRIN4) - 2": "resistencia_CRIN4_2",
      "Indutância (CRIN4)": "indutancia_CRIN4_1",
      "Indutância (CRIN4) - 2": "indutancia_CRIN4_2",
      "Isolação (CRIN4)": "isolacao_CRIN4",
      "Resistência (0 928 400 614)": "resistencia_0928400614",
      "Indutância (0 928 400 614)": "indutancia_0928400614",
      "Isolação (0 928 400 614)": "isolacao_0928400614",
      "Pulsador (0 928 400 614)": "pulsador_0928400614",
      "Curso Válvula (0 928 400 614)": "curso_valvula_0928400614",
      "Resistência (0 281 006 032)": "resistencia_0281006032",
      "Indutância (0 281 006 032)": "indutancia_0281006032",
      "Isolação (0 281 006 032)": "isolacao_0281006032",
      "Pulsador (0 281 006 032)": "pulsador_0281006032",
      "Resistência (0 281 002 241)": "resistencia_0281002241",
      "Indutância (0 281 002 241)": "indutancia_0281002241",
      "Isolação (0 281 002 241)": "isolacao_0281002241",
      "Pulsador (0 281 002 241)": "pulsador_0281002241",
      "Resistência (0 281 002 698)": "resistencia_0281002698",
      "Indutância (0 281 002 698)": "indutancia_0281002698",
      "Isolação (0 281 002 698)": "isolacao_028100269",
      "Pulsador (0 281 002 698)": "pulsador_0281002698",
      "Resistência (0 281 006 074)": "resistencia_0281006074",
      "Indutância (0 281 006 074)": "indutancia_0281006074",
      "Isolação (0 281 006 074)": "isolacao_0281006074",
      "Pulsador (0 281 006 074)": "pulsador_0281006074",
      "Tensão Sensor Bosch (0 281 002 982)": "tensao_0281002982"
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
        let keys = Object.entries(this.fields)

        keys.forEach((titleValue, index) => {
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
