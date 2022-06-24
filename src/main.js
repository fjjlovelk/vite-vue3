import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引入 vxe-table
import useTable from './utils/vxe-table';

// 引入fontawesome
import '@/assets/fontawesome/css/all.min.css';

const app = createApp(App);

app.use(ElementPlus, { size: 'small' });
app.use(router);
app.use(createPinia());
app.use(useTable);
app.mount('#app');
