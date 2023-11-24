<template>
  <v-container class="my-5">
    <CustomFilter :current-view="'typeplate'" @on-filter-search="onFilterSearch" @on-clear-filter="onClearFilter" />
    <v-data-table :headers="headers" :items="typePlates" height="50vh">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Tipos de Placa</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="orange-darken-2" dark class="mb-2" v-bind="props" variant="outlined">
                Novo Tipo de Placa
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
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.modelo" label="Modelo" variant="outlined"></v-text-field>
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
          <v-dialog v-model="dialogDelete" max-width="600px">
            <v-card>
              <v-card-title class="text-h5">
                Tem certeza que deseja excluir o tipo de placa?
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
import TypePlateService from '@/services/TypePlateService'
import { defineComponent } from 'vue';
import CustomFilter from '@/components/custom-filter.vue'

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    typePlates: [],
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
        title: 'Modelo',
        key: 'modelo',
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
      modelo: ''
    },
    defaultItem: {
      nome: '',
      modelo: '',
    }
  }),
  components: {
    CustomFilter
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Tipo de Placa' : 'Editar Tipo de Placa'
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
      this.getTypePlates()
    },
    async getTypePlates() {
      let response = await TypePlateService.getAll()
      this.typePlates = response.data
    },

    editItem(item) {
      this.editedIndex = this.typePlates.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.typePlates.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
      await TypePlateService.delete(this.editedItem.id).then(() => {
        this.getTypePlates()
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
        Object.assign(this.typePlates[this.editedIndex], this.editedItem)
        await TypePlateService.update(this.editedItem.id, this.editedItem)
      } else {
        this.typePlates.push(this.editedItem)
        await TypePlateService.create(this.editedItem)
      }

      this.getTypePlates()
      this.close()
    },
    onFilterSearch(val) {
      this.getQueryTypePlates(val);
    },
    async getQueryTypePlates(val) {
      let response = await TypePlateService.getAll(val)
      this.typePlates = response.data;
    },
    onClearFilter() {
      this.getTypePlates()
    }
  },
})
</script>

<style></style>