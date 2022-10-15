<template>
  <div :class="coverPageBlockClass">
    <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
      <div class="float-end ms-3" id="homeIntroCoverPortrait" />
      <h1 class="big-text">Tomasz Zając</h1>
      <h3>An experienced, self-motivated software developer</h3>
      <p class="fs-5">
        4 years of professional experience developing a variety of innovative
        digital services and maintaining large legacy codebases to support
        ongoing key business operations.
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
          <!-- Web technologies will go here -->
          <!-- ASP .NET Core -->
          <ButtonWithPopover popover-title=".NET Core" :popover-text="techExperience['dotnet']" :img-src="require('./assets/NET_Core_Logo.png')" />
          <!-- Vue.js -->
          <ButtonWithPopover popover-title="Vue.js" :popover-text="techExperience['vue']" :img-src="require('./assets/512px-Vue.js_Logo_2.png')" />
          <!-- Bootstrap -->
          <ButtonWithPopover popover-title="Bootstrap" :popover-text="techExperience['bootstrap']" :img-src="require('./assets/Bootstrap_logo.png')" />
          <!-- React JSX -->
          <ButtonWithPopover popover-title="Testing" :popover-text="techExperience['unit-testing']"><div class="mx-auto"><i class="bi bi-list-check"></i></div></ButtonWithPopover>
          <!-- Azure -->
          <ButtonWithPopover popover-title="Azure" :popover-text="techExperience['azure']" :img-src="require('./assets/azure.png')" />
          <!-- AI -->
          <ButtonWithPopover popover-title="Conversational AI" :popover-text="techExperience['chatbot']"><div class="mx-auto"><i class="bi bi-robot"></i></div></ButtonWithPopover>
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
import { defineComponent } from "vue";
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
        dotnet: '4 years using .NET Core in a professional capacity',
        vue: '4 years using Vue.js in a professional capacity. Familiar with Vue 2.x, 3.x, JSX syntax, Vue CLI and TypeScript API.',
        bootstrap: '4 years using Bootstrap in a professional capacity. Solid working knowledge of the layout system and core components, as well as SCSS customization and extending functionality with custom code.',
        'unit-testing': '2 years\' experience writing manual tests, unit tests using Xunit (C#) & GoogleTest (C++) as well as automated Web UI tests using Playwright.',
        azure: `3 years' experience with using the Microsoft Azure platform. Knowledgeable about common tasks such as configuring & deploying app services, debugging deployed code, etc.
        Familiar with the Azure DevOps platform, Git workflow, Continuous Testing, Azure Pipelines and Azure Artifacts.`,
        chatbot: '4 years of experience developing conversational AI services (chat bots). Solid working knowledge of Microsoft\'s Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.'
      };
    }
  },
});
</script>