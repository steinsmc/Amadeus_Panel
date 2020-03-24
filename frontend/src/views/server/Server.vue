<template>
    <div class="server">
        <v-content>
            <v-container fluid>
                ID {{ this.$route.params.id }} @dhdj 这边是单个服务器的详情页面 要添加其的二级域名去route里添加到server/:id 的child中
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "Server"
    }
</script>

<style scoped>

</style>