<template>
    <div class="container text-light">
        <Header />
        <div class="row site-body body-headernav-border">
            <div class="blog-post">
                <h1>About me</h1>
                <h2>Brief</h2>
                <p>
                    If you happen to have stumbled upon this page - welcome!
                    My name is Tom, I'm currently a Computer Science student at University of Lincoln, UK. That is also my current workplace - I am part of the ICT department's associate developer team.
                    Natively I am Polish, but I currently live in Britain.
                </p>
                <p>
                    You can find my <a href="https://www.linkedin.com/in/tomzajac">LinkedIn profile here</a>. For contact enquiries please email <a href="mailto:tomaszzlc@gmail.com">tomasszlc@gmail.com</a>.
                </p>
                <h2>Interests</h2>
                <p>
                    My interests are... all over the place, really.
                    Mainly it is game design &amp; development, graphics programming and computer architectures. In addition, at some point in the near future I plan on delving into how video editing software is built - and perhaps have a go at writing my own open-source editor.
                </p>
                <h2>Skills &amp; qualifications</h2>
                <h3>Higher Education</h3>
                <h4>University of Lincoln</h4>
                <small>2017 - 2020 | Lincoln, Lincolnshire, United Kingdom</small>
                <p>
                    Currently working on graduating with a BSc in Computer Science, aiming to achieve a 1st or 2:1 degree.
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