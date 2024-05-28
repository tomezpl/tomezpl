<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <h1>Woops!</h1>
            <h2>This page doesn't exist. <a href="/" class="green-link">Go home?</a></h2>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Header from './components/Header.vue';

    export default defineComponent({
        name: 'NotFound',
        components: {
            Header,
        }
    });
</script>