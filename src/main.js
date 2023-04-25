import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App).use(router)

for (const name in ElIcons) {
    app.component(name, (ElIcons)[name])
}

app.mount('#app')