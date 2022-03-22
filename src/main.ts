/* eslint-disable */

import { createApp, VNode, h } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import MainSite from './MainSite.vue'
import NotFound from './NotFound.vue'
import About from './About.vue'
import Showcase from './Showcase.vue'
import Planner from './Planner.vue';

createApp({
    data() {
        return {
            currentRoute: `${window.location.pathname}`
        }
    },
    computed: {
        ViewComponent() {
            switch (this.currentRoute) {
                case '/index.html':
                case '/':
                    return MainSite;
                case '/about.html':
                    return About;
                case '/showcase.html':
                    return Showcase;
                case '/planner.html':
                    return Planner;
                default:
                    return NotFound;
            }
        }
    },
    render(): VNode {
        return h(this.ViewComponent);
    }
}).mount("#app");
