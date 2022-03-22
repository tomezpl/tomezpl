<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post row">
                <h1>Planner</h1>
                <PlannerComponent />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PlannerComponent from './components/PlannerComponent.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import './css/styles.css';

    export default defineComponent({
        name: 'Planner',
        components: {
            Header,
            Footer,
            PlannerComponent
        },
        data: () => ({

        })
    })
</script>