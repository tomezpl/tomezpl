<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post">
                <h1>About me</h1>
                <h2>Brief</h2>
                <p>
                    If you happen to have stumbled upon this page - welcome!
                </p>
                <p>
                    My name is Tom and I'm a programmer, primarily experienced in Web development, and a hobbyist game developer.
                    Natively I am Polish, but I currently live in Britain.
                </p>
                <p>
                    You can find my <a href="https://www.linkedin.com/in/tomzajac">LinkedIn profile here</a>. For contact enquiries please email <a href="mailto:tomaszzlc@gmail.com">tomasszlc@gmail.com</a>.
                </p>
                <h2>Interests</h2>
                <p>
                    My interests are mostly focused around video games and the gaming industry, as well as history, music, languages, animation &amp; filmmaking (having been active in some machinima-style content creation when I was younger).
                </p>
                <h2>Skills &amp; qualifications</h2>
                <h3>Higher Education</h3>
                <h4>University of Lincoln</h4>
                <small>2017 - 2020 | Lincoln, Lincolnshire, United Kingdom</small>
                <p>
                    Graduated with a 1st Class Honours BSc in Computer Science. Subjects included programming, computer architectures, networking,
                    physics simulation, image processing, team software engineering, maths, algorithms &amp; complexity, problem solving, operating systems, Web authoring and more. 
                </p>
                <p>
                    In my final year, I wrote a dissertation on teaching programming through gamification. The project explored the history of the topic and also proposed <a href="https://github.com/tomezpl/code-gamification">a playable prototype solution</a>.
                    You can <a href="assets/Teaching Programming by Gamification.pdf">read the full report here</a>.
                </p>
                <h3>Further Education</h3>
                <h4>Lincoln College</h4>
                <small>2015 - 2017 | Lincoln, Lincolnshire, United Kingdom</small>
                <p>
                    Achieved a Distinction*-Distinction*-Distinction grade. Subjects included game development &amp; technologies, web development (design, front-end, back-end, e-commerce), computer systems (knowledge &amp; repair skills), computer networks (history, types, design, equipment, setup &amp; maintenance) and communication skills (employment etc.).
                    I've also undertaken 30 hours of work experience at the KNOWHOW Repair Centre in Newark, Nottinghamshire as part of the course.
                </p>
                <h3>School</h3>
                <h4>Cherry Willingham Community School</h4>
                <small>2014 - 2015 | Cherry Willingham, Lincolnshire, United Kingdom</small>
                <p>
                    Having just moved to the UK, I used Year 11 as a period to familiarise myself with living in the country. I ended up with grades C and above in English, Maths, Science, ICT, Statistics and Polish.
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
        name: 'About',
        components: {
            Header,
            Footer
        }
    });
</script>