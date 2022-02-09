<template>
    <div class="mb-4">
        <h3>
            <a v-bind:href="githubLink" target="_blank">
                {{title}}
                <i class="bi-box-arrow-up-right small-icon align-top"></i>
            </a>
        </h3>
        <p>
            <span class="badge badge-info" v-for="tag in tags" :key="tag">{{tag}}</span>
        </p>
        <slot></slot>
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