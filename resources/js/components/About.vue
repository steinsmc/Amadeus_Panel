<template>
    <v-app id="inspire">
        <Layout model="About"></Layout>
        <v-content>
            <v-container fluid>
                <v-row class="dashboard">
                    <v-col cols="12">
                        <v-card
                        class="mx-auto"
                        >
                        <v-card-title>
                            <span>About</span>
                        </v-card-title>

                        <v-card-text>
                            Powered by Amadeus. Bugdhdj YES!
                        </v-card-text>

                        <v-card-actions>

                        </v-card-actions>
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
        }),
        mounted(){
        },
        methods: {}
    }
</script>

<style scoped>
</style>
