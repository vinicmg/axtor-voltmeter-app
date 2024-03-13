<template>
    <v-dialog v-model="dialog" max-width="100vw" @click:outside="close">
        <v-card>
            <v-card-title>
                <span class="text-h5">Relatório</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-table>
                        <tbody>
                            <tr>
                                <th scope="col">Campo</th>
                                <th scope="col">Valor</th>
                            </tr>
                            <tr v-for="(item, index) in items" :key="index">
                                <th>{{ item.title }}</th>
                                <td>{{ item.value }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange-darken-2" variant="elevated" @click="close">Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        items: Array,
        showDialog: Boolean,
    },
    data: () => ({
        show: false,
        dialog: false,
    }),
    emits: ['closeDialog'],
    methods: {
        close() {
            this.$emit('closeDialog')
        }
    },
    watch: {
        showDialog: {
            immediate: true,
            handler(newValue) {
                this.dialog = newValue
            }
        }
    }
}
</script>
