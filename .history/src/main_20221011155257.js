import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
        Vue.protoType
    },
})
