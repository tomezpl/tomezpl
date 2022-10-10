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
  <div class="row sticky-top">
    <div
      class="
        navbar
        p-0
        px-4
        navbar-dark
        tz-brand-gradient
        border-2 border-bottom border-lightpink
      "
    >
      <div class="col-2">
        <button
          class="navbar-toggler ms-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-8 text-center">
        <img id="tzLogoTopbar" class="mt-1 mb-2" src="../assets/tz_logo.png" />
      </div>
      <div class="navbar-brand col-2 me-0 mb-0 py-0">
        <div class="py-2">
          <span class="w-100 mx-auto d-block text-center fs-4">
            <slot></slot>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 position-fixed"
  >
    <nav :class="navbarContentClasses" id="navbarContent">
      <div class="d-flex flex-column h-100">
        <div class="mb-5">
          <ul class="navbar-nav mb-2 mb-md-0 vertical-navbar-widthfix">
            <li class="nav-item ps-1 my-md-0 my-1 mt-2 py-2 ms-2">
              <a
                :class="getButtonClass('home')"
                :aria-current="getButtonAriaCurrent('home')"
                href="index.html"
                >Home</a
              >
              <div
                class="
                  btn-tznav-icon
                  d-inline-block
                  pe-0
                  py-auto
                  align-top
                  ms-n4
                  shadow
                  clearfix
                "
              >
                <i class="bi bi-house float-end"></i>
              </div>
            </li>
            <li class="nav-item ps-1 my-md-0 my-1 py-2 ms-2">
              <a
                :class="getButtonClass('blog')"
                :aria-current="getButtonAriaCurrent('blog')"
                href="blog.html"
                >Blog</a
              >
              <div
                class="
                  btn-tznav-icon
                  d-inline-block
                  pe-0
                  py-auto
                  align-top
                  ms-n4
                  shadow
                  clearfix
                "
              >
                <i class="bi bi-journal-bookmark float-end"></i>
              </div>
            </li>
            <li class="nav-item ps-1 my-md-0 my-1 py-2 ms-2">
              <a
                :class="getButtonClass('showcase')"
                :aria-current="getButtonAriaCurrent('showcase')"
                href="showcase.html"
                >Showcase</a
              >
              <div
                class="
                  btn-tznav-icon
                  d-inline-block
                  pe-0
                  py-auto
                  align-top
                  ms-n4
                  shadow
                  clearfix
                "
              >
                <i class="bi bi-code float-end"></i>
              </div>
            </li>
            <li class="nav-item ps-1 my-md-0 my-1 py-2 ms-2">
              <a
                :class="getButtonClass('about')"
                :aria-current="getButtonAriaCurrent('about')"
                href="about.html"
                >About</a
              >
              <div
                class="
                  btn-tznav-icon
                  d-inline-block
                  pe-0
                  py-auto
                  align-top
                  ms-n4
                  shadow
                  clearfix
                "
              >
                <i class="bi bi-person float-end"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-fill">
          <div class="h-100 text-center text-light">
            <div class="h-50"></div>
            <p>Tomasz Zając</p>
            <p class="pb-5">&copy; 2022</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '../css/header.scss';
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
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

      this.isNavShowing = !this.isNavShowing;
    },
    getButtonClass(targetPage: string): string {
      const baseClass =
        "nav-link btn-tznav text-center fw-bold shadow py-auto px-0 d-inline-block";

      if (targetPage === this.currentPage) {
        return `${baseClass} active`;
      } else {
        return baseClass;
      }
    },
    getButtonAriaCurrent(targetPage: string): string {
      if (targetPage === this.currentPage) {
        return "page";
      } else {
        return "false";
      }
    },
  },
  computed: {
    navbarContentClasses() {
      let classToApply = "tz-navbar-hidden";
      if (this.isNavShowing === true) {
        classToApply = "tz-navbar-shown";
      }
      return `navbar-dark p-0 tz-brand-gradient-sub ${classToApply} border-3 border-end shadow-lg border-lightpink overflow-auto`;
    },
  },
  data() {
    return {
      path: window.location.pathname,
      isNavShowing: false,
    };
  },
  props: {
    currentPage: {
      type: String,
      default: "",
    },
  },
});
</script>