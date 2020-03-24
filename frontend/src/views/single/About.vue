<template>
    <v-content>
        <v-container fluid>
            <v-row class="dashboard">
                <v-col cols="12" class="about-page">
                    <v-card
                            class="mx-auto"
                    >
                        <v-card-title>
                            <span>About</span>
                        </v-card-title>

                        <v-card-text>
                            Amadeus (Panel & Daemon) is a brand new server manager that can host multiple games and servers at a time. <br />
                            The Daemon is designed by William Wang (dhdj) using php. (shout out to php)
                            And the Panel is designed By Worth Li (Lixworth).
                            <br /><br />
                            <h3>Reason why we are making this</h3>
                            The main reason why we are making this is that..........We're kinda bored.<br /><br />
                            <h3>When will this be completed</h3>
                            Hopefully it's basic functionality will be completed by the end of 2020. But we're not sure.
                        </v-card-text>

                        <v-card-actions>

                        </v-card-actions>
                    </v-card>
                    <v-card
                            class="mx-auto" style="margin-top:20px"
                    >
                        <v-card-title>
                            <span>Sponsor</span>
                        </v-card-title>

                        <v-card-text>
                            <li>PHP</li><li>NodeJS</li><li>Javascript</li><li>Intelij</li><li>Multicraft</li><li>Composer</li><li>ITXE</li>
                        </v-card-text>

                        <v-card-actions>

                        </v-card-actions>
                    </v-card>
                    <v-card
                            class="mx-auto" style="margin-top:20px"
                    >
                        <v-card-title>
                            <span>Donation</span>
                        </v-card-title>

                        <v-card-text>
                            We currently do not accept donation, but you can support us by improving Amadeus. If you wish to join the dev team, contact QQ3332697908 or 2758417019
                        </v-card-text>

                        <v-card-actions>

                        </v-card-actions>
                    </v-card>
                    <v-card
                            class="mx-auto" style="margin-top:20px"
                    >
                        <v-card-title>
                            <span>Photos</span>
                        </v-card-title>

                        <v-card-text>
                            <div v-lazy-container="{ selector: 'img' }">
                                <img data-src="/images/1.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/2.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/3.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/4.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/5.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/6.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/7.jpg" preview="0" alt="My Parrot" height="100">
                                <img data-src="/images/8.jpg" preview="0" alt="My Parrot" height="100">
                            </div>
                        </v-card-text>

                        <v-card-actions>

                        </v-card-actions>
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
        }),
        mounted(){
        },
        methods: {}
    }
</script>

<style scoped>
    .about-page{
        opacity: 0.9;
    }
    @import "~vue-photo-preview/dist/skin.css";
</style>
