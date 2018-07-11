<template>
    <div class="upload-list">
        <v-layout>
            <!-- <v-flex class="list-main-title-bottom" /> -->
            <v-flex class="upload-list-top" />
        </v-layout>
        <!-- <v-layout row wrap class="list-main-contents"> -->
        <v-layout row wrap class="upload-list-contents">
            <v-flex v-for="k in 12" :key="'scf'+k" xs12 sm6>
                <video-card/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang='scss' scoped>
    @import "styles/common.scss";
    .upload {
        &-list {
            &-top {
                height: 30px;
                border-bottom: 2px solid black;
                @include media('(max-width : 520px)') {
                    height: 0px;
                }
            }
            &-contents{
                margin-top : 30px;
            }
        }
    }
</style>
