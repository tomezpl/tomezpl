<template>
  <div>
    <div class="w-100 cover-text">
      <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
        <h1 class="big-text d-inline-block"><span>Tomasz Zając</span></h1>
        <h3>An experienced, self-motivated software developer</h3>
        <hr />
        <p class="fs-5">
          4 years of professional experience developing, maintaining and
          providing support on a variety of enterprise-grade Web services. Passionate about working on small videogame projects in my free time.
        </p>

        <div class="w-100 mt-5 mb-3 d-flex flex-row justify-content-center social-links-container">
            <a target="_blank" href="https://github.com/tomezpl">
              <img src="@/assets//GitHub-Mark-Light-64px.png" />
            </a>
            <a target="_blank" href="/assets/Tomasz Zając - CV Public.pdf">
              <i class="bi bi-file-earmark-person-fill" style="font-size: 55px; transform: translate(0, -3px); height: 80px;"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/tomzajac/">
              <img src="@/assets/linkedin.png" />
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../css/values.scss";
@use "sass:map";

$imagePaths: map-merge(
  $imagePaths,
  (
    "portrait-image": "../../assets/portrait.png",
  )
);

@import "../../css/home.scss";
@import "../../css/cover.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cover",
});
</script>