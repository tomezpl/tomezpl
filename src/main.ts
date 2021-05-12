/* eslint-disable */

interface BlogEntryMeta {
    id: number;
    name: string;
    header: string;
    subheader: string;
    date: Date;
}

interface BlogEntry {
    meta: BlogEntryMeta;
    content: string;
}

import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import MainSite from './MainSite.vue'

let blogDb: Array<BlogEntry> = [];

function populateBlogPosts() {
    console.log('Fetching blog index...');
    return fetch(`${window.location.origin}/db/blog/index.json`, {
        method: 'GET'
    }).then(response => {
        console.log('Got index.json. Parsing...');
        return response.json()
    }).then(responseJson => {
        console.log('Parsed index.json');
        console.log(responseJson);

        const indexArray: Array<string> = responseJson;

        console.log('Iterating through index to populate the array with all blogposts...');
        indexArray.map((indexEntry) => {
            fetch(`${window.location.origin}/db/blog/${indexEntry}/meta.json`, {
                method: 'GET'
            }).then(response => response.json())
                .then(responseJson => {
                    const meta: BlogEntryMeta = responseJson;

                    fetch(`${window.location.origin}/db/blog/${meta.id}-${meta.name}/index.html`, {
                        method: 'GET'
                    }).then(response => {
                        response.text().then(blogPostText => {
                            blogDb.push({ meta, content: blogPostText });
                        })
                    });
                });
        });
    }).catch(() => {
        blogDb = [];
    });
}

populateBlogPosts().finally(() => {
    createApp(MainSite, {
        blogDb
    }).mount("#app");
});
