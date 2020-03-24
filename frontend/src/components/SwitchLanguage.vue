<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }" transition="scroll-y-transition">
            <v-btn
                    text
                    v-on="on"
            >
                <v-icon>mdi-translate</v-icon> &nbsp{{ $t("lang")}} <v-icon>mdi-menu-down</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                    v-for="item in languages"
                    :key="item.lang"
                    @click="changeLang(item)"
            >
                <v-list-item-title>{{ item.lang }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "SwitchLanguage",
        data: () => ({
            language: window.localStorage.getItem("lang"),
            languages: [
            ],
        }),
        mounted() {
            //TEST
            this.languages.push({lang: 'English',name: 'en'});
            this.languages.push({lang: '简体中文',name: 'zh_cn'});
            this.languages.forEach((item) => {
                if(this.language === item.lang){
                    this.$i18n.locale = item.name;
                }
            });
        },
        watch: {
            language(newVal,oldVal){
                window.localStorage.setItem("lang",newVal);
                this.languages.forEach((item) => {
                    if(newVal === item.lang){
                        this.$i18n.locale = item.name;
                    }
                });
            }
        },
        methods: {
            changeLang: function(item){
                this.language = item.lang;
            },
        }
    }
</script>

<style scoped>

</style>