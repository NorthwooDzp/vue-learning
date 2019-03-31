import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('uppercase', value => value.toUpperCase());

/**
 * Global mixin is implemented in all Vue components
 */
Vue.mixin({
    beforeCreate() {
        console.log('before create');
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
