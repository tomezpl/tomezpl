<template>
    <div class="container text-light">
        <Header />
        <SiteBody :blogDb="blogDb" />
        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Header from './components/Header.vue';
    import SiteBody from './components/SiteBody.vue';
    import Footer from './components/Footer.vue';
    import './css/styles.css';

    export default defineComponent({
        name: 'MainSite',
        components: {
            Header,
            SiteBody,
            Footer
        },
        props: {
            blogDb: Array
        }
    });
</script>