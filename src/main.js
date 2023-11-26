import { createApp } from 'vue'
import { useRouter} from "vue-router";
import router from "./router/router.js";
import store from "./store/store.js";
import './style.css'
import App from './App.vue'

const app = createApp(App);
    app.use(
        router,
        store,
        useRouter
        )

        .mount('#app')
