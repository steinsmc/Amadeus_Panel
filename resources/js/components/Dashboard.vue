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
                                    :items="servers"
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
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'ID', value: 'id' },
                { text: 'Owner', value: 'owner' },
                { text: 'ServerType', value: 'type' },
                { text: 'IP', value: 'ip' },
                { text: 'Port', value: 'port' },
                { text: 'Status', value: 'status' },
            ],
            servers: [
                {
                    name: 'Arepa',
                    id: 1,
                    owner: 'dhdj',
                    type: 'Paperspigot 1.15.2',
                    ip: '127.0.0.1',
                    port: 25565,
                    status: 'online',
                },
                {
                    name: 'Chachitos',
                    id: 2,
                    owner: 'dhdj',
                    type: 'Paperspigot 1.14.1',
                    ip: '127.0.0.1',
                    port: 25566,
                    status: 'error',
                },
                {
                    name: 'Reineta',
                    id: 3,
                    owner: 'dhdj',
                    type: 'BungeeCord',
                    ip: '127.0.0.1',
                    port: 25567,
                    status: 'online',
                },
                {
                    name: 'Hallaca',
                    id: 4,
                    owner: 'dhdj',
                    type: 'BungeeCord',
                    ip: '127.0.0.1',
                    port: 25568,
                    status: 'offline',
                },
                {
                    name: 'Empanada',
                    id: 5,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 25569,
                    status: 'online',
                },
                {
                    name: 'Cachapa',
                    id: 6,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19132,
                    status: 'online',
                },
                {
                    name: 'Cazuela',
                    id: 7,
                    owner: 'dhdj',
                    type: 'Nukkit',
                    ip: '127.0.0.1',
                    port: 19133,
                    status: 'offline',
                },
                {
                    name: 'Pebre',
                    id: 8,
                    owner: 'dhdj',
                    type: 'Apollo',
                    ip: '127.0.0.1',
                    port: 19134,
                    status: 'online',
                },
                {
                    name: 'Sopaipilla',
                    id: 9,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19135,
                    status: 'online',
                },
                {
                    name: 'Asado',
                    id: 10,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19136,
                    status: 'online',
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
