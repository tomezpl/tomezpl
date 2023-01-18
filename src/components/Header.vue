<!--<template>
    <div class="row pt-3 d-flex">
        <div class="col-3 col-sm-2 pb-3 text-center align-self-center">
            <img src="../assets/tz_logo.png" class="img-fluid tz-logo" />
        </div>
        <div class="col d-none d-sm-block">

        </div>
        <div class="col-xl-5 col-9 col-sm-8 pb-3 text-center align-self-center">
            <h1 class="align-middle">
                Tomasz Zaj&#261;c - devblog
            </h1>
        </div>
        <div class="col-xl-4 col-12 px-0 align-self-end">
            <ul class="nav justify-content-end text-uppercase fw-bold">
                <li class="nav-item">
                    <a class="nav-link w-100 link-light" v-bind:class="{ active: path === '/' || path === '/index.html'}" :aria-current="path === '/' || path === '/index.html' ? 'page' : ''" href="/">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-light" v-bind:class="{ active: path === '/about.html'}" :aria-current="path === '/about.html' ? 'page' : ''" href="/about.html">
                        About me
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-light" v-bind:class="{ active: path === '/showcase.html'}" :aria-current="path === '/showcase.html' ? 'page' : ''" href="/showcase.html">
                        Showcase
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
-->

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
    class="row fixed-top top-0 m-0 navbar-dark tz-blur-behind"
    :class="
      Object.fromEntries(
        topBarBorderClass.split(' ').map((c) => [c, scrolledPastSlot])
      )
    "
    :style="currentTopBarStyle"
    id="topBar"
  >
    <div class="col-12 navbar p-0 px-4">
      <!-- Sidebar toggler -->
      <div class="col-3">
        <button
          class="navbar-toggler ms-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-6 text-center">
        <!-- Brand logo -->
        <img id="tzLogoTopbar" class="mt-1 mb-2" src="../assets/tz_logo.png" />
      </div>
      <div class="navbar-brand col-3 me-0 mb-0 py-0">
        <div class="py-2">
          <span class="w-100 mx-auto d-block text-center fs-4">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  mounted() {
    const navCollapsible = document.getElementById("navbarContent");
    navCollapsible?.addEventListener("show.bs.collapse", this.toggleNav);

    navCollapsible?.addEventListener("hide.bs.collapse", this.toggleNav);

    console.log("current alpha " + this.bgAlpha);
  },
  methods: {
    toggleNav(ev: Event) {
      if (ev !== undefined && ev !== null) {
        ev.preventDefault();
      }

      this.isNavShowing = !this.isNavShowing;

      this.$emit("setSidebarShowing", this.isNavShowing);
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
  },
  computed: {
    topBarBorderClass() {
      return "border-2 border-bottom border-lightpink";
    },
  },
  data() {
    return {
      path: window.location.pathname,
      isNavShowing: false,
      currentTopBarStyle: { background: "" },
      scrolledPastSlot: false,
    };
  },
  props: {
    currentPage: {
      type: String,
      default: "",
    },
    bgAlpha: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    bgAlpha(current, prev) {
      console.log("alpha: " + current);

      this.scrolledPastSlot = current >= 1.0;

      const styles = {
        brandGradientBottomColor: "#BA6781",
        brandGradientBottomAlpha: 0.7,
        brandGradientTopColor: "#744b79",
        brandGradientTopAlpha: 1,
      };

      this.currentTopBarStyle.background = `linear-gradient(0deg, ${this.rgbaFromHex(
        styles.brandGradientBottomColor,
        styles.brandGradientBottomAlpha * this.bgAlpha
      )}, ${this.rgbaFromHex(
        styles.brandGradientTopColor,
        styles.brandGradientTopAlpha * this.bgAlpha
      )})`;
      //this.currentTopBarStyle.background = 'red';

      console.log(this.currentTopBarStyle.background);
    },
  },
});
</script>