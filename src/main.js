import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/store/store';
import '@/styles/index.scss';
import '@/router/permission';

// 引入element-plus
import ElementPlus from 'element-plus';

// 引入 vxe-table
import useTable from './utils/vxe-table';

// 引入fontawesome
import '@/assets/fontawesome/css/all.min.css';

const app = createApp(App);

app.use(ElementPlus, { size: 'small' });
app.use(useTable);
app.use(pinia);
app.use(router);
app.mount('#app');
