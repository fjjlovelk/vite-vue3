import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// 引入 vxe-table
import useTable from './utils/vxe-table';

// 引入fontawesome
import '@/assets/fontawesome/css/all.min.css';

// 引入全局样式和路由校验
import '@/styles/index.scss';
import '@/router/permission';

const app = createApp(App);

app.use(useTable);
app.use(createPinia());
app.use(router);
app.mount('#app');
