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
      <h1>Wide array of skills</h1>
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
            v-for="(tech, key) in techExperience"
            :popover-title="tech.title"
            :popover-text="tech.brief"
            :icon="tech.icon"
          />
          <!-- Web technologies will go here -->
        </div>
      </div>
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
          In my personal projects, however, I often challenge myself to learning
          completely different areas, such as graphics rendering and physics
          simulation in a game programming context. I have working knowledge of
          industry-standard game engines Unity, Unreal and Godot, as well as
          graphics and physics middleware including OpenGL, PhysX and Bullet. I
          am familiar with many math concepts commonly used for rendering and
          lighting (algebra, vector math, calculus), as well as basic Newtonian
          dynamics required for physics and gameplay programming.
        </p>
      </div>
      <PortfolioCarousel class="col-12" :products="portfolio" />
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

export default defineComponent({
  components: {
    ButtonWithPopover,
    PortfolioCarousel,
  },
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
          "In addition to maintaining and improving the project's codebase, I was tasked with creating map data for the University campus."
        ]
      )
    ],
  }),
  computed: {
    coverPageBlockClass() {
      return "col-12 main-page-content p-0 p-sm-4 home-intro-cover";
    },
    techExperience() {
      return {
        dotnet: {
          title: ".NET Core",
          brief: "4 years using .NET Core in a professional capacity",
          icon: require("./assets/NET_Core_Logo.png"),
        },
        vue: {
          title: "Vue.js",
          brief:
            "4 years using Vue.js in a professional capacity. Familiar with Vue 2.x, 3.x, JSX syntax, Vue CLI and TypeScript API.",
          icon: require("./assets/512px-Vue.js_Logo_2.png"),
        },
        bootstrap: {
          title: "Bootstrap",
          brief:
            "4 years using Bootstrap in a professional capacity. Solid working knowledge of the layout system and core components, as well as SCSS customization and extending functionality with custom code.",
          icon: require("./assets/Bootstrap_logo.png"),
        },
        "unit-testing": {
          title: "Testing",
          brief:
            "2 years' experience writing manual tests, unit tests using Xunit (C#) & GoogleTest (C++) as well as automated Web UI tests using Playwright.",
          img: null,
          icon: () =>
            '<div class="mx-auto"><i class="bi bi-list-check" /></div>',
        },
        azure: {
          title: "Azure",
          brief: `3 years' experience with using the Microsoft Azure platform. Knowledgeable about common tasks such as configuring & deploying app services, debugging deployed code, etc.
        Familiar with the Azure DevOps platform, Git workflow, Continuous Testing, Azure Pipelines and Azure Artifacts.`,
          icon: require("./assets/azure.png"),
        },
        chatbot: {
          title: "Conversational AI",
          brief:
            "4 years of experience developing conversational AI services (chat bots). Solid working knowledge of Microsoft's Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.",
          icon: () => '<div class="mx-auto"><i class="bi bi-robot" /></div>',
        },
      };
    },
    gameTechExperience() {
      return {
        unreal: {
          title: "Unreal Engine",
          brief:
            "1 year of using Unreal Engine 4 and 5 for small personal game projects. Familiar with both C++ and Blueprint programming, as well as basics of setting up scene lighting using Lumen.",
          icon: require("./assets/ue.png"),
        },
        unity: {
          title: "Unity",
          brief: `Familiar with using the Unity engine, having used it on-and-off since 2013, including 1 year spent on developing a small multiplayer game to completion.
          Familiar with C# programming, Photon & Netcode for GameObjects, Universal Render Pipeline, Shader Graph and HLSL.`,
          icon: require("./assets/unityLogo.png"),
        },
        opengl: {
          title: "OpenGL",
          brief:
            "Familiar with creating basic 3D renderers using the modern OpenGL spec using C++ for host code, writing GLSL shaders for simple lighting models (Gouraud, Phong), and debugging using ImGui and RenderDoc.",
          icon: require("./assets/opengl.png"),
        },
        physx: {
          title: "PhysX",
          brief:
            "Working knowledge of the NVIDIA PhysX C++ SDK. As part of University project, produced a small 3D pinball game making use of various collider types, different material properties (restitution/friction coefficients) to serve gameplay purposes, and integrated simulation with a basic OpenGL scene graph.",
          icon: require("./assets/physx.png"),
        },
      };
    },
    portfolioImages(): any {
      return Object.values(this.portfolio).map(
        (portfolioEntry: any) => portfolioEntry.img
      );
    },
  },
});
</script>