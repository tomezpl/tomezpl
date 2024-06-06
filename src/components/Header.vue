<template>
  <div
    class="tz-brand-gradient"
    :class="
      Object.fromEntries(
        topBarBorderClass.split(' ').map((c) => [c, !scrolledPastSlot])
      )
    "
  >
  <!-- Gap to account for the top bar -->
    <div class="pt-5"></div>
    <div class="pt-5"></div>
      <slot />
  </div>
  <div
    class="row fixed-top top-0 m-0 navbar-dark"
    :class="
      Object.fromEntries(
        topBarBorderClass.split(' ').map((c) => [c, scrolledPastSlot])
      )
    "
    :style="currentTopBarStyle"
    id="topBar"
  >
    <div :class="topBarContainerClass()">
      <!-- Sidebar toggler -->
      <div v-if="isNavShowing" :class="sidebarTogglerDummyClass()"></div>
      <div v-if="!isNavShowing" :class="sidebarTogglerDummyClass()">
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div :class="`text-md-center ms-3 ms-sm-0 ${isNavShowing ? 'align-self-start align-self-sm-center w-100' : 'align-self-center'}`">
        <!-- Brand logo -->
        <img id="tzLogoTopbar" class="mt-1 mb-2" src="../assets/tz_logo.png" />
      </div>
      <div class="navbar-brand me-0 mb-0 py-0 ms-2 ms-sm-0">
        <div class="py-2">
          <span class="w-100 mx-auto d-block text-end ms-1 ms-sm-0 fs-4">
            <!-- If the page passed a page title, render it in the top right. -->
            <slot name="currentPageTitle"></slot>
          </span>
        </div>
      </div>
    </div>
    <!-- Any custom header body that should be added underneath, if the page passed any. -->
  </div>
</template>

<style lang="scss" scoped>
@import "../css/header.scss";
</style>

<script lang="ts">
import { getNavbarClass } from "@/utils/navbar-style";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    currentPage: {
      type: String,
      default: "",
    },
    bgAlpha: {
      type: Number,
      default: 1,
    },
    isNavShowing: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const navCollapsible = document.getElementById("navbarContent");
    navCollapsible?.addEventListener("show.bs.collapse", this.toggleNav);

    navCollapsible?.addEventListener("hide.bs.collapse", this.toggleNav);
  },
  methods: {
    toggleNav(ev: Event) {
      if (ev !== undefined && ev !== null) {
        ev.preventDefault();
      }

      this.$emit("setSidebarShowing", !this.isNavShowing);
    },

    rgbaFromHex(hex: string, alpha: number): string {
      if (alpha === null || alpha === undefined) {
        alpha = 1.0;
      }

      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5), 16);

      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },

    topBarContainerClass() {
      return `col-12 d-flex flex-nowrap justify-content-sm-between navbar py-0 pe-4 ${this.isNavShowing ? "" : "ps-4"}`;
    },

    sidebarTogglerDummyClass() {
      return getNavbarClass(this.isNavShowing);
    },
  },
  data() {
    return {
      path: window.location.pathname,
      currentTopBarStyle: { background: "", "backdrop-filter": "blur(0px)" },
      scrolledPastSlot: false,
    };
  },
  computed: {
    topBarBorderClass() {
      return "border-2 border-bottom border-lightpink";
    },
  },
  watch: {
    bgAlpha(current) {
      this.scrolledPastSlot = current >= 1.0;

      const styles = {
        brandGradientBottomColor: "#BA6781",
        brandGradientBottomAlpha: 0.7,
        brandGradientTopColor: "#744b79",
        brandGradientTopAlpha: 1,
      };

      this.currentTopBarStyle["backdrop-filter"] = `blur(calc(5px * ${this.bgAlpha}))`;

      this.currentTopBarStyle.background = `linear-gradient(0deg, ${this.rgbaFromHex(
        styles.brandGradientBottomColor,
        styles.brandGradientBottomAlpha * this.bgAlpha
      )}, ${this.rgbaFromHex(
        styles.brandGradientTopColor,
        styles.brandGradientTopAlpha * this.bgAlpha
      )})`;
    },
  },
});
</script>