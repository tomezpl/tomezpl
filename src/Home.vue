<template>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
      <div class="float-end ms-3" id="homeIntroCoverPortrait" />
      <h1 class="big-text">Tomasz Zając</h1>
      <h3>An experienced, self-motivated software developer</h3>
      <p class="fs-5">
        4 years of professional experience developing, maintaining and providing support on a variety of enterprise-grade Web services.
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
            In my career, I have been responsible for not only developing new, innovative solutions,
            such as conversational chatbots and interactive navigation guides, but also maintaining legacy systems supporting key business operations
            and developing processes scalable to large volumes of data.
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
          <ButtonWithPopover :key="key" v-for="(tech, key) in techExperience" :popover-title="tech.title" :popover-text="tech.brief" :icon="tech.icon"></ButtonWithPopover>
          <!-- Web technologies will go here -->
        </div>
      </div>
      <p class="fs-5">
        In my personal projects, however, I often challenge myself to learning
        completely different areas, such as graphics rendering and physics
        simulation in a game programming context.
      </p>
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
import { defineComponent, h } from "vue";
import ButtonWithPopover from "./components/home/ButtonWithPopover.vue";

export default defineComponent({
  components: {
    ButtonWithPopover,
  },
  name: "Home",
  computed: {
    coverPageBlockClass() {
      return "col-12 main-page-content p-1 p-sm-4 home-intro-cover";
    },
    techExperience() {
      return {
        dotnet: {
          title: '.NET Core',
          brief: '4 years using .NET Core in a professional capacity',
          icon: require('./assets/NET_Core_Logo.png')
        },
        vue: {
          title: 'Vue.js',
          brief: '4 years using Vue.js in a professional capacity. Familiar with Vue 2.x, 3.x, JSX syntax, Vue CLI and TypeScript API.',
          icon: require('./assets/512px-Vue.js_Logo_2.png')
        },
        bootstrap: {
          title: 'Bootstrap',
          brief: '4 years using Bootstrap in a professional capacity. Solid working knowledge of the layout system and core components, as well as SCSS customization and extending functionality with custom code.',
          icon: require('./assets/Bootstrap_logo.png')
        },
        'unit-testing': {
          title: 'Testing',
          brief: '2 years\' experience writing manual tests, unit tests using Xunit (C#) & GoogleTest (C++) as well as automated Web UI tests using Playwright.',
          img: null,
          icon: () => '<div class="mx-auto"><i class="bi bi-list-check" /></div>'
        },
        azure: {
          title: 'Azure',
          brief: `3 years' experience with using the Microsoft Azure platform. Knowledgeable about common tasks such as configuring & deploying app services, debugging deployed code, etc.
        Familiar with the Azure DevOps platform, Git workflow, Continuous Testing, Azure Pipelines and Azure Artifacts.`,
          icon: require('./assets/azure.png')
        },
        chatbot: { 
          title: 'Conversational AI',
          brief: '4 years of experience developing conversational AI services (chat bots). Solid working knowledge of Microsoft\'s Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.',
          icon: () => '<div class="mx-auto"><i class="bi bi-robot" /></div>'
        }
      };
    }
  }
});
</script>