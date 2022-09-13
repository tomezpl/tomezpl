/* eslint-disable */

import { createApp, VNode, h } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Home.vue'
import NotFound from './NotFound.vue'
import About from './About.vue'
import Showcase from './Showcase.vue'
import Blog from './Blog.vue'

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
                    return Home;
                case '/blog.html':
                    return Blog;
                case '/about.html':
                    return About;
                case '/showcase.html':
                    return Showcase;
                default:
                    return NotFound;
            }
        }
    },
    render(): VNode {
        return h(this.ViewComponent);
    }
}).mount("#app");
