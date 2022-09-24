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
        navbar-expand-md navbar-dark
        tz-brand-gradient tz-brand-border
        border-2 border-bottom
        shadow-lg
      "
    >
      <div class="navbar-brand col-10 col-md-2 me-0 mb-0 py-0">
        <div class="py-2">
          <span class="w-100 mx-auto d-block text-center fs-4">
            Tomasz Zając
          </span>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav class="collapse navbar-collapse p-0" id="navbarContent">
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item px-3 my-md-0 my-1 mt-2 py-2">
            <a
              class="nav-link active btn-tznav text-center fw-bold shadow px-1 py-0"
              aria-current="page"
              href="#"
              >Home</a
            >
          </li>
          <li class="nav-item px-3 my-md-0 my-1 py-2">
            <a
              class="nav-link btn-tznav text-center fw-bold shadow px-1 py-0"
              href="#"
              >Blog</a
            >
          </li>
          <li class="nav-item px-3 my-md-0 my-1 py-2">
            <a
              class="nav-link btn-tznav text-center fw-bold shadow px-1 py-0"
              href="#"
              >Showcase</a
            >
          </li>
          <li class="nav-item px-3 my-md-0 my-1 py-2">
            <a
              class="nav-link btn-tznav text-center fw-bold shadow px-1 py-0"
              href="#"
              >About</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      path: window.location.pathname,
    };
  },
});
</script>