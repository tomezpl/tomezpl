<template>
  <div class="container-fluid p-0">
    <SideBar :show="isSideBarShowing" :currentPage="internalName" />
    <Header @set-sidebar-showing="setSidebarShowing" :currentPage="internalName">{{pageTitle}}</Header>
    <div class="row min-vh-100 side-bg pt-5 tz-brand-border m-0">
      <div class="col-lg-1 d-lg-block d-none" />
      <div class="col-lg-10 col-md-12 px-0 px-lg-2"><slot></slot></div>
      <div class="col-lg-1 d-lg-block d-none" />
    </div>
  </div>
</template>

<style lang="scss">
@import './css/styles.scss';
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "MasterLayout",
  components: {
    Header,
    SideBar
  },
  props: {
    pageTitle: {
      type: String,
      default: 'Tomasz Zając'
    },
    internalName: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isSideBarShowing: false
  }),
  methods: {
    setSidebarShowing(isShowing : boolean) {
      console.log(isShowing);
      this.isSideBarShowing = isShowing;
    }
  }
});
</script>
