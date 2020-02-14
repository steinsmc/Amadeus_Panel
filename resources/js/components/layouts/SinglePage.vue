<template>
    <v-app id="inspire">
        <Layout model="Login"></Layout>

        <router-view/>
    </v-app>
</template>

<script>
    import Layout from './Layout';

    export default {
        name: "SinglePage",
        components: {
            Layout
        },
    }
</script>

<style scoped>

</style>