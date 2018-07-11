<template>
    <div class="list-main">
        <v-container>
            <v-layout row>
                <div class="list-main-title">
                    <router-link :to="uploadListLink">
                        <span class="list-main-title-content list-main-title-elem"  @click="changeColor()" :style="choiceColor">콘텐츠 업로드 목록</span>
                    </router-link>
                    <div class="list-main-title-separator list-main-title-elem">
                        |
                    </div>
                    <router-link :to="feedbackListLink">
                        <span class="list-main-title-feedback list-main-title-elem"  @click="changeColorReverse()" :style="choiceColorReverse">피드백 목록</span>
                    </router-link>
                </div>
                <v-spacer></v-spacer>
            </v-layout>
            <router-view></router-view>
        </v-container>
        <div class="list-main-pagination">
            <pagination/>
        </div>
    </div>
</template>

<script>
    import Pagination from "../../components/Pagination/Pagination.vue"
    export default {
        data() {
            return {
                uploadListLink: "/",
                feedbackListLink : '/feedback',
                toggleColor : true
            }
        },
        components: {
            Pagination
        },
        computed : {
            choiceColor(){
                if(!this.toggleColor) return "color : #ACACAC";
                else return "color : #E31c9e"
            },
            choiceColorReverse(){
                if(this.toggleColor) return "color : #ACACAC";
                else return "color : #E31c9e"
            }
        },
        methods: {
            changeColor(){
                if(!this.toggleColor) toggleColor = !toggleColor
            },
            changeColorReverse(){
                if(this.toggleColor) toggleColor = !toggleColor
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import "styles/common.scss";
    a{
        text-decoration: none;
    }
    .list {
        &-main {
            @include media('(max-width : 960px)') {
                margin-top: 83px;
            }
            &-title {
                display: flex;
                width: 100%;
                margin-bottom: 50px;
                &-elem {
                    font-size: 18px;
                    color: $grey-text;
                    @include media('(max-width : 520px)') {
                        font-size: 14px;
                    }
                }
                &-separator {
                    margin: {
                        left: 15px;
                        right: 15px;
                    }
                }
                &-content {
                    color: $main-color;
                }
            }
            &-pagination {
                margin-bottom: 25px;
            }
        }
    }
</style>
