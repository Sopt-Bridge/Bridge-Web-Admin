<template>
    <div class="feedback-list">
        <v-container class="feedback-list-container">
            <v-layout row class="feedback-list-contents-header">
                <v-flex xs1 sm1 md1 lg1 class="feedback-list-contents-no">
                    <p class="feedback-list-contents-header-content">No</p>
                </v-flex>
                <!-- <v-flex xs1 sm1 md1 lg1/> -->
                <v-flex xs6 sm7 md7 lg7 />
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-header-content">Author</p>
                </v-flex>
                <v-flex>
                    <p class="feedback-list-contents-header-content">Date</p>
                </v-flex>
            </v-layout>
            <v-layout row class="feedback-list-contents-elems">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="feedback-list-contents-elems-content">448</p>
                </v-flex>
                <v-flex xs6 sm7 md7 lg7 class="board-elem-text">
                    <p class="feedback-list-contents-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="feedback-list-contents-elems-content">2018.01.01</p>
                </v-flex>
            </v-layout>
            <v-layout row class="feedback-list-contents-elems">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="feedback-list-contents-elems-content">448</p>
                </v-flex>
                <v-flex xs6 sm7 md7 lg7 class="board-elem-text">
                    <p class="feedback-list-contents-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="feedback-list-contents-elems-content">2018.01.01</p>
                </v-flex>
            </v-layout>
            <v-layout row class="feedback-list-contents-elems">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="feedback-list-contents-elems-content">448</p>
                </v-flex>
                <v-flex xs6 sm7 md7 lg7 class="board-elem-text">
                    <p class="feedback-list-contents-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="feedback-list-contents-elems-content">2018.01.01</p>
                </v-flex>
            </v-layout>
            <v-layout row class="feedback-list-contents-elems">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="feedback-list-contents-elems-content">448</p>
                </v-flex>
                <v-flex xs6 sm7 md7 lg7 class="board-elem-text">
                    <p class="feedback-list-contents-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="feedback-list-contents-elems-content">2018.01.01</p>
                </v-flex>
            </v-layout>
            <v-layout row class="feedback-list-contents-elems">
                <!--****************AXIOS****************-->
                <v-flex xs1 sm1 md1 lg1 class="board-no">
                    <p class="feedback-list-contents-elems-content">448</p>
                </v-flex>
                <v-flex xs6 sm7 md7 lg7 class="board-elem-text">
                    <p class="feedback-list-contents-elems-content">뉴이스트 영샹 요청이요</p>
                </v-flex>
                <v-flex xs3 sm2 md2 lg2>
                    <p class="feedback-list-contents-elems-content">moonluv</p>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1>
                    <p class="feedback-list-contents-elems-content">2018.01.01</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
    
        components: {
    
        },
        data() {
            return {
    
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "styles/common.scss";
    p {
        display: inline;
    }
    
    .feedback-list {
        &-contents {
            &-header {
                height: 50px;
                border-bottom: 3px solid black;
                @include media("(max-width : 510px)") {
                    margin-top: 30px;
                }
                &-content {
                    font-size: 21px;
                    @include media("(max-width : 510px)") {
                        font-size: 13px;
                    }
                }
            }
            &-no {
                text-align: center;
            }
            &-elems {
                height: 60px;
                border-bottom: 1px solid $grey-text;
                &-content {
                    line-height: 60px;
                    @include media("(max-width : 510px)") {
                        font-size: 8px;
                    }
                }
            }
        }
    }
</style>
