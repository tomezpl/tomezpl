<template>
  <div
    class="
      col-12
      main-page-content
      p-1
      p-sm-4
      home-intro-cover
    "
  >
    <div
      class="text-light p-2 clearfix"
      id="homeIntroCoverBrief"
    >
      <img class="float-end ms-3" style="max-height: 15rem; min-height: 8rem" src="./assets/glowy_portrait.png"/>
      <h1 class="big-text">Tomasz Zając</h1>
      <h4>
        An experienced, self-motivated software developer, with a wide array of
        skills ranging from Web API programming to implementing
        interaction-heavy UI systems, graphics rendering and physics simulation.
        I focus on delivering the best product possible, promote good practice
        and aim to foster a friendly &amp; helpful atmosphere while working as
        part of a team.
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./css/home.scss";

export default defineComponent({
  name: "Home",
});
</script>