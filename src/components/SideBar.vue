<template>
  <div :class="sideBarContainerClass">
    <nav :class="navbarContentClasses" id="navbarContent">
      <div class="d-flex flex-column h-100 pt-5">
        <div class="mb-5">
          <ul class="navbar-nav mb-2 mb-md-0 vertical-navbar-widthfix">
            <li
              class="nav-item ps-1 my-md-0 my-1 py-2 ms-2"
              v-for="button in routes"
              :key="button.target"
            >
              <SideBarButton
                :currentPage="currentPage"
                :target="button.target"
                :alias="button.alias"
                :title="button.title"
                :icon="button.icon"
              ></SideBarButton>
            </li>
          </ul>
      </div>
      <div class="flex-fill">
        <div class="h-100 text-center text-light">
            <div class="h-50"></div>
            <p>Tomasz Zając</p>
            <p class="pb-5">&copy; {{ currentYear }}</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "../css/header.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import SideBarButton from "./sidebar/Button.vue";
import type { SideBarRoute } from "@/types/sidebar-route";

export default defineComponent({
  name: "SideBar",
  props: {
    currentPage: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    path: window.location.pathname,
    isNavShowing: false,
    routes: new Array<SideBarRoute>(
      ...[
        {
          title: "Home",
          target: "index",
          alias: "home",
          icon: "bi bi-house",
        },
        {
          title: "Blog",
          target: "blog",
          icon: "bi bi-journal-bookmark float-end"
        },
        {
          title: "Showcase",
          target: "showcase",
          icon: "bi bi-code",
        },
        {
          title: "About",
          target: "about",
          icon: "bi bi-person"
        }
      ]
    ),
  }),
  components: {
    SideBarButton,
  },
  methods: {
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
    currentYear(): number {
        return new Date(Date.now()).getFullYear();
    },
    navbarContentClasses() {
      let classToApply = "tz-navbar-hidden";
      if (this.show === true) {
        classToApply = "tz-navbar-shown";
      }
      return `navbar-dark p-0 tz-brand-gradient-sub ${classToApply} border-3 border-end shadow-lg border-lightpink overflow-auto pt-5`;
    },
    sideBarContainerClass() {
      const baseClass =
        "col-8 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-2 fixed-top start-0";
      if (this.show !== true) {
        return `${baseClass} hide`;
      } else {
        return baseClass;
      }
    },
  },
});
</script>