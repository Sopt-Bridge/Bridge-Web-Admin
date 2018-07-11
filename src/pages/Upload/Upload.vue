<template>
    <div class="upload">
        <v-container class="upload-container">
            <v-layout>
                <div class="upload-title">
                    Upload
                </div>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs8 sm8 md8 lg8>
                    <div class="upload-kinds">
                        <div class="upload-kinds-genre upload-kinds-select">
                            <div >
                                
                            </div>
                            <div>

                            </div>
                        </div>
                        <v-spacer/>
                        <div class="upload-kinds-ext upload-kinds-select">
                            <div>

                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    <div class="upload-kinds-title">

                    </div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex offset-xs1 offset-sm1 offset-md1 offset-lg1 xs11 sm11 md11 lg11>
                    
                </v-flex>
            </v-layout>
            <div class="text-xs-center">

            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style lang='scss' scoped>
    @import "styles/common.scss";
    .upload {
        &-title {
            font-size: 30px;
            margin-top: 30px;
        }
        &-kinds {
            display: flex;
            width: 100%;
            height: 40px;
            margin-top: 30px;
            &-select {
                height: 100%;
                width: 45%;
                border: 1px solid $grey-text;
                display: flex;
                border-radius: 5px;
            }
            &-title{
                @extend .upload-kinds-select;
            }
        }
    }
</style>
