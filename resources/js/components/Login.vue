<template>
    <v-app id="inspire">
<!--        <Layout model="Login"></Layout>-->
        <v-content>
            <v-container
                fluid
                class="fill-height"
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
                                <v-btn
                                        color="accent-4"
                                        text
                                        :loading="loading"
                                        href="/"
                                >
                                    <v-icon>keyboard_arrow_left</v-icon> BACK
                                </v-btn>
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
    import Layout from "./layout/Layout";
    export default {
        name: "Login",
        components: {
            Layout
        },
        data: () => ({
            app_name: document.getElementsByTagName('meta')['amadeus_app_name'].content,
            checkbox: true,
            name: 'bugdhdj',
            password: 'bugdhdj',
            alert: {
                display: false,
                type: null,
                message: null
            },
            loading: false,
        }),
        mounted(){
            this.info("测试账号密码均为bugdhdj");
        },
        methods: {
            error: function (message) {
                this.alert.message = message;
                this.alert.type = "error";
                this.alert.display = true;
            },
            info: function (message) {
                this.alert.message = message;
                this.alert.type = "info";
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
  /*  #inspire{
        background: url("/images/login.jpg") no-repeat center;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow: auto;
    }*/
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
