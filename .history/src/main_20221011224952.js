import Vue from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建vm
Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus =this;
    }
})
