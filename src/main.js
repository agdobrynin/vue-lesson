import Vue from "vue"
import App from "./App"

export const eventEmmiter = new Vue();

new Vue({
    el: "#app",
    render: h => h(App)
});
