<template>
    <div class="row site-body body-headernav-border">
        <template v-for="(blogPost, index) in blogDb" :key="index">
            <BlogPost :entry="blogPost" />
            <hr class="blog-post-separator" />
        </template>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import BlogPost from './BlogPost.vue';

    export default defineComponent({
        name: 'SiteBody',
        components: {
            BlogPost
        },
        data: () => ({
            msg: 'Hello'
        }),
        props: {
            blogDb: Array
        }
    });
</script>