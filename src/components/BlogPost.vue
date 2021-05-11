<template>
    <div class="blog-post">
        <h2>{{entry.meta.header}}</h2>
        <h5 style="font-style: italic">{{entry.meta.date}}</h5>
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