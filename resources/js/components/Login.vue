<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            class="sidebar"
        >
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
                        :key="item.text"
                        link
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
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue darken-3"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
            >
                <span>{{this.app_name}} <sup>{{ this.version }}</sup></span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-bottom-sheet v-model="sheet" inset>
                <template v-slot:activator="{ on }">
                    <v-btn
                        color=" accent-4"
                        dark
                        text
                        v-on="on"
                    >
                        Powered by Amadeus
                    </v-btn>
                </template>
                <v-sheet class="text-center powered" height="200px">
                    <v-btn
                        class="mt-6"
                        text
                        color="succes"
                        @click="sheet = !sheet"
                    >close</v-btn>
                    <div class="my-4">{{ this.app_name }} Powered By <a href="https://github.com/steinsmc/amadeus">SteinsMC Amadeus</a>.
                        <br> Amadeus Panel Version {{ this.version }}.
                        <br> Open source Game Server Controlling System. If you like it,please <a href="https://github.com/steinsmc/Amadeus">give us a star</a> or donate us.</div>

                </v-sheet>
            </v-bottom-sheet>
        </v-app-bar>
        <v-content>
            <v-container
                fluid
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <!-- Login Form -->
                    <v-col
                        cols="12"
                        sm="8"
                        md="4"
                        lg="4"
                        xl="4"
                    >
                        <v-card class="elevation-12 login-card">
                            <v-card-text>
                                <div class="login_card_title">
                                    <h1><v-icon>cloud</v-icon> {{ this.app_name}}</h1>
                                </div>
                                <v-form>
                                    <v-text-field
                                        label="Login"
                                        name="login"
                                        prepend-icon="person"
                                        type="text"
                                    />

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        prepend-icon="lock"
                                        type="password"
                                    />
                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you donate us?"
                                        required
                                    ></v-checkbox>
                                </v-form>
                            </v-card-text>

                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="eep-purple accent-4"
                                    depressed
                                    @click="next()"
                                >
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                    </v-col>
                </v-row>
            </v-container>
        </v-content>

    </v-app>
</template>


<script>
    import Cookies from 'js-cookie';
    export default {
        name: "Login",
        data: () => ({
            app_name: document.getElementsByTagName('meta')['amadeus_app_name'].content,
            version: document.getElementsByTagName('meta')['amadeus'].content,
            props: {
                source: String,
            },
            drawer: false,
            items: [
                { icon: 'mdi-home', text: 'Home' },
            ],
            sheet: false,
            checkbox: true,
        }),
        mounted(){
            if(Cookies.get('drawer') == null){
                Cookies.set('drawer',false);
            }
            this.drawer = Cookies.get('drawer');
        },
        watch: {
            drawer(newVal,oldVal){
                Cookies.set('drawer',newVal);
            }
        }
    }
</script>

<style scoped>
    #inspire{
        background: url("/images/login.jpg") no-repeat center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow: auto;
    }
    .sidebar{
        opacity: 0.9;
    }
    .powered{
        opacity: 0.9;
    }
    .login-card{
        opacity: 0.9;
        border-radius:9px;
        box-sizing: inherit;
    }
    .login_card_title{
        text-align: center;
        padding-top: 15px;
    }
</style>
