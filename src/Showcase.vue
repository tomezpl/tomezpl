<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post row">
                <h1>Showcase</h1>
                <h2>Game development</h2>
                <h3>PhysicsDemo2D</h3>
                <p>
                    Having undertaken a physics simulation class at university, I decided to explore the area further and started implementing my own physics systems in games as an exercise.
                </p>
                <p>
                    However, I immediately jumped into 3D physics, which turned out to be a very complex beast to tackle as a newcomer.
                    As such, I decided to write a toy 2D physics engine that I could use for learning real-time physics simulation in a slightly less daunting domain.
                </p>
                <p>
                    As an example, I've used this project to implement my own damped spring constraint, which I was intending on using for wheel suspension in a 3D vehicle physics system:
                </p>
                <div class="col-1 col-md-2 col-xl-3"></div>
                <div class="col-10 col-md-8 col-xl-6">
                    <img src="./assets/physicsdemo2d_springs.gif" style="width: 100%" />
                </div>
                <div class="col-1 col-md-2 col-xl-3"></div>
                <p>
                    For more projects, feel free to <a href="https://github.com/tomezpl">visit my GitHub</a>. &nbsp; <img style="vertical-align: middle; height: 1.5em;" src="./assets/GitHub-Mark-Light-64px.png" />
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