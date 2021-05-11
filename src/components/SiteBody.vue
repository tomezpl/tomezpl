<template>
    <div class="row site-body body-headernav-border">
        <template v-for="(blogPost, index) in sortedBlogPosts" :key="index">
            <BlogPost :entry="blogPost" />
            <hr class="blog-post-separator" />
        </template>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import BlogPost from './BlogPost.vue';

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

    export default defineComponent({
        name: 'SiteBody',
        components: {
            BlogPost
        },
        /*eslint-disable no-unused-labels */
        data() {
            return {
                blogDb: new Array<BlogEntry>()
            }
        },
        computed: {
            sortedBlogPosts() {
                const blogDb: Array<BlogEntry> = this.blogDb.map((blogPost) => blogPost);
                return blogDb.sort((prev, next) => {
                    return prev.meta.id > next.meta.id ? -1 : 1;
                });
            }
        },
        /*eslint-disable no-unused-labels */
        methods: {
            populateBlogPosts() {
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

                    const blogDb = this.blogDb;
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
                    this.blogDb = [];
                });
            }
        },
        mounted() {
            this.populateBlogPosts();
        }
    });
</script>