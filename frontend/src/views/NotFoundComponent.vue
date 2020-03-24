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
                <h1 class="white--text">PAGE NOT FOUND</h1>
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