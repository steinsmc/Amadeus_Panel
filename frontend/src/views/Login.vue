<template>
    <v-app id="inspire">
<!--        <Layout/> -->
        <v-content>
            <v-container
                fluid
                class="height-center"
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
                        xl="3"
                    >
                        <v-card class="elevation-12 login-card" :loading="loading">
                            <v-toolbar
                                    flat
                            >
                                <v-spacer />
                                <SwitchLanguage/>
                            </v-toolbar>
                            <v-card-text
                                    style="margin-top: -31px"
                            >
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
                                        :label="$t('user.name')"
                                        name="login"
                                        v-model="name"
                                        prepend-icon="person"
                                        type="text"
                                        :disabled="loading"
                                    />

                                    <v-text-field
                                        :label="$t('user.password')"
                                        name="password"
                                        v-model="password"
                                        prepend-icon="lock"
                                        type="password"
                                        :disabled="loading"
                                    />
                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || $t('user.checkbox.alert')]"
                                        :label="$t('user.checkbox.donate')"
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
                                    <v-icon>keyboard_arrow_left</v-icon> {{$t('user.back')}}
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="eep-purple accent-4"
                                    depressed
                                    :loading="loading"
                                    @click="login()"
                                >
                                    {{$t('user.login')}}
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
    import SwitchLanguage from "../components/SwitchLanguage";
    export default {
        name: "Login",
        components: {
            SwitchLanguage
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
        mounted() {
            this.info("测试账号密码均为 bugdhdj");
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
            success: function (message) {
                this.alert.message = message;
                this.alert.type = "success";
                this.alert.display = true;
            },

            login: function () {
                this.loading = true;
                this.alert.display = false;
                this.axios.post('/api/auth/login', {
                    name: this.name,
                    password: this.password
                }).then(response => {
                    if (response.data.success === true) {
                        this.$cookie.set('AmadeusToken', response.data.data.access_token, { expires: '1M'});
                        this.success("登录成功 正在跳转到仪表盘");
                        // this.$router.push('/');
                        setTimeout(window.location.href = "/dashboard", 2);
                    } else {
                        this.error("出现错误 请稍后重试");
                    }
                }).catch(response => {
                    if (response.response.status === 401) {
                        this.error("用户名或密码不匹配");
                    } else if (response.response.status === 500) {
                        this.error("Amadeus Panel 当前不可用");
                    } else {
                        this.error("出现错误 请稍后重试");
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

  .height-center {
      -webkit-box-align: center;
      align-items: center;
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
  }
</style>
