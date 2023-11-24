<template>
  <v-container class="my-5">
    <CustomFilter @on-filter-search="onFilterSearch" @on-clear-filter="onClearFilter" />
    <v-data-table :headers="headers" :items="configs" height="50vh">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Configurações</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ props }">
              <v-btn color="orange-darken-2" dark class="mb-2" v-bind="props" variant="outlined">
                Nova Configuração
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.nome" label="Nome" variant="outlined"></v-text-field>
                    </v-col>
                  </v-row>

                  <label>Pré Gravação</label>
                  <v-container class="border border-dark mb-4">
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_5_min" label="5v - Min" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_5_max" label="5v - Max" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_12_min" label="12v - Min" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_12_max" label="12v - Max" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_neg12_min" label="-12v - Min" variant="outlined"
                          suffix="mA" type="number"></v-text-field>
                      </v-col>

                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.pregrav_neg12_max" label="-12v - Max" variant="outlined"
                          suffix="mA" type="number"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <label>Pós Gravação</label>
                  <v-container class="border border-dark mb-4">
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.posgrav_5_min" label="5v - Min" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field v-model="editedItem.posgrav_5_max" label="5v - Max" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.posgrav_12_min" label="12v - Min" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field v-model="editedItem.posgrav_12_max" label="12v - Max" variant="outlined" suffix="mA"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.posgrav_neg12_min" label="-12v - Min" variant="outlined"
                          suffix="mA" type="number"></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field v-model="editedItem.posgrav_neg12_max" label="-12v - Max" variant="outlined"
                          suffix="mA" type="number"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <label>Trimpots</label>
                  <v-container class="border border-dark">
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv1" label="RV1" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv2" label="RV2" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv3" label="RV3" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv4" label="RV4" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv5" label="RV5" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv6" label="RV6" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv7" label="RV7" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv8" label="RV8" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv9" label="RV9" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.trim_rv10" label="RV10" variant="outlined" suffix="kΩ"
                          type="number"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <label>Oscilográfia</label>
                  <v-container>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_5_min" label="5v - Min" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_5_max" label="5v - Max" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_gnd_min" label="GND - Min" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_gnd_max" label="GND - Max" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_12_min" label="12v - Min" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_12_max" label="12v - Max" variant="outlined" type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_neg12_min" label="-12v - Min" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_neg12_max" label="-12v - Max" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_1khz_min" label="1kHz - Min" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_1khz_max" label="1kHz - Max" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_100hz_min" label="100Hz - Min" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_100hz_max" label="100Hz - Max" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_10khz_min" label="10kHz - Min" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-text-field v-model="editedItem.osc_10khz_max" label="10kHz - Max" variant="outlined"
                          type="number">
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange-darken-2" variant="outlined" @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="orange-darken-2" variant="outlined" @click="save">
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="600px">
            <v-card>
              <v-card-title class="text-h5">
                Tem certeza que deseja excluir a configuração?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange-darken-2" variant="outlined" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="orange-darken-2" variant="outlined" @click="deleteItemConfirm">Apagar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.createdAt`]="{ item }">
        <span>{{ new Date(item.createdAt).toLocaleString() }}</span>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-col class="d-flex justify-center">
          <v-sheet class="d-flex justify-center" width="256" height="128">
            <img src="../../assets/no_data.png" :height="128" />
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
import ConfigService from '@/services/ConfigService'
import { defineComponent } from 'vue';
import CustomFilter from '@/components/custom-filter.vue'

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    configs: [],
    headers: [
      {
        title: 'ID',
        align: 'start',
        sortable: false,
        key: 'id'
      },
      {
        title: 'Nome',
        key: 'nome',
      },
      {
        title: 'Data de Cadastro',
        key: 'createdAt',
      },
      {
        title: 'Ações',
        key: 'actions',
        align: 'end',
        sortable: false
      }
    ],
    editedIndex: -1,
    editedItem: {
      id: '',
      nome: '',
      pregrav_5_min: 0,
      pregrav_5_max: 0,
      pregrav_12_min: 0,
      pregrav_12_max: 0,
      pregrav_neg12_min: 0,
      pregrav_neg12_max: 0,
      posgrav_5_min: 0,
      posgrav_5_max: 0,
      posgrav_12_min: 0,
      posgrav_12_max: 0,
      posgrav_neg12_min: 0,
      posgrav_neg12_max: 0,
      trim_rv1: 0,
      trim_rv2: 0,
      trim_rv3: 0,
      trim_rv4: 0,
      trim_rv5: 0,
      trim_rv6: 0,
      trim_rv7: 0,
      trim_rv8: 0,
      trim_rv9: 0,
      trim_rv10: 0,
      osc_5_min: 0,
      osc_5_max: 0,
      osc_gnd_min: 0,
      osc_gnd_max: 0,
      osc_12_min: 0,
      osc_12_max: 0,
      osc_neg12_min: 0,
      osc_neg12_max: 0,
      osc_vref_min: 0,
      osc_vref_max: 0,
      osc_1khz_min: 0,
      osc_1khz_max: 0,
      osc_100hz_min: 0,
      osc_100hz_max: 0,
      osc_10khz_min: 0,
      osc_10khz_max: 0,
    },
    defaultItem: {
      nome: '',
      pregrav_5_min: 0,
      pregrav_5_max: 0,
      pregrav_12_min: 0,
      pregrav_12_max: 0,
      pregrav_neg12_min: 0,
      pregrav_neg12_max: 0,
      posgrav_5_min: 0,
      posgrav_5_max: 0,
      posgrav_12_min: 0,
      posgrav_12_max: 0,
      posgrav_neg12_min: 0,
      posgrav_neg12_max: 0,
      trim_rv1: 0,
      trim_rv2: 0,
      trim_rv3: 0,
      trim_rv4: 0,
      trim_rv5: 0,
      trim_rv6: 0,
      trim_rv7: 0,
      trim_rv8: 0,
      trim_rv9: 0,
      trim_rv10: 0,
      osc_5_min: 0,
      osc_5_max: 0,
      osc_gnd_min: 0,
      osc_gnd_max: 0,
      osc_12_min: 0,
      osc_12_max: 0,
      osc_neg12_min: 0,
      osc_neg12_max: 0,
      osc_vref_min: 0,
      osc_vref_max: 0,
      osc_1khz_min: 0,
      osc_1khz_max: 0,
      osc_100hz_min: 0,
      osc_100hz_max: 0,
      osc_10khz_min: 0,
      osc_10khz_max: 0,
    }
  }),
  components: {
    CustomFilter
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nova Configuração' : 'Editar Configuração'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.getConfigs()
    },
    async getConfigs() {
      let response = await ConfigService.getAll()
      this.configs = response.data
    },

    editItem(item) {
      this.editedIndex = this.configs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.configs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
      await ConfigService.delete(this.editedItem.id).then(() => {
        this.getConfigs()
        this.closeDelete()
      })
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
        this.sector = null
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.configs[this.editedIndex], this.editedItem)
        await ConfigService.update(this.editedItem.id, this.editedItem)
      } else {
        this.configs.push(this.editedItem)
        await ConfigService.create(this.editedItem)
      }

      this.getConfigs()
      this.close()
    },
    onFilterSearch(val) {
      this.getQueryConfigs(val)
    },
    async getQueryConfigs(val) {
      let response = await ConfigService.getAll(val)
      this.configs = response.data
    },
    onClearFilter() {
      this.getConfigs()
    }
  }
})
</script>

<style></style>