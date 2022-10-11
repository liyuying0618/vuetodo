import { createApp } from 'vue'
import App from './App.vue'

createApp.config.productionTip = false;

createApp(App).mount('#app')
// 创建vm
createApp({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus =this;
    }
})
