<template>
    <div class="showcase-entry">
        <h3>
            <a v-bind:href="githubLink" target="_blank" v-if="githubLink !== ''">
                {{title}}
                <i class="bi-box-arrow-up-right small-icon align-top"></i>
            </a>
            <span v-if="githubLink === ''">{{title}}</span>
        </h3>
        <p>
            <span class="badge bg-success mx-1" v-for="tag in tags" :key="tag">{{tag}}</span>
        </p>
        <slot></slot>
        <hr class="blog-post-separator mt-4 mb-3 w-100" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ShowcaseEntry',
        props: {
            githubLink: String,
            title: String,
            tags: Array
        }
    })
</script>