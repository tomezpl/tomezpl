<template>
  <div>
    <div class="w-100 cover-text">
      <div class="text-light p-2 clearfix" id="homeIntroCoverBrief">
        <h1 class="big-text d-inline-block"><span>Tomasz Zając</span></h1>
        <h3>An experienced, self-motivated software developer</h3>
        <hr />
        <p class="fs-5">
          4 years of professional experience developing, maintaining and
          providing support on a variety of enterprise-grade Web services.
        </p>
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
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cover",
});
</script>