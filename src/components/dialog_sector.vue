<template>
    <v-dialog v-model="dialog" max-width="500px" @click:outside="close">
        <v-card>
            <v-card-title>
                <span class="text-h5">Técnicos</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-select v-model="technician" label="Técnicos" :items="technicians"
                                variant="outlined"></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange-darken-2" variant="outlined" @click="close">Cancelar</v-btn>
                <v-btn color="orange-darken-2" variant="outlined" @click="save">Salvar</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import TechnicianService from '@/services/TechnicianService';

export default {
    props: {
        showDialog: Boolean,
    },
    data: () => ({
        show: false,
        dialog: false,
        technician: null,
        technicians: [],
    }),
    emits: ['closeDialog', 'saveDialog'],
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.getTechnicians()
        },
        async getTechnicians() {
            let response = await TechnicianService.getAll()
            this.technicians = response.data.map(item => {
                let technician = {
                    title: item.nome,
                    value: item.id
                };
                return technician
            })
        },
        close() {
            this.$emit('closeDialog')
        },
        save() {
            this.$emit('saveDialog', this.technician)
        }
    },
    watch: {
        showDialog: {
            immediate: true,
            handler(newValue) {
                this.dialog = newValue
            }
        },
    }
}
</script>