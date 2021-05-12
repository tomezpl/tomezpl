<template>
    <h2>{{entry.title}}</h2>
    <div v-html="entry.content" />
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