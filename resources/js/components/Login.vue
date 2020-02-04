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
                        v-model="item.model"
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
                <v-sheet class="text-center powered" height="270px">
                    <v-btn
                        class="mt-6"
                        text
                        color="succes"
                        @click="sheet = !sheet"
                    >close</v-btn>
                    <div class="my-4"><a href="https://github.com/steinsmc/Amadeus"><img src="favicon.ico" alt="" height="80px"></a>
                        <br>{{ this.app_name }} Powered By <a href="https://github.com/steinsmc/Amadeus ">SteinsMC Amadeus</a>.
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
                        <v-card class="elevation-12 login-card" :loading="loading">
                            <v-card-text>
                                <div class="login_card_title">
                                    <h1><v-icon>cloud</v-icon> {{ this.app_name}}</h1>
                                </div>
                                <v-form @keyup.enter.native="login">
                                    <br>
                                    <v-alert
                                            :value="alert.display"
                                            outlined
                                            :type="alert.type"
                                            border="left"
                                            transition="scale-transition"
                                    >
                                        {{ alert.message }}
                                    </v-alert>
                                    <v-text-field
                                        label="Login"
                                        name="login"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                        :disabled="loading"
                                    />

                                    <v-text-field
                                        id="password"
                                        label="Password"
                                        name="password"
                                        v-model="password"
                                        prepend-icon="lock"
                                        type="password"
                                        :disabled="loading"
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
                                    :loading="loading"
                                    @click="login()"
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
    export default {
        name: "Login",
        data: () => ({
            app_name: document.getElementsByTagName('meta')['amadeus_app_name'].content,
            version: document.getElementsByTagName('meta')['amadeus'].content,
            props: {
                source: String,
            },
            drawer: window.localStorage.getItem("drawer") !== "false",
            items: [
                { icon: 'home', text: 'Home',model: false},
                { icon: 'dashboard', text: 'Dashboard',model: false},
                { icon: 'account_circle', text: 'Login',model: true},
                { icon: 'help_outline', text: 'About',model: false},
            ],
            sheet: false,
            checkbox: true,
            name: null,
            password: null,
            alert: {
                display: false,
                type: null,
                message: null
            },
            loading: false,
        }),
        mounted(){
        },
        watch: {
            drawer(newVal,oldVal){
                window.localStorage.setItem("drawer",newVal);
            }
        },
        methods: {
            error: function (message) {
                this.alert.message = message;
                this.alert.type = "error";
                this.alert.display = true;
            },
            success: function(message) {
                this.alert.message = message;
                this.alert.type = "success";
                this.alert.display = true;
            },
            login: function () {
                this.loading = true;
                this.alert.display = false;
                window.axios.post('/login', {
                    name: this.name,
                    password: this.password
                }).then(response => {
                    this.success("登录成功");
                    setTimeout(window.location.href="/dashboard",1);
                }).catch (response => {
                    if(response.response.status === 401){
                        this.error("用户名或密码不匹配");
                    }else{
                        this.error("用户名或密码不匹配 请重试");
                    }
                    this.loading = false;
                });
            },
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
