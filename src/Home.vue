<template>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
      <h1 class="big-text d-inline-block"><span>Tomasz Zając</span></h1>
      <div class="float-end ms-0 ms-sm-3" id="homeIntroCoverPortrait" />
      <h3>An experienced, self-motivated software developer</h3>
      <hr />
      <p class="fs-5">
        4 years of professional experience developing, maintaining and providing
        support on a variety of enterprise-grade Web services.
      </p>
    </div>
  </div>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2">
      <h1>Professional experience</h1>
      <p class="fs-5">
        Due to programming being both my hobby and an integral part of my job, I
        have delved into a multitude of languages and domains.
      </p>
      <div class="d-flex flex-row">
        <div>
          <p class="fs-5 pe-3">
            My current professional background comes from a Web development
            perspective, which entails full-stack development using modern,
            open-source technologies, while also interfacing with
            proprietary/enterprise infrastructure to deliver services.
          </p>
          <p class="fs-5 pe-3">
            In my career, I have been responsible for not only developing new,
            innovative solutions, such as conversational chatbots and
            interactive navigation guides, but also maintaining legacy systems
            supporting key business operations and developing processes scalable
            to large volumes of data.
          </p>
        </div>
        <div
          class="
            mb-3
            flex-grow-1
            col-1
            d-flex
            flex-column flex-xl-row flex-xl-wrap
            home-intro-cover-tech
            align-items-stretch
          "
          role="group"
        >
          <ButtonWithPopover
            :key="key"
            v-for="(tech, key) in webTechExperience"
            :popover-title="tech.title"
            :popover-text="tech.brief"
            :icon="tech.icon"
          />
          <!-- Web technologies will go here -->
        </div>
      </div>
      <PortfolioCarousel class="col-12" :products="portfolio" />
    </div>
  </div>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2">
      <h1>Personal projects &amp; hobbyist development</h1>
      <p class="fs-5">
        In my personal projects, however, I often challenge myself to learning
        completely different areas, such as graphics rendering and physics
        simulation in a game programming context.
      </p>
      <div class="d-flex flex-row">
        <div
          class="
            mb-3
            flex-grow-1
            col-1
            d-flex
            flex-column flex-xl-row flex-xl-wrap
            home-intro-cover-tech
            align-items-stretch
          "
          role="group"
        >
          <ButtonWithPopover
            :key="key"
            v-for="(tech, key) in gameTechExperience"
            :popover-title="tech.title"
            :popover-text="tech.brief"
            :icon="tech.icon"
          />
          <!-- Game technologies will go here -->
        </div>
        <p class="fs-5 ps-3">
          I have working knowledge of industry-standard game engines Unity,
          Unreal and Godot, as well as graphics and physics middleware including
          OpenGL, PhysX and Bullet. I am familiar with many math concepts
          commonly used for rendering and lighting (algebra, vector math,
          calculus), as well as basic Newtonian dynamics required for physics
          and gameplay programming.
        </p>
      </div>
    </div>
  </div>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2">
      <h1>Team player</h1>
      <p class="fs-5">
        While delivering the best product possible is always my primary
        objective, I make sure to promote good practice and endeavour to foster
        a friendly &amp; helpful atmosphere within the team.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "./css/home.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonWithPopover from "./components/home/ButtonWithPopover.vue";
import PortfolioCarousel from "./components/shared/PortfolioCarousel.vue";
import { ProductSlide } from "./types/ProductSlide";
import {gameTechExperience} from "./mixins/data/game_tech_experience";
import {webTechExperience} from "./mixins/data/web_tech_experience";

export default defineComponent({
  components: {
    ButtonWithPopover,
    PortfolioCarousel,
  },
  mixins: [gameTechExperience, webTechExperience],
  name: "Home",
  data: () => ({
    portfolio: [
      new ProductSlide(
        "Navigate-Me",
        new Array<string>(
          require("./assets/portfolio/professional/navigateme.png"),
          require("./assets/portfolio/professional/navigateme2.png")
        ),
        [
          "Navigate-Me is a campus navigation system I helped develop and maintain for over 4 years.\nI have joined the project close to its release, so my involvement was primarily to keep the system's maps up to date and adapt to new requirements over time (e.g. special maps to support social distancing measures during the COVID-19 outbreak).",
          "In addition to maintaining and improving the project's codebase, I was tasked with creating map data for the University campus.",
        ]
      ),
    ],
  }),
  computed: {
    coverPageBlockClass() {
      return "col-12 main-page-content py-4 px-0 px-md-4 home-intro-cover";
    },
    portfolioImages(): any {
      return Object.values(this.portfolio).map(
        (portfolioEntry: any) => portfolioEntry.img
      );
    },
  },
});
</script>