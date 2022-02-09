<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post row">
                <h1>Showcase</h1>
                <h2>Game development</h2>
                <ShowcaseEntry 
                    v-for="entry in orderedShowcaseEntries"
                    :key="entry.id"
                    v-bind:title="entry.title" 
                    v-bind:githubLink="entry.githubLink"
                    v-bind:tags="entry.tags"
                    v-bind:id="entry.elId">
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

    class ShowcaseEntryData {
        id: number;
        title: string;
        tags: Array<string>;
        githubLink: string;
        content: string;
        elId: string;

        constructor() {
            this.id = 0;
            this.title = '';
            this.tags = [];
            this.githubLink = '';
            this.content = '';
            this.elId = '';
        }
    }

    export default defineComponent({
        name: 'Showcase',
        components: {
            Header,
            Footer,
            ShowcaseEntry
        },
        computed: {
            orderedShowcaseEntries(): Array<ShowcaseEntryData> {
                const showcaseEntries = this.showcaseEntries;
                return showcaseEntries.sort((entry1: ShowcaseEntryData, entry2: ShowcaseEntryData) => entry1.id > entry2.id ? 1 : (entry2.id > entry1.id ? -1 : 0));
            }
        },
        data: () => ({
            showcaseEntries: [
                {
                    elId: 'physics-demo-2d',
                    id: 1,
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
                    elId: '',
                    id: 2,
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
                    elId: '',
                    id: 3,
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
                },
                {
                    elId: '',
                    id: 0,
                    title: 'Car Physics',
                    githubLink: '',
                    tags: ['C#', 'C++', 'Unity3D', 'Unreal Engine 4', 'physics programming', 'gameplay programming'],
                    content: `
                        <p>
                            These were two spare-time projects that I used as opportunities to learn implementing vehicle physics in a 3D video game.
                            While implementing vehicle gameplay bespokely for one title could be easier due to being able to narrow down the scope, I was intending on creating a more robust solution.
                            Vehicle physics is far from a simple topic, though (especially using rigidbodies), and I was not able to dedicate as much time to it as I would have liked.
                            Still, I am somewhat proud with the results given the fact I was going in totally blind.
                        </p>
                        <p class="fw-bold">
                            While I am fully aware that both Unity3D and Unreal Engine 4 offer built-in vehicle physics components, my motivation was to understand how those systems are implemented
                            from scratch, and as such I decided to limit myself only to basic rigidbody components, primitive colliders and raycasting.
                        </p>
                        <p>
                            My first attempt was using the Unity engine. Here I was familiarising myself with the very basic concepts, such as acceleration curves, Ackermann steering geometry, etc.
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <img src="/assets/carturnfast.gif" class="w-100">
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <p class="mt-3">
                            I initially struggled with implementing believable wheel suspension, but after some experimenting was also able to come up with a fairly plausible solution:
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <video src="/assets/SPRINGS.mp4" class="w-100" preload="metadata" muted autoplay loop>
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <p class="mt-3">
                            Undoubtedly, this left a lot to be desired, which was to be expected given it was my first attempt at programming vehicles.
                            Not giving up, I've recently been re-exploring this topic, but decided to use Unreal Engine 4 as I've also been looking to familiarise myself with that framework.
                        </p>
                        <p>
                            This time, I decided not to use mesh colliders for the vehicle's wheels, as I realised a major shortcoming of my previous attempt
                            was that the physics engine generated a lot of contact responses as a result, which ended up in the vehicle getting stuck on inclines, flipping over small bumps etc.
                            Instead, I decided to replace the colliders using raycasts, which would then exert spring force (Hooke's law) on the car's chassis in order to regulate ride height.
                        </p>
                        <p>
                            While it was a substantial improvement, the lack of damping created some mildly entertaining sights:
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <video src="/assets/jumpycar.mp4" class="w-100" preload="metadata" muted autoplay loop>
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <p class="mt-3">
                            Delving deeper, I've started learning about critically damped springs. Unreal's coordinate system initially made it a bit confusing to implement straightaway,
                            so I opted for a simpler, 2D implementation in my <a href="#physics-demo-2d">toy engine</a>, which I then ported back into the Unreal project once I knew the maths worked as expected:
                        </p>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <div class="col-10 col-md-8 col-xl-6">
                            <video src="/assets/lessjumpycar.mp4" class="w-100" preload="metadata" muted autoplay loop>
                        </div>
                        <div class="col-1 col-md-2 col-xl-3"></div>
                        <p class="mt-3">
                            Excuse the shaky camera - aside from the fact that this is not a complete solution, the camera is also attached to the car object, which means even the smallest motion impacts the view.
                        </p>
                    `
                },
                {
                    elId: '',
                    id: -1,
                    title: 'RoombaRumble',
                    githubLink: '',
                    tags: [],
                    content: ``
                }
            ]
        })
    });
</script>