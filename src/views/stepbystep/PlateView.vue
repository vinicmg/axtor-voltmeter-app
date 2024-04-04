<template>
    <div class="bg-white pa-5">
        <dialogSector
            :showDialog="dialog"
            @closeDialog="closeDialog"
            @saveDialog="saveDialog"
        ></dialogSector>
        <v-row>
            <v-col cols="12" sm="4" md="4">
                <v-card border elevation="4">
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <v-card-title> Conferência Mecânica </v-card-title>
                    <v-card-subtitle>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Responsável:</td>
                                    <td align="right">
                                        {{ this.getTechnicianName(this.stepMechanical.id_tecnico) }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip
                            :color="getStatusColor(this.stepMechanical.status)"
                            variant="elevated"
                            :to="{ name: 'conf-mecanica', params: { id: this.$route.params.id } }"
                        >
                            {{ this.getStatusText(this.stepMechanical.status) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn
                            :icon="showMechanical ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showMechanical = !showMechanical"
                        ></v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="showMechanical">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <v-chip
                                        class="mt-4"
                                        color="orange-darken-4"
                                        label
                                        @click="changeResponsable(1)"
                                    >
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
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <v-card-title> Conferência Eletrônica </v-card-title>
                    <v-card-subtitle>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Responsável:</td>
                                    <td align="right">
                                        {{ this.getTechnicianName(this.stepElectronic.id_tecnico) }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip
                            :color="getStatusColor(this.stepElectronic.status)"
                            variant="elevated"
                            :to="{ name: 'conf-eletronica', params: { id: this.$route.params.id } }"
                        >
                            {{ this.getStatusText(this.stepElectronic.status) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn
                            :icon="showElectronic ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showElectronic = !showElectronic"
                        ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showElectronic">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <v-chip
                                        class="mt-4"
                                        color="orange-darken-4"
                                        label
                                        @click="changeResponsable(2)"
                                    >
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
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <v-card-title> Conferência Elétrica </v-card-title>
                    <v-card-subtitle>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Responsável:</td>
                                    <td align="right">
                                        {{ this.getTechnicianName(this.stepElectric.id_tecnico) }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip
                            :color="getStatusColor(this.stepElectric.status)"
                            variant="elevated"
                            :to="{ name: 'conf-eletrica', params: { id: this.$route.params.id } }"
                        >
                            {{ this.getStatusText(this.stepElectric.status) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn
                            :icon="showElectric ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showElectric = !showElectric"
                        ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showElectric">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <v-chip
                                        class="mt-4"
                                        color="orange-darken-4"
                                        label
                                        @click="changeResponsable(3)"
                                    >
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
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <v-card-title> Conferência de Qualidade </v-card-title>
                    <v-card-subtitle>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Responsável:</td>
                                    <td align="right">
                                        {{ this.getTechnicianName(this.stepQuality.id_tecnico) }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip
                            :color="getStatusColor(this.stepQuality.status)"
                            variant="elevated"
                            :to="{ name: 'conf-qualidade', params: { id: this.$route.params.id } }"
                        >
                            {{ this.getStatusText(this.stepQuality.status) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn
                            :icon="showQuality ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showQuality = !showQuality"
                        ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showQuality">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <v-chip
                                        class="mt-4"
                                        color="orange-darken-4"
                                        label
                                        @click="changeResponsable(4)"
                                    >
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
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <v-card-title> Conferência de Embalagem </v-card-title>
                    <v-card-subtitle>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td>Responsável:</td>
                                    <td align="right">
                                        {{ this.getTechnicianName(this.stepPacking.id_tecnico) }}
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                        <v-alert
                            v-if="showPackingAlert"
                            text="Defina um técnico para continuar."
                            variant="tonal"
                            type="warning"
                        ></v-alert>
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-chip
                            :color="getPackingColor(this.stepPacking.status)"
                            variant="elevated"
                            @click="dispatchPackage()"
                            :disabled="this.stepPacking.status === 2"
                        >
                            {{ this.getPackingText(this.stepPacking.status) }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-btn
                            :icon="showPacking ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            @click="showPacking = !showPacking"
                        ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="showPacking">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row class="mx-1 my-1">
                                    <v-chip
                                        class="mt-4"
                                        color="orange-darken-4"
                                        label
                                        @click="changeResponsable(5)"
                                    >
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
                    <v-img
                        :gradient="`to top right, rgba(255, 255, 255, .1), rgba(246, 147, 30, .4)`"
                        :src="logo"
                        height="100"
                        class="mb-3"
                    ></v-img>
                    <div class="d-flex flex-row px-3 py-2">
                        <v-file-input
                            v-model="this.arquivo"
                            class="pr-2"
                            label="Arquivo Config.ini"
                            variant="outlined"
                        ></v-file-input>
                        <v-btn
                            variant="flat"
                            color="orange-darken-4"
                            @click="convertFile()"
                            width="8vw"
                            class="mt-2"
                            >Enviar</v-btn
                        >
                    </div>
                    <v-chip
                        v-if="this.blobFile"
                        @click="this.saveBlobAsTextFile(this.blobFile, 'config.ini')"
                        color="orange-darken-4"
                        label
                        class="d-flex justify-center mx-3 mb-2"
                    >
                        <v-icon start icon="mdi-file"></v-icon>Baixar Config.ini</v-chip
                    >
                </v-card>
            </v-col>
        </v-row>

        <div class="action_finish">
            <v-btn
                width="15vw"
                variant="flat"
                color="orange-darken-4"
                prepend-icon="mdi-check-circle"
                :disabled="enableFinishButton"
                @click="openFinishDialog"
                >Finalizar</v-btn
            >
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import icon from '@/assets/icon.png'
import dialogSector from '@/components/dialog_sector.vue'
import StepQualityService from '@/services/StepQualityService'
import StepMechanicalService from '@/services/StepMechanicalService'
import StepElectricService from '@/services/StepElectricService'
import TechnicianService from '@/services/TechnicianService'
import StepElectronicService from '@/services/StepElectronicService'
import StepPackingService from '@/services/StepPackingService'
import PlateService from '@/services/PlateService'

export default defineComponent({
    data: () => ({
        logo: icon,
        showMechanical: false,
        showElectronic: false,
        showElectric: false,
        showQuality: false,
        showPacking: false,
        dialog: false,
        showPackingAlert: false,
        arquivo: [],
        blobFile: null,
        stepMechanical: {
            status: 0
        },
        stepQuality: {
            status: 0
        },
        stepElectric: {
            status: 0
        },
        stepElectronic: {
            status: 0
        },
        stepPacking: {
            status: 0
        },
        currentSectorTechnician: 0,
        technicians: []
    }),
    components: {
        dialogSector
    },
    created() {
        this.initialize()
    },
    computed: {
        enableFinishButton() {
            if (
                this.stepMechanical.status === 2 &&
                this.stepQuality.status === 2 &&
                this.stepElectric.status === 2 &&
                this.stepElectronic.status === 2 &&
                this.stepPacking.status === 2
            ) {
                return false
            }

            return true
        }
    },
    methods: {
        initialize() {
            this.getStepMechanical()
            this.getStepQuality()
            this.getStepElectric()
            this.getStepElectronic()
            this.getStepPacking()
            this.getAllTechnicians()
            this.getConfigFile()
        },
        async getConfigFile() {
            let params = {
                id: this.$route.params.id
            }

            let response = await PlateService.getAll(params)
            if (response.data[0].arquivo) {
                let file = response.data[0].arquivo
                let cuttedString = file.substring(file.indexOf(',') + 1)
                let decodedFile = atob(cuttedString)

                const byteArrays = []

                for (let i = 0; i < decodedFile.length; i++) {
                    byteArrays.push(decodedFile.charCodeAt(i))
                }

                const byteArray = new Uint8Array(byteArrays)

                this.blobFile = new Blob([byteArray], { type: 'text/plain' })
            }
        },
        async getStepMechanical() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepMechanicalService.getAll(params)
            if (response.data) {
                this.stepMechanical = response.data
            }
        },
        async getStepQuality() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepQualityService.getAll(params)
            if (response.data) {
                this.stepQuality = response.data
            }
        },
        async getStepElectric() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepElectricService.getAll(params)
            if (response.data) {
                this.stepElectric = response.data
            }
        },
        async getStepElectronic() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepElectronicService.getAll(params)
            if (response.data) {
                this.stepElectronic = response.data
            }
        },
        async getStepPacking() {
            let params = {
                id_placa: this.$route.params.id
            }
            let response = await StepPackingService.getAll(params)
            if (response.data) {
                this.stepPacking = response.data
            }
        },
        getStatusColor(status) {
            switch (status) {
                case 0:
                    return 'green'
                case 1:
                    return 'light-blue-darken-2'
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
        getPackingColor(status) {
            switch (status) {
                case 0:
                    return 'green'
                case 2:
                    return 'red'
            }
        },
        getPackingText(status) {
            switch (status) {
                case 0:
                    return 'Despachar'
                case 2:
                    return 'Despachado'
            }
        },
        changeResponsable(sector) {
            this.currentSectorTechnician = sector
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
            this.currentSectorTechnician = 0
        },
        saveDialog(technician) {
            if (this.currentSectorTechnician != 0) {
                switch (this.currentSectorTechnician) {
                    case 1:
                        this.saveMechanical(technician)
                        break
                    case 2:
                        this.saveElectronic(technician)
                        break
                    case 3:
                        this.saveElectric(technician)
                        break
                    case 4:
                        this.saveQuality(technician)
                        break
                    case 5:
                        this.savePacking(technician)
                        break
                    default:
                        break
                }
            }
            this.dialog = false
            this.currentSectorTechnician = 0
        },
        async saveMechanical(technician) {
            const params = {
                id_tecnico: technician,
                id_placa: this.$route.params.id,
                status: 0,
                ultima_etapa: 1
            }
            if (this.stepMechanical.id) {
                await StepMechanicalService.update(this.stepMechanical.id, params)
            } else {
                await StepMechanicalService.create(params)
            }

            this.stepMechanical.id_tecnico = technician
            this.stepMechanical.status = 0
        },
        async saveQuality(technician) {
            const params = {
                id_tecnico: technician,
                id_placa: this.$route.params.id,
                status: 0,
                ultima_etapa: 1
            }
            if (this.stepQuality.id) {
                await StepQualityService.update(this.stepQuality.id, params)
            } else {
                await StepQualityService.create(params)
            }

            this.stepQuality.id_tecnico = technician
            this.stepQuality.status = 0
        },
        async saveElectric(technician) {
            const params = {
                id_tecnico: technician,
                id_placa: this.$route.params.id,
                status: 0,
                ultima_etapa: 1
            }
            if (this.stepElectric.id) {
                await StepElectricService.update(this.stepElectric.id, params)
            } else {
                await StepElectricService.create(params)
            }

            this.stepElectric.id_tecnico = technician
            this.stepElectric.status = 0
        },
        async saveElectronic(technician) {
            const params = {
                id_tecnico: technician,
                id_placa: this.$route.params.id,
                status: 0,
                ultima_etapa: 1
            }
            if (this.stepElectronic.id) {
                await StepElectronicService.update(this.stepElectronic.id, params)
            } else {
                await StepElectronicService.create(params)
            }

            this.stepElectronic.id_tecnico = technician
            this.stepElectronic.status = 0
        },
        async savePacking(technician) {
            const params = {
                id_tecnico: technician,
                id_placa: this.$route.params.id,
                status: 0
            }
            if (this.stepPacking.id) {
                await StepPackingService.update(this.stepPacking.id, params)
            } else {
                await StepPackingService.create(params)
            }
            this.getStepPacking()

            this.stepPacking.id_tecnico = technician
            this.stepPacking.status = 0
        },
        getTechnicianName(technicianId) {
            let value = this.technicians.find((obj) => {
                return obj.id === technicianId
            })
            if (value) {
                return value.nome
            }
        },
        async getAllTechnicians() {
            let response = await TechnicianService.getAll()
            this.technicians = response.data
        },
        async dispatchPackage() {
            let params = {
                status: 2
            }

            if (this.stepPacking.id) {
                this.showPackingAlert = false
                await StepPackingService.update(this.stepPacking.id, params).then(() => {
                    this.stepPacking.status = 2
                })
            } else {
                this.showPackingAlert = true
            }
        },
        openFinishDialog() {
            this.savePlate()
        },
        async savePlate() {
            let params = {
                status: 2
            }

            await PlateService.update(this.$route.params.id, params)
            this.$router.go(-1)
        },
        convertFile() {
            const reader = new FileReader()
            reader.readAsDataURL(this.arquivo[0])
            reader.onloadend = () => {
                this.saveConfigFile(reader.result)
            }
        },
        async saveConfigFile(file) {
            let params = {
                arquivo: file
            }
            await PlateService.update(this.$route.params.id, params)

            this.getConfigFile()
        },
        saveBlobAsTextFile(blob, filename) {
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = filename
            link.click()
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
