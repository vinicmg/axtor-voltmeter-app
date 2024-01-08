<template>
    <div class="bg-white pa-5">
        <dialogSector :showDialog="dialog" @closeDialog="closeDialog"></dialogSector>
        <v-row>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                        height="100" class="mb-3"></v-img>
                    <v-card-title>
                        Conferência Mecânica
                    </v-card-title>
                    <v-card-subtitle>
                        <!--<span class="mb-3">Responsável: {{ this.technicians[0].mecanica.nome }}</span>-->
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip :color="getStatusColor(0)" variant="elevated"
                            :to="{ name: 'conf-mecanica', params: { id: this.$route.params.id } }">
                            {{ this.getStatusText(0) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn :icon="showMechanical ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showMechanical = !showMechanical"></v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="showMechanical">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus
                                        nunc, eu
                                        porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                        eros
                                        accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                        tincidunt
                                        elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis.
                                        Integer
                                        auctor
                                        porttitor convallis.</span>
                                    <v-chip class="mt-4" color="orange-darken-4" label @click="changeResponsable()">
                                        <v-icon start icon="mdi-pencil"></v-icon>
                                        Alterar Responsável
                                    </v-chip>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                        height="100" class="mb-3"></v-img>
                    <v-card-title>
                        Conferência Eletrônica
                    </v-card-title>
                    <v-card-subtitle>

                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip :color="getStatusColor(0)" variant="elevated"
                            :to="{ name: 'conf-eletronica', params: { id: this.$route.params.id } }">
                            {{ this.getStatusText(0) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn :icon="showElectronic ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showElectronic = !showElectronic"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showElectronic">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus
                                        nunc, eu
                                        porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                        eros
                                        accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                        tincidunt
                                        elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis.
                                        Integer
                                        auctor
                                        porttitor convallis.</span>
                                    <v-chip class="mt-4" color="orange-darken-4" label @click="changeResponsable()">
                                        <v-icon start icon="mdi-pencil"></v-icon>
                                        Alterar Responsável
                                    </v-chip>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                        height="100" class="mb-3"></v-img>
                    <v-card-title>
                        Conferência Elétrica
                    </v-card-title>
                    <v-card-subtitle>

                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip :color="getStatusColor(0)" variant="elevated"
                            :to="{ name: 'conf-eletrica', params: { id: this.$route.params.id } }">
                            {{ this.getStatusText(0) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn :icon="showElectric ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showElectric = !showElectric"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showElectric">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus
                                        nunc, eu
                                        porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                        eros
                                        accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                        tincidunt
                                        elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis.
                                        Integer
                                        auctor
                                        porttitor convallis.</span>
                                    <v-chip class="mt-4" color="orange-darken-4" label @click="changeResponsable()">
                                        <v-icon start icon="mdi-pencil"></v-icon>
                                        Alterar Responsável
                                    </v-chip>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                        height="100" class="mb-3"></v-img>
                    <v-card-title>
                        Conferência de Qualidade
                    </v-card-title>
                    <v-card-subtitle>

                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip :color="getStatusColor(0)" variant="elevated"
                            :to="{ name: 'conf-qualidade', params: { id: this.$route.params.id } }">
                            {{ this.getStatusText(0) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn :icon="showQuality ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showQuality = !showQuality"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showQuality">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus
                                        nunc, eu
                                        porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                        eros
                                        accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                        tincidunt
                                        elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis.
                                        Integer
                                        auctor
                                        porttitor convallis.</span>
                                    <v-chip class="mt-4" color="orange-darken-4" label @click="changeResponsable()">
                                        <v-icon start icon="mdi-pencil"></v-icon>
                                        Alterar Responsável
                                    </v-chip>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`" :src="logo"
                        height="100" class="mb-3"></v-img>
                    <v-card-title>
                        Conferência de Embalagem
                    </v-card-title>
                    <v-card-subtitle>

                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip :color="getStatusColor(0)" variant="elevated"
                            :to="{ name: 'conf-mecanica', params: { id: this.$route.params.id } }">
                            {{ this.getStatusText(0) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn :icon="showPacking ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showPacking = !showPacking"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showPacking">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices lacus
                                        nunc, eu
                                        porta sem pellentesque quis. Sed ornare ante sit amet hendrerit convallis. Quisque a
                                        eros
                                        accumsan, efficitur ipsum non, sagittis nibh. Phasellus vel pulvinar magna, quis
                                        tincidunt
                                        elit. Praesent commodo dignissim rhoncus. Curabitur sit amet lobortis turpis.
                                        Integer
                                        auctor
                                        porttitor convallis.</span>
                                    <v-chip class="mt-4" color="orange-darken-4" label @click="changeResponsable()">
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

        <div class="action_finish">
            <v-btn width="15vw" variant="flat" color="orange-darken-4" prepend-icon="mdi-check-circle" disabled="true"
                @click="openFinishDialog">Finalizar</v-btn>
        </div>

    </div>
</template>
<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import dialogSector from '@/components/dialog_sector.vue'

export default defineComponent({
    data: () => ({
        logo: icon,
        showMechanical: false,
        showElectronic: false,
        showElectric: false,
        showQuality: false,
        showPacking: false,
        dialog: false,
    }),
    components: {
        dialogSector,
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {

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
        changeResponsable() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        },
        openFinishDialog() {
            alert('Finalizar')
        }
    }
})
</script>
<style lang="scss">
.action_finish {
    z-index: 1000;
    position: absolute;
    bottom: 50px;
    right: 50px;
}
</style>