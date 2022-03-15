<template>
    <div class="showcase-entry">
        <div class="row">
            <div class="col-12">
                <h3>
                    <a v-bind:href="githubLink" target="_blank" v-if="githubLink !== ''">
                        {{title}}
                        <i class="bi-box-arrow-up-right small-icon align-top"></i>
                    </a>
                    <span v-if="githubLink === ''">{{title}}</span>
                </h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-11 col-md-8 col-lg-6">
                <span class="badge bg-success mx-1" v-for="tag in tags" :key="tag">{{tag}}</span>
            </div>
        </div>
        <div class="row mt-3">
            <slot></slot>
        </div>
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