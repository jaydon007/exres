<template>
    <div>
        <v-app-bar app elevate-on-scroll color="tabbar">
            <div class="d-flex align-center">
                <router-link to="/">
                    <v-img
                        alt="兴之所至"
                        class="shrink mr-2"
                        contain
                        src="//www.evaci.top/source/static/images/common/logo-newt.png"
                        transition="scale-transition"
                        width="130"
                    />
                </router-link>
            </div>
            <v-spacer></v-spacer>
            <div v-for="(item, index) in topMenus" :key="index">
                <v-btn text class="mr-2" rounded v-if="item.action" @click="toPage(item)">
                    <span>{{item.title}}</span>
                </v-btn>
            </div>
            <div v-if="hover">qr img</div>
            <v-btn icon class="mr-2" @click="switchTheme()">
                <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
        </v-app-bar>

        <v-footer app padless absolute>
            <v-card class="flex" flat tile>
                <v-card-title
                    class="py-2 d-flex justify-center"
                    style="border-bottom:1px solid #666"
                >
                    <v-btn
                        v-for="icon in bottomMenu"
                        :key="icon.icon"
                        class="mx-3"
                        icon
                        outlined
                        @click="SocialBtn(icon.id)"
                    >
                        <v-icon size="18px" :title="icon.title">{{ icon.icon }}</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text class="py-2 d-flex grey--text text--lingten-2 text-caption">
                    <div class="align-center pr-2">Powered by vue & vuetify & 七牛 & 阿里云</div>
                    <div>|</div>
                    <div class="pl-2 font-weight-thin grey--text text--darken-1">粤ICP备16080922号</div>
                    <v-spacer></v-spacer>
                    <div>
                        {{ new Date().getFullYear() }} —
                        <strong>MTX</strong>
                    </div>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: "mainIndex",
    data: () => ({
        drawer: null,
        topMenus: [
            {
                action: "layer-group",
                title: "首页",
                path: "/",
            },
            { divider: true },
            {
                action: "info-circle",
                title: "作品",
                path: "/profolio",
            },
            {
                action: "mask",
                title: "博客",
                path: "/blog",
            },
            {
                action: "mask",
                title: "关于",
                path: "/about",
            },
        ],
        bottomMenu: [
            { id: 0, title: "微信", color: "#66BC54", icon: "mdi-wechat" },
            { id: 1, title: "QQ", color: "#4FA5DB", icon: "mdi-qqchat" },
        ],
    }),
    methods: {
        toPage(item) {
            if (item.path) {
                if (this.$route.path === item.path) return;
                this.$router.push(item.path).catch((e) => {
                    console.log(e);
                });
            }
        },
        switchTheme() {
            this.$store.commit("setTheme");
            this.$vuetify.theme.dark = this.$store.state.dark === true;
        },
        SocialBtn(id) {
            switch (id) {
                case 0:
                    break;
                case 1:
                    window.location.href =
                        "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=444647486&website=www.oicqzone.com";
                    break;
                default:
                    break;
            }
        },
    },
};
</script>

<style>
</style>