<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <template v-for="(blogPost, index) in sortedBlogPosts" :key="index">
                <BlogPost :entry="blogPost" />
                <hr class="blog-post-separator" />
            </template>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Header from './components/Header.vue';
    import BlogPost from './components/BlogPost.vue';
    import Footer from './components/Footer.vue';

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
        name: 'Blog',
        components: {
            Header,
            BlogPost,
            Footer
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
                return fetch(`${window.location.origin}/db/blog/index.json`, {
                    method: 'GET'
                }).then(response => {
                    return response.json()
                }).then(responseJson => {
                    const indexArray: Array<string> = responseJson;

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