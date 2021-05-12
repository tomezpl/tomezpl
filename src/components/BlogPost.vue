<template>
    <div class="blog-post">
        <div class="row">
            <div class="col-8">
                <h2 class="d-inline-block">{{entry.meta.header}}</h2>
                <h5 style="font-style: italic">{{entry.meta.subheader}}</h5>
            </div>
            <div class="col-4">
                <p class="text-end" style="text-decoration: underline">{{entry.meta.date}}</p>
            </div>
        </div>
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