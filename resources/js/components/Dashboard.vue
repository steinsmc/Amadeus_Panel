<template>
    <v-content>
        <v-container fluid>
            <v-row >
                <v-col cols="12">
                    <v-toolbar
                            dark
                            color="indigo"
                            flat

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
                <v-col cols="12" class="dashboard">
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
                                :items="renderServers"
                                :search="search"
                        ></v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>


<script>
    export default {
        name: "Dashboard",
        data: () => ({
            admin: false,
            search: '',
            daemon: 'All Servers',
            daemons: ['All Servers','ITXE - Multicraft','Bugdhdj - Amadeus'],
            renderServers: [
            ],
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
            servers:[
                {
                    name: 'Arepa',
                    id: 1,
                    owner: 'dhdj',
                    type: 'Paperspigot 1.15.2',
                    ip: '127.0.0.1',
                    port: 25565,
                    status: 'online',
                    daemon: 1,
                },
                {
                    name: 'Chachitos',
                    id: 2,
                    owner: 'dhdj',
                    type: 'Paperspigot 1.14.1',
                    ip: '127.0.0.1',
                    port: 25566,
                    status: 'error',
                    daemon: 1,
                },
                {
                    name: 'Reineta',
                    id: 3,
                    owner: 'dhdj',
                    type: 'BungeeCord',
                    ip: '127.0.0.1',
                    port: 25567,
                    status: 'online',
                    daemon: 1,
                },
                {
                    name: 'Hallaca',
                    id: 4,
                    owner: 'dhdj',
                    type: 'BungeeCord',
                    ip: '127.0.0.1',
                    port: 25568,
                    status: 'offline',
                    daemon: 1,

                },
                {
                    name: 'Empanada',
                    id: 5,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 25569,
                    status: 'online',
                    daemon: 1,

                },
                {
                    name: 'Cachapa',
                    id: 6,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19132,
                    status: 'online',
                    daemon: 1,

                },
                {
                    name: 'Cazuela',
                    id: 7,
                    owner: 'dhdj',
                    type: 'Nukkit',
                    ip: '127.0.0.1',
                    port: 19133,
                    status: 'offline',
                    daemon: 1,

                },
                {
                    name: 'Pebre',
                    id: 8,
                    owner: 'dhdj',
                    type: 'Apollo',
                    ip: '127.0.0.1',
                    port: 19134,
                    status: 'online',
                    daemon: 1,

                },
                {
                    name: 'Sopaipilla',
                    id: 9,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19135,
                    status: 'online',
                    daemon: 1,

                },
                {
                    name: 'Asado',
                    id: 10,
                    owner: 'dhdj',
                    type: 'Pocketmine-MP',
                    ip: '127.0.0.1',
                    port: 19136,
                    status: 'online',
                    daemon: 1,

                },
                {
                    name: '世博园外交',
                    id: 1,
                    owner: 'lixworth',
                    type: 'Paperspigot 1.15.2',
                    ip: '127.0.0.2',
                    port: 25565,
                    status: 'online',
                    daemon: 2,

                },
                {
                    name: '我们仍未知道那天所看见的服务器',
                    id: 2,
                    owner: 'lixworth',
                    type: 'Nukkit',
                    ip: '127.0.0.2',
                    port: 25566,
                    status: 'online',
                    daemon: 2,

                },
                {
                    name: 'Bugdhdj 官服',
                    id: 3,
                    owner: 'lixworth',
                    type: 'Amadeus',
                    ip: '127.0.0.3',
                    port: 25567,
                    status: 'offline',
                    daemon: 2,
                },
                {
                    name: 'YuzuSotServer',
                    id: 4,
                    owner: 'lixworth',
                    type: 'PMMP',
                    ip: '127.0.0.4',
                    port: 25568,
                    status: 'offline',
                    daemon: 2,
                },
            ],
        }),
        mounted(){
            this.servers.forEach((item) => {
                this.renderServers.push(item);
            });
        },
        methods: {
            getDaemonID(daemon_name){
                if(daemon_name === "ITXE - Multicraft"){
                    return 1;
                }else if(daemon_name === "Bugdhdj - Amadeus"){
                    return 2;
                }else{
                    return 0; //All
                }
            }
        },
        watch: {
            daemon(newVal,oldVal){
                this.renderServers = []; //先清空 TODO:loading
                this.servers.forEach((item) => {
                    if(item.daemon === this.getDaemonID(newVal)){
                        this.renderServers.push(item);
                    }
                });

            }
        },
    }
</script>

<style scoped>
    .dashboard{
        opacity: 0.9;
    }
</style>
