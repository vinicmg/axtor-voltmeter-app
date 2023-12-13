<template>
    <div class="bg-white pa-5">
        <v-data-iterator :items="this.items" items-per-page="4">
            <template v-slot:default="{ items }">
                <v-row>
                    <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4" md="4">
                        <v-card border elevation="4">
                            <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                                height="100" class="mb-3"></v-img>
                            <v-card-title>
                                {{ item.raw.title }}
                            </v-card-title>
                            <v-card-subtitle>
                                <span class="mb-3">Responsável: Vinicius</span>
                            </v-card-subtitle>
                            <v-card-actions>
                                <v-chip :color="getStatusColor(item.raw.status)" variant="elevated"
                                    :to="{ name: item.raw.page, params: { id: this.$route.params.id } }">
                                    {{ this.getStatusText(item.raw.status) }}
                                </v-chip>
                                <v-spacer></v-spacer>
                                <v-btn :icon="item.raw.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                    @click="item.raw.show = !item.raw.show"></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="item.raw.show">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        <v-row class="mt-1">
                                            <span>{{ item.raw.subtitle }}</span>
                                            <v-chip class="mt-4" color="orange-darken-4" label
                                                @click="changeResponsable(item.raw.status)">
                                                <v-icon start icon="mdi-pencil"></v-icon>
                                                Alterar Responsável
                                            </v-chip>
                                        </v-row>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import PlateService from '@/services/PlateService'

export default defineComponent({
    data: () => ({
        logo: icon,
        show: false,
        items: []
    }),
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.getPlate()
        },
        async getPlate() {
            let param = {
                id: this.$route.params.id
            }
            let response = await PlateService.getAll(param)
            this.items = JSON.parse(response.data[0].etapas)
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
                    return 'Concluído'
            }
        },
        changeResponsable(val) {
            alert('Mudar responsável...' + val)
        }
    }
})
</script>