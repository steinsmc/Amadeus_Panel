<template>
    <v-app id="inspire">
        <Layout model="Server"></Layout>

        <router-view/>
    </v-app>
</template>

<script>
    import Layout from './Layout';

    export default {
        name: "Server",
        components: {
            Layout
        },
    }
</script>

<style scoped>

</style>