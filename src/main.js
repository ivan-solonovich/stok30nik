import { createApp } from 'vue'
import AxiosPlugin from 'vue-axios-cors';
import router from "./router/router.js";
import store from "./store/store.js";
import './style.css'
import App from './App.vue'


const app = createApp(App);
    app.use(
        router,
        store,
        AxiosPlugin
        )

        .mount('#app')
