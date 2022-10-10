<template>
  <div class="col-12 main-page-content p-1 p-sm-4 home-intro-cover">
    <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
      <div class="float-end ms-3" id="homeIntroCoverPortrait">
        <!--<img
          class="float-end ms-3"
          id="homeIntroCoverPortrait"
          src="./assets/glowy_portrait.png"
        />-->
      </div>
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

<style lang="scss" scoped>
@import "./css/home.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>