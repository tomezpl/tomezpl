<template>
  <div class="container-fluid p-0">
    <Header>{{pageTitle}}</Header>
    <div class="row min-vh-100 side-bg pt-5 tz-brand-border">
      <div class="col-md-2 col-sm-1 d-sm-block d-none" />
      <div class="col-md-8 col-sm-10 col-12"><slot></slot>></div>
      <div class="col-md-2 col-sm-1 d-sm-block d-none" />
    </div>
  </div>
</template>

<style lang="scss">
@import './css/styles.scss';
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "MasterLayout",
  components: {
    Header,
  },
  props: {
    pageTitle: {
      type: String,
      default: 'Tomasz Zając'
    }
  }
});
</script>
