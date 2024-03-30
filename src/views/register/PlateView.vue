<template>
  <v-container class="my-5">
    <CustomFilter :current-view="'plate'" @on-filter-search="onOnFilterSearch" @on-clear-filter="onClearFilter" />
    <v-data-table :headers="headers" :items="plates">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Equipamentos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="orange-darken-2" dark class="mb-2" v-bind="props" variant="outlined">
                Nova Placa
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
                      <v-text-field v-model="editedItem.nome" label="Nome da Placa" variant="outlined"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.num_serie" label="Número de Série"
                        variant="outlined"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-select v-model="typePlate" label="Tipo de Placa" :items="typePlates"
                        variant="outlined"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select v-model="config" label="Configuração" :items="configs" variant="outlined"></v-select>
                    </v-col>
                  </v-row>
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
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Tem certeza que deseja excluir a placa?
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange-darken-2" variant="outlined" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="orange-darken-2" variant="outlined" @click="deleteItemConfirm">Apagar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
import { defineComponent } from 'vue';
import PlateService from '@/services/PlateService';
import TypePlateService from '@/services/TypePlateService';
import ConfigService from '@/services/ConfigService';
import CustomFilter from '@/components/custom-filter.vue'

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    plates: [],
    typePlates: [],
    typePlate: null,
    configs: [],
    config: null,
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
        title: 'Data de Cadastro',
        key: 'createdAt'
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
    editedIndex: -1,
    editedItem: {
      id: '',
      nome: '',
      num_serie: '',
      status: 0,
      id_tp_placa: '',
      id_config: ''
    },
    defaultItem: {
      nome: '',
      num_serie: '',
      status: 0,
      id_tp_placa: '',
      id_config: ''
    }
  }),
  components: {
    CustomFilter
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nova Placa' : 'Editar Placa';
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getPlates();
      this.getTypePlates();
      this.getConfigs();
    },
    async getPlates() {
      let response = await PlateService.getAll();
      this.plates = response.data;
    },
    async getTypePlates() {
      let response = await TypePlateService.getAll()
      this.typePlates = response.data.map(item => {
        let typePlate = {
          title: item.nome + ' ' + item.modelo,
          value: item.id
        };
        return typePlate;
      })
    },
    async getConfigs() {
      let response = await ConfigService.getAll();
      this.configs = response.data.map(item => {
        let config = {
          title: item.nome,
          value: item.id,
        };
        return config;
      })
    },
    editItem(item) {
      this.editedIndex = this.plates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.typePlate = item.id_tp_placa;
      this.config = item.id_config;
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.plates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      await PlateService.delete(this.editedItem.id).then(() => {
        this.getPlates();
        this.closeDelete();
      });
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.typePlate = null;
        this.config = null;
        this.technician = null;
      })
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      this.editedItem['id_tp_placa'] = this.typePlate;
      this.editedItem['id_config'] = this.config;
      if (this.editedIndex > -1) {
        Object.assign(this.plates[this.editedIndex], this.editedItem);
        await PlateService.update(this.editedItem.id, this.editedItem);
      } else {
        this.plates.push(this.editedItem);
        await PlateService.create(this.editedItem);
      }
      this.getPlates();
      this.close();
    },
    onOnFilterSearch(val) {
      this.getQueryPlates(val);
    },
    async getQueryPlates(val) {
      let response = await PlateService.getAll(val)
      this.plates = response.data;
    },
    onClearFilter() {
      this.getPlates();
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
  }
})

</script>
  
<style></style>
  