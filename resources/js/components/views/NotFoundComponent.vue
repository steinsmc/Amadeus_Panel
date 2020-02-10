<template>
    <v-content>
        <v-container
                fluid
                class="height-center"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                    cols="12"
                    sm="8"
                    md="4"
                    lg="4"
                    xl="4">
                    <h1>PAGE NOT FOUND</h1>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "NotFoundComponent"
    }
</script>

<style scoped>
    .height-center {
        -webkit-box-align: center;
        align-items: center;
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
</style>