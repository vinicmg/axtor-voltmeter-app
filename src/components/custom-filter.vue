<template>
    <v-container>
        <v-row class="bg-white border rounded">
            <v-col cols="3" sm="3" md="3" class="d-flex align-center">
                <v-text-field v-model="formattedDate" readonly variant="outlined" label="Data de Cadastro"
                    prepend-icon="mdi-calendar" @click:control="isOpen = !isOpen"></v-text-field>
            </v-col>
            <v-col cols="3" sm="3" md="3" class="d-flex align-center">
                <v-text-field variant="outlined" label="Nome" v-model="nameValue">
                </v-text-field>
            </v-col>

            <v-col v-if="this.currentView === 'technician'">
                <v-text-field variant="outlined" label="Setor" v-model="sectorValue"></v-text-field>
            </v-col>

            <v-col v-if="this.currentView === 'typeplate'">
                <v-text-field variant="outlined" label="Modelo" v-model="modelValue"></v-text-field>
            </v-col>

            <v-col v-if="this.currentView === 'plate'">
                <v-select v-model="statusValue" label="Status" :items="status" variant="outlined">
                </v-select>
            </v-col>

            <v-col class="d-flex justify-end align-center">
                <v-btn class="mr-2" color="orange-darken-2" @click="onFilterSearch()">
                    Buscar
                </v-btn>
                <v-btn color="orange-darken-2" variant="outlined" @click="onClearFilter()">
                    Limpar filtros
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="isOpen" max-width="500px">
            <v-date-picker v-model="dateValue" @update:model-value="isOpen = !isOpen"></v-date-picker>
        </v-dialog>
    </v-container>
</template>
<script>
export default {
    props: {
        currentView: String,
    },
    data: () => ({
        isOpen: false,
        dateValue: null,
        nameValue: null,
        sectorValue: null,
        modelValue: null,
        statusValue: null,
        status: [
            {
                title: 'Não iniciada',
                value: 0,
            },
            {
                title: 'Em andamento',
                value: 1,
            },
            {
                title: 'Finalizada',
                value: 2,
            }
        ],
    }),
    emits: ['onFilterSearch', 'onClearFilter'],
    computed: {
        formattedDate() {
            return new Date(this.dateValue).toLocaleDateString() === '31/12/1969' ? null : new Date(this.dateValue).toLocaleDateString()
        }
    },
    methods: {
        onFilterSearch() {
            let param = {
                nome: this.nameValue,
                createdAt: this.dateValue
            };

            if (this.currentView === 'technician') {
                param = {
                    ...param,
                    setornome: this.sectorValue
                }
            }

            if (this.currentView === 'typeplate') {
                param = {
                    ...param,
                    modelo: this.modelValue
                }
            }

            if (this.currentView === 'plate') {
                param = {
                    ...param,
                    status: this.statusValue
                }
            }

            this.$emit('onFilterSearch', param)
        },
        onClearFilter() {
            this.dateValue = null;
            this.nameValue = null;
            this.sectorValue = null
            this.modelValue = null;
            this.statusValue = null;

            this.$emit('onClearFilter')
        }
    }
}
</script>
<style></style>