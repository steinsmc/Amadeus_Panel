<template>
    <v-app id="inspire" class="server_layout">
        <Layout/>
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