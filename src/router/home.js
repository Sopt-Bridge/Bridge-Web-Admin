import Home from "../pages/List/ListMain.vue"
import UploadList from "../components/List/UploadList.vue"
import FeedbackList from "../components/List/FeedbackList.vue"

export const home = {
    path : '/',
    name : 'Home',
    component : Home,
    children : [
        {
            path : '',
            component : UploadList
        },
        {
            path :'/feedback',
            component : FeedbackList
        }
    ]
}