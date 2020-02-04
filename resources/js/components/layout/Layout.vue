<template>
    <div id="amadeus-layout">
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
                            :href="item.url"
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
    </div>
</template>

<script>
    /*
    * Layout
    * <Layout model="Labels" child="Create label"></Layout>
    * 首先若model有值,child为null的情况下 会将按照model的值匹配到对应text的导航并avtive
    * 若是child model都有值,会同时匹配到下一级目录,并将对应text的导航和下级目录全部active
    * */
    export default {
        name: "Layout",
        data: () => ({
            props: [
                'child',
                'model'
            ],
            app_name: document.getElementsByTagName('meta')['amadeus_app_name'].content,
            version: document.getElementsByTagName('meta')['amadeus'].content,
            drawer: window.localStorage.getItem("drawer") !== "false",
            sheet: false,
            items: [
                { icon: 'home', text: 'Home',model: null,url: '/'},
                { icon: 'dashboard', text: 'Dashboard',model: null,url: '/dashboard'},
                { icon: 'account_circle', text: 'Login',model: null,url: '/login'},
                { icon: 'help_outline', text: 'About',model: null,url: '/about'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: null,
                    children: [
                        { icon: 'mdi-plus', text: 'Create label',model: null},
                        { icon: 'mdi-plus', text: 'Create label2',model: null},
                    ],
                },
            ],
        }),
        created: function(){
            //不知道除了for循环之外还有啥好方案
            this.items.forEach((item) => {
                if(item.text === this.$attrs.model){
                    item.model = true;
                    if(item.children != null) {
                        item.children.forEach((child) => {
                            if(child.text === this.$attrs.child){
                                child.model = true;
                            }
                        });
                    }
                }
            });
        },
        watch: {
            drawer(newVal,oldVal){
                window.localStorage.setItem("drawer",newVal);
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