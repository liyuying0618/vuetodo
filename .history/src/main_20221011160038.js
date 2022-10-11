import { createApp } from 'vue'
import App from './App.vue'

createApp.config.production

createApp(App).mount('#app')
// 创建vm
createApp({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus =this;
    }
})
