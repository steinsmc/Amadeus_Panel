<template>
    <v-app id="inspire">
        <Layout model="Dashboard"></Layout>

        <v-content>
            <v-container fluid>
                <v-row class="dashboard">
                    <v-col cols="12">
                        <v-toolbar
                                dark
                                color="blue darken-3"
                                class="mb-1"
                        >
                            <v-text-field
                                    v-model="search"
                                    clearable
                                    flat
                                    solo-inverted
                                    hide-details
                                    prepend-inner-icon="search"
                                    label="Search All Daemon"
                                    background-color="primary"
                            ></v-text-field>
                            <template>
                                <v-spacer></v-spacer>
                                <v-select
                                        v-model="daemon"
                                        flat
                                        solo-inverted
                                        hide-details
                                        :items="daemons"
                                        prepend-inner-icon="dns"
                                        background-color="primary"
                                        label="Choose Daemon"
                                ></v-select>
                                <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
                                <v-btn
                                        v-if="$vuetify.breakpoint.mdAndUp"
                                        large
                                        depressed
                                        color="blue"
                                        href="/dashoard/status"
                                >
                                    Status
                                </v-btn>
                            </template>
                        </v-toolbar>
                    </v-col>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title>
                                {{ this.daemon }}
                                <v-spacer></v-spacer>
                                <v-text-field
                                        v-model="search"
                                        append-icon="search"
                                        label="Search in this daemon"
                                        single-line
                                        hide-details
                                ></v-text-field>
                            </v-card-title>
                            <v-data-table
                                    :headers="headers"
                                    :items="desserts"
                                    :search="search"
                            ></v-data-table>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

    </v-app>
</template>


<script>
    import Layout from "./layout/Layout";
    export default {
        name: "Dashboard",
        components: {
            Layout
        },
        data: () => ({
            admin: false,
            search: '',
            daemon: 'All Servers',
            daemons: ['All Servers','ITXE - Multicraft','BugDHDJ- Amadeus'],
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
            ],
        }),
        mounted(){
        },
        methods: {}
    }
</script>

<style scoped>
    .dashboard{
        opacity: 0.9;
    }
</style>
