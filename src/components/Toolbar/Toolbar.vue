<template>
  <div class="Toolbar-container">
    <div class="Toobar">
      <div class="Toobar-wrap">
        <div class="Toobar-upBox">
          <div class="Toobar-logo">
            <router-link :to="home">
              <img src="../../assets/img/short logo.svg" class="main_logo">
            </router-link>
          </div>
  
        </div>
        <div class="Toobar-items">
          <!-- <router-link class="Toobar-items-item" :to="{ name : 'Subscribe' }"> -->
          <!-- <router-link class="Toobar-items-item" :to="{ name : 'Home' }"> -->
          <router-link class="Toobar-items-item" :to="home">
            List
          </router-link>
          <router-link class="Toobar-items-item Toobar_Btn" :to="{ name : 'Upload' }">
            Upload
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        clipped: true,
        drawer: true,
        request: "/request",
        home: "/",
        name: "lee",
        email: "abc@abc.com",
        items: {},
        searchStyle: {
          width: "100%"
        },
        searchItemList: []
      };
    },
    components: {
      
    },
    methods: {
      
    },
    created() {
      
    }
  };
</script>

<style lang="scss" scoped>
  @import "styles/common.scss";
  .Toobar {
    box-shadow: 0px 2px 6px 1px gray;
    z-index: 1;
    position: fixed;
    width: 100%;
    background-color: white;
    &-wrap {
      padding-top: 8px;
      padding-bottom: 8px;
      display: flex;
      @media screen and (max-width: 510px) {
        flex-wrap: wrap;
        padding-bottom: 4px;
      }
    }
    &-upBox {
      display: flex;
      align-items: center;
      flex-shrink: 1;
      flex-grow: 3;
      margin-right: auto;
    }
    &-upBox {
      display: flex;
      align-items: center;
      flex-shrink: 1;
      flex-grow: 3;
      margin-right: auto;
    }
    &-logo {
      margin-left: 3.5%;
      margin-right: 3.5%;
    }
    &-search {
      flex-grow: 1;
      margin-left: 7%;
    }
    &-items {
      display: inline-flex;
      flex-grow: 1;
      justify-content: flex-end;
      user-select: none;
      padding-right: 3%;
      @include media("(max-width: 510px)") {
        justify-content: space-around;
      }
      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 7px;
        font-size: 17px;
        flex-shrink: 1;
        margin: {
          left: 5px;
          right: 7%;
        }
        padding: 5px;
        @include media("(max-width: 860px)") {
          font-size: 12px;
          margin: {
            right: 3%;
          }
        }
        @include media("(max-width: 510px)") {
          font-size: 17px;
          margin: {
            left: 0px;
            right: 0px;
          }
        }
        &:hover {
          transition: 0.5s;
          background-color: rgba(151, 150, 150, 0.596);
        }
        color: black;
        text-decoration: none;
        &:visited {
          color: black;
          text-decoration: none;
        }
      }
    }
  }
  
  .menu-item {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 90%;
    display: flex;
    .Toolbar-items-myinfo-content {
      display: flex;
      align-items: center;
    }
    &:hover {
      transition: 0.5s;
      background-color: rgba(151, 150, 150, 0.596);
    }
  }
  
  .main_logo {
    width: 60px;
    margin-top: 8px;
  }
  
  .nav-search-btn {
    height: 45px;
    width: 45px;
    background-color: $main-color;
    margin-right: auto;
    @include media("(max-width : 510px)") {
      margin-right: 8px;
    }
  }
  
  .Toolbar-items-myinfo {
    &-content {
      width: 100%;
      padding: 0px 10px 0px 10px;
      &-text {
        padding-left: 15px;
      }
      &-signout {
        //   height : 130%;
        width: 90%;
        height: 70%;
        line-height: 40px;
        text-align: center;
        background-color: $main-color;
        color: white;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
</style>