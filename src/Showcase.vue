<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post">
                <h1>Showcase</h1>
                <h2>Coming soon!</h2>
                <p>
                    In the meantime, feel free to <a href="https://github.com/tomezpl">visit my GitHub</a>. &nbsp; <img style="vertical-align: middle; height: 1.5em;" src="./assets/GitHub-Mark-Light-64px.png" />
                </p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import './css/styles.css';

    export default defineComponent({
        name: 'Showcase',
        components: {
            Header,
            Footer
        }
    });
</script>