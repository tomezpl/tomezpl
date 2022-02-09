<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post row">
                <h1>Showcase</h1>
                <h2>Game development</h2>
                <ShowcaseEntry 
                    v-for="entry in showcaseEntries" 
                    :key="entry.id" 
                    v-bind:title="entry.title" 
                    v-bind:githubLink="entry.githubLink"
                    v-bind:tags="entry.tags">
                    <div class="row" v-html="entry.content"></div>
                </ShowcaseEntry>
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
    import ShowcaseEntry from './components/ShowcaseEntry.vue';
    import './css/styles.css';

    export default defineComponent({
        name: 'Showcase',
        components: {
            Header,
            Footer,
            ShowcaseEntry
        },
        data: () => ({
            showcaseEntries: [
                {
                    id: 0,
                    title: 'PhysicsDemo2D',
                    tags: ['C++', 'custom physics engine'],
                    githubLink: 'https://github.com/tomezpl/PhysicsDemo2D',
                    content: `
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
                            <img src="/assets/physicsdemo2d_springs.gif" class="w-100" />
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                    `
                },
                {
                    id: 1,
                    title: 'PhysXPinball',
                    githubLink: 'https://github.com/tomezpl/PhysXPinball',
                    tags: ['C++', 'PhysX', 'OpenGL', 'GLSL'],
                    content: `
                        <p>
                            As part of my physics simulation course at university, we were tasked with developing a simple pinball-style game utilising the PhysX library.
                        </p>
                        <p>
                            The project uses PhysX to provide rigidbody simulation, including joints which were used for simulating the flippers.
                            The simulation callback is also used as a way to detect game state (ie. display a 'game over' screen if the ball remains under the flippers for too long),
                            and spawn particle effects on ball impact. Different object types have been given varied physic material properties corresponding to their purpose:
                            the ball and the bumpers for example have high coefficients of restitution as those interactions need to generate strong bounces. However, they have low friction compared to the table object.
                        </p>
                        <p>
                            While our instructors advised us to use the PhysX Visual Debugger (PVD) for displaying the scene in 3D,
                            I decided to push myself further and write an OpenGL renderer for the game (<a href="https://github.com/tomezpl/PhysXPinball/blob/master/src/Renderer.h" target="_blank"><code>src/Renderer.[h|cpp]</code><i class="bi-box-arrow-up-right tiny-icon align-top"></i></a>).
                            This included integrating the PhysX transforms with the OpenGL model matrices, as well as writing GLSL shaders to carry out basic lighting in the scene.
                            The spark effects are also controlled by shaders; their alpha channel (opacity) is determined by the particle lifespan.
                        </p>
                        <p>
                            While we were permitted to just use PhysX primitives for desigining the level (effectively constructing it within the C++ runtime),
                            I figured that would be very difficult to maintain and also not very representative of level design in actual games. As such, I designed
                            my level using Blender, then wrote a loader class (admittedly very hard-coded due to time constraints: <a href="https://github.com/tomezpl/PhysXPinball/blob/master/src/Level.h" target="_blank"><code>src/Level.[h|cpp]</code><i class="bi-box-arrow-up-right tiny-icon align-top"></i></a>)
                            in order to use it in the game.
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <img src="/assets/physxpinball.gif" class="w-100" />
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                    `
                },
                {
                    id: 2,
                    title: 'Survive the Hunt',
                    githubLink: 'https://github.com/tomezpl/sth-gamemode',
                    tags: ['C#', 'FiveM', 'GTA V Modding', 'gameplay scripting', 'UI programming'],
                    content: `
                        <p>
                            Purely a hobby project aiming to implement the basic rules of the community-created &quot;Survive the Hunt&quot; gamemode, recently made popular by the FailRace YouTube channel.
                        </p>
                        <p>
                            The gamemode is implemented using the community multiplayer platform for GTA V on the PC, aka. FiveM, using its CSharp API and the GTAV &quot;natives&quot; (callable functions from the game's executable).
                            A rudimentary UI displaying a portrait of the currently hunted player, the current objective, highlighting the search area etc. has also been implemented using GTAV's UI functions.
                        </p>
                        <p>
                            Below is a short trailer-like video showcasing the mod:
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <iframe class="w-100" width="560" height="315" src="https://www.youtube-nocookie.com/embed/WbWL-sUzcAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                    `
                }
            ]
        })
    });
</script>