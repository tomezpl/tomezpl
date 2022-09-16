<template>
  <div class="container-fluid p-0">
    <div class="row navbar py-0 navbar-expand-md navbar-dark bg-info sticky-top">
      <h1 class="navbar-brand col-5 col-md-2 me-0 mb-0 h-100 py-0">
        <div class="col-12 tz-brand-gradient text-dark py-4">
          <span class="w-100 mx-auto d-block text-center fs-4">
            Tomasz Zając
          </span>
        </div>
      </h1>
      <button
        class="navbar-toggler col-2 me-2 my-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-0 my-2" id="navbarContent">
        <ul class="navbar-nav col-md-8 mb-2 mb-md-0">
          <li class="nav-item col-md-3 px-3 my-md-0 my-1 mt-2">
            <a class="btn btn-outline-secondary bg-gradient border-3 nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item col-md-3 px-3 my-md-0 my-1">
            <a class="btn btn-outline-secondary bg-gradient border-3 nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item col-md-3 px-3 my-md-0 my-1">
            <a class="btn btn-outline-secondary bg-gradient border-3 nav-link" href="#">Showcase</a>
          </li>
          <li class="nav-item col-md-3 px-3 my-md-0 my-1">
            <a class="btn btn-outline-secondary bg-gradient border-3 nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row min-vh-100">
      <div class="col-md-2 col-sm-1 d-sm-block d-none bg-gradient"></div>
      <div class="col-md-8 col-sm-10 col-12 p-4 bg-dark border border-top-0 border-2 border-dark">
        <div class="col-7 bg-light p-2">
          <h1>Tomasz Zając</h1>
          <h2>Software engineer</h2>
        </div>
      </div>
      <div class="col-md-2 col-sm-1 d-sm-block d-none bg-gradient"></div>
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