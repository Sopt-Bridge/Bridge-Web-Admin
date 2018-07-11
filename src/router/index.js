import Vue from 'vue'
import Router from 'vue-router'
import { home } from "./home"
import { upload } from "./upload"


Vue.use(Router)

export default new Router({
  routes: [
    home, upload
  ],
  mode : 'history'
})
