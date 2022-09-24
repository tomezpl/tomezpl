<template>
  <div class="col-12 main-page-content p-4 home-intro-cover">
    <div class="clearfix">
    <div class="col-lg-5 col-12 float-end text-light">Test</div>
    <div class="col-lg-7 col-12 text-light p-2 float-start" id="home-intro-cover-brief">
      <h1>Tomasz Zając</h1>
      <h4>An experienced, self-motivated software developer, with a wide array of skills ranging from Web API programming to implementing interaction-heavy UI systems, graphics rendering and physics simulation. I focus on delivering the best product possible, promote good practice and aim to foster a friendly &amp; helpful atmosphere while working as part of a team.</h4>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import './css/home.scss';

export default defineComponent({
  name: "Home",
});
</script>