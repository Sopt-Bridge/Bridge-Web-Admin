import Vue from 'vue';
import Toolbar from "./Toolbar/Toolbar.vue"
import ViMain from './Vi-Main/Vi-Main.vue'
import ViSidebar from './Vi-Sidebar/Vi-Sidebar.vue'
import VideoCard from './Card/VideoCard.vue'


Vue.component('Vi-Main',ViMain);
Vue.component('Vi-Sidebar',ViSidebar);
Vue.component('video-card',VideoCard);
Vue.component('Toolbar', Toolbar);

export default Vue;