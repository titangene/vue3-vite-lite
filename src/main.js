import { createApp } from 'vue';

import './styles/main.scss';

import App from './App.vue';
import pinia from './plugins/pinia';
import router from './plugins/vue-router';
import quasar from './plugins/quasar';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(quasar);

app.mount('#app');
