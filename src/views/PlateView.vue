<template>
  <div class="bg-white pa-5">
    <v-data-iterator :items="this.items" :items-per-page="itemsPerPage" :search="search">
      <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
        <v-toolbar class="px-2 mb-2" :elevation="2">
          <v-text-field v-model="search" clearable density="comfortable" hide-details placeholder="Buscar"
            prepend-inner-icon="mdi-magnify" style="max-width: 300px;" variant="solo"></v-text-field>
          <v-spacer></v-spacer>
          <div class="d-flex align-center justify-end">
            <div class="d-inline-flex">
              <v-btn :disabled="page === 1" icon="mdi-arrow-left" size="small" variant="tonal" class="me-2"
                @click="prevPage"></v-btn>

              <v-btn :disabled="page === pageCount" icon="mdi-arrow-right" size="small" variant="tonal"
                @click="nextPage"></v-btn>
            </div>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:default="{ items }">
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
            <v-sheet border elevation="4">
              <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                height="150"></v-img>
              <v-list-item :title="item.raw.name" lines="two" density="comfortable"
                :subtitle="`N. de Série: ` + item.raw.num_serie">
                <template v-slot:title>
                  <strong class="text-h6">{{ item.raw.nome }}</strong>
                </template>
              </v-list-item>

              <v-table density="compact" class="text-caption">
                <tbody>
                  <tr align="right">
                    <th>Responsável:</th>

                    <td>{{ item.raw.Technician.nome }}</td>
                  </tr>
                  <tr align="right">
                    <th></th>
                    <td>
                      <v-chip variant="elevated" :color="getStatusColor(item.raw.status)" elevation="1" link
                        :to="{ name: 'Passo a passo', params: { id: item.raw.id } }">
                        {{ this.getStatusText(item.raw.status) }}
                      </v-chip>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </div>
</template>

<script>
import PlateService from '@/services/PlateService';
import icon from '@/assets/logo_axtor_solo.jpg'
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    logo: icon,
    items: [],
    itemsPerPage: 8,
    search: '',
  }),
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.getPlates();
    },
    async getPlates() {
      let response = await PlateService.getAll()
      this.items = response.data;
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
    getStatusText(status) {
      switch (status) {
        case 0:
          return 'Iniciar'
        case 1:
          return 'Em andamento'
        case 2:
          return 'Finalizado'
      }
    },
  },
})

</script>

<style lang="scss"></style>