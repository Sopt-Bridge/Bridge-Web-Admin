<template>
<div class="text-xs-center pagination">
    <v-pagination
      v-model="page"
      :length="3"
    ></v-pagination>
  </div>
</template>

<script>
export default {
    data () {
      return {
        page: 1
      }
    }
}
</script>

<style lang="scss" scoped>
pagination{
    margin-top : 30px;
    height: 100px;
}

</style>
