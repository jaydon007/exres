<template>
    <v-row>
        <v-col v-for="(item, i) in lists" :key="i" cols="12" sm="6">
            <v-hover v-slot:default="{ hover }">
                <v-card
                    :elevation="hover ? 6 : 0"
                    :class="{ 'on-hover': hover }"
                    :color="item.color"
                    dark
                    v-ripple
                    tile
                    @click="toDetail(item)"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="headline" v-text="item.title"></v-card-title>
                            <v-card-subtitle>
                                <v-chip
                                    class="my-1 mr-1"
                                    color="white"
                                    outlined
                                    x-small
                                    v-for="(teck, index) in item.tag"
                                    :key="index"
                                >{{teck}}</v-chip>
                            </v-card-subtitle>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
import data from "@/data/";
export default {
    name: "proList",
    props:{
        showAll:false,
    },
    data: () => ({
        icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
        items: [],
    }),
    mounted() {
        this.items = data.homePro;
    },
    computed:{
        lists:function(){
            return this.showAll?this.items:this.items.filter(i=>i.id>2)
        }
    },
    methods: {
        toDetail(item) {
            this.$router.push({
                path: `/profolio-detail/${item.id}`,
                query: { title: item.title, image: item.src },
            }).catch(e=>{
                console.log(e);
            })
        },
    },
};
</script>
<style scoped>
.v-card {
    transition: all 0.3s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.9;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>