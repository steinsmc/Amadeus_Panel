<template>
    <div id="amadeus-layout">
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
                class="sidebar"
        >
            <v-list-item two-line>
                <v-list-item-avatar>
                        <img :src="user.avatar" preview="1" alt="amazing!">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ user.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ $t("user.root") }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense>
                <template v-for="item in items">
                    <v-row
                            v-if="item.heading"
                            :key="item.heading"
                            align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col
                                cols="6"
                                class="text-center"
                        >
                            <a
                                    href="#!"
                                    class="body-2 black--text"
                            >EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                            v-else-if="item.children"
                            :key="item.text"
                            v-model="item.model"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="(child, i) in item.children"
                                :key="i"
                                link
                                :to="child.url"
                                v-model="child.model"
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                            v-else
                            v-model="item.model"
                            :key="item.text"
                            link
                            :to="item.url"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                <v-list-item
                        link
                        @click="logout"
                >
                    <v-list-item-action>
                        <v-icon>logout</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Logout
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                app
                color="indigo"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title
                    style="width: 300px"
                    class="ml-0 pl-4"
            >
                <span>{{this.app_name}} <sup>{{ this.version }}</sup></span>
            </v-toolbar-title>

            <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    bottom
                    color="pink"
            ></v-progress-linear>

            <v-spacer></v-spacer>
            <v-bottom-sheet v-model="sheet" inset>
                <template v-slot:activator="{ on }">
                    <v-btn
                            color="accent-4"
                            dark
                            text
                            v-on="on"
                    >
                        {{ $t('powered')}}
                    </v-btn>
                </template>
                <v-sheet class="text-center powered" height="300px">
                    <v-btn
                            class="mt-6"
                            text
                            color="succes"
                            @click="sheet = !sheet"
                    >close</v-btn>
                    <div class="my-4"><a href="https://github.com/steinsmc/Amadeus"><img src="favicon.ico" alt="" height="80px"></a>
                        <br>{{ this.app_name }} is powered by <a href="https://github.com/steinsmc/Amadeus ">SteinsMC Amadeus</a>, a non-commercial open source project.
                        <br> Version: {{ this.version }}.
                        <br> Open source game server management system. Please consider <a href="https://github.com/steinsmc/Amadeus">giving us a star</a> or <a href="/about">joining our dev team</a>.</div>

                </v-sheet>
            </v-bottom-sheet>

            <SwitchLanguage/>
        </v-app-bar>
    </div>
</template>

<script>
    import SwitchLanguage from '../components/SwitchLanguage'
    import Vue from "vue";

    export default {
        name: "Layout",
        data: () => ({
            app_name: document.getElementsByTagName('meta')['amadeus_app_name'].content,
            version: document.getElementsByTagName('meta')['amadeus'].content,
            drawer: window.localStorage.getItem("drawer") !== "false",
            sheet: false,
            items: [
                {icon: 'home', text: 'Home', url: '/'},
                {icon: 'dashboard', text: 'Dashboard', url: '/dashboard'},
                {icon: 'help_outline', text: 'About', url: '/about'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: '测试页面@dhdj需要完成的',
                    model: null,
                    children: [
                        {icon: 'mdi-plus', text: 'Server List',url: '/server'},
                        {icon: 'mdi-plus', text: 'Server ID 1',url: '/server/chxsb'},
                    ],
                },
            ],
            user: {
                name: null,
                avatar: null
            },
            loading: null
        }),
        components: {
            SwitchLanguage
        },
        created: function () {
            this.axios.post('/api/auth', {},{
                headers: {
                    'Authorization': "Bearer "+Vue.cookie.get('AmadeusToken')
                }
            }).then(response => {
                this.user.name = response.data.data.name;
                this.user.avatar = response.data.data.avatar;
            }).catch(response => {
                if (response.response.status === 401) {
                    window.location.href = "/login";
                } else {

                }
            });
            this.loading = this.$store.state.loading;

           /* //不知道除了for循环之外还有啥好方案
            this.items.forEach((item) => {
                if (item.text === this.$attrs.model) {
                    item.model = true;
                    if (item.children != null) {
                        item.children.forEach((child) => {
                            if (child.text === this.$attrs.child) {
                                child.model = true;
                            }
                        });
                    }
                }
            });*/


        },
        methods: {
            logout: function () {
                window.axios.post('/logout', {}).then(response => {
                    window.location.href = "/";
                }).catch(response => {

                });
            }
        },
        watch: {
            drawer(newVal, oldVal) {
                window.localStorage.setItem("drawer", newVal);
            },
            Floading(newName, oldName) {
                this.loading = newName;
            }
        },
        computed: {
            Floading () {
                return this.$store.state.loading;
            }
        },

    }
</script>

<style scoped>
    .sidebar{
        opacity: 0.9;
    }
    .powered{
        opacity: 0.9;
    }

</style>