<template>
    <div class="blog-post">
        <h2>{{entry.meta.header}}</h2>
        <div v-html="entry.content" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BlogPost',
        props: {
            entry: Object
        }
    })
</script>