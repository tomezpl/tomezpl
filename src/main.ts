/* eslint-disable */

import { createApp, VNode, h, DefineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Home.vue'
import NotFound from './NotFound.vue'
import About from './About.vue'
import Showcase from './Showcase.vue'
import Blog from './Blog.vue'
import MasterLayout from './MasterLayout.vue';

class PageData {
    ViewComponent: object;
    Title: string;

    constructor(viewComponent: object, title: string) {
        this.ViewComponent = viewComponent;
        this.Title = title;
    }
}

createApp({
    data() {
        return {
            currentRoute: `${window.location.pathname}`
        }
    },
    computed: {
        ViewComponentAndTitle() {
            switch (this.currentRoute) {
                case '/index.html':
                case '/':
                    return new PageData(Home, 'Welcome');
                case '/blog.html':
                    return new PageData(Blog, 'Dev blog');
                case '/about.html':
                    return new PageData(About, 'About me');
                case '/showcase.html':
                    return new PageData(Showcase, 'Project showcase');
                default:
                    return new PageData(NotFound, 'Not found!');
            }
        }
    },
    render(): VNode {
        const page = this.ViewComponentAndTitle;
        return h(MasterLayout, {pageTitle: page.Title}, () => h(page.ViewComponent));
    }
}).mount("#app");
