<template>
  <v-container class="my-5">
    <CustomFilter @on-filter-search="onFilterSearch" @on-clear-filter="onClearFilter" />
    <v-data-table :headers="headers" :items="sectors">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Setor</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="orange-darken-2" dark class="mb-2" v-bind="props" variant="outlined">
                Novo Setor
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
                      <v-text-field v-model="editedItem.nome" label="Nome do Setor" variant="outlined"></v-text-field>
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
                Tem certeza que deseja excluir o setor?
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
import CustomFilter from '@/components/custom-filter.vue'
import SectorService from '@/services/SectorService'
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    dialog: false,
    dialogDelete: false,
    sectors: [],
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
    },
    defaultItem: {
      nome: '',
    },
  }),
  components: { CustomFilter },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Setor' : 'Editar Setor';
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getSectors();
    },
    async getSectors() {
      let resData = await SectorService.getAll();
      this.sectors = resData.data;
    },
    editItem(item) {
      this.editedIndex = this.sectors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.sectors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      await SectorService.delete(this.editedItem.id).then(() => {
        this.getSectors();
        this.closeDelete();
      });
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.sectors[this.editedIndex], this.editedItem);
        await SectorService.update(this.editedItem.id, this.editedItem);
      }
      else {
        this.sectors.push(this.editedItem);
        await SectorService.create(this.editedItem);
      }
      this.getSectors();
      this.close();
    },
    onFilterSearch(val) {
      this.getQuerySectors(val);
    },
    async getQuerySectors(val) {
      let response = await SectorService.getAll(val)
      this.sectors = response.data
    },
    onClearFilter() {
      this.getSectors();
    }
  },
})

</script>

<style></style>
