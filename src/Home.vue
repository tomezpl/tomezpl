<template>
  <div class="container-fluid p-0">
    <div class="row sticky-top">
      <div class="navbar p-0 navbar-expand-md navbar-dark tz-brand-gradient">
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
        <div class="collapse navbar-collapse p-0" id="navbarContent">
          <ul class="navbar-nav mb-2 mb-md-0">
            <li class="nav-item px-3 my-md-0 my-1 mt-2 py-2">
              <a class="nav-link active btn-tznav text-center fw-bold shadow-sm px-1" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item px-3 my-md-0 my-1 py-2">
              <a class="nav-link btn-tznav text-center fw-bold shadow-sm px-1" href="#">Blog</a>
            </li>
            <li class="nav-item px-3 my-md-0 my-1 py-2">
              <a class="nav-link btn-tznav text-center fw-bold shadow-sm px-1" href="#">Showcase</a>
            </li>
            <li class="nav-item px-3 my-md-0 my-1 py-2">
              <a class="nav-link btn-tznav text-center fw-bold shadow-sm px-1" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row min-vh-100 bg-gradient pt-5">
      <div class="col-md-2 col-sm-1 d-sm-block d-none"></div>
      <div
        class="
          col-md-8 col-sm-10 col-12
          p-4
          bg-dark
          border border-top-0 border-2 border-dark
        "
      >
        <div class="col-7 bg-light p-2">
          <h1>Tomasz Zając</h1>
          <h2>Software engineer</h2>
        </div>
      </div>
      <div class="col-md-2 col-sm-1 d-sm-block d-none"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "css/styles.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>