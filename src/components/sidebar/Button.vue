<template>
  <a
    :class="getButtonClass(alias || target)"
    :aria-current="getButtonAriaCurrent(alias || target)"
    :href="buttonHref"
  >
    <div>
      {{ title }}
    </div>
    <div
      class="btn-tznav-icon d-inline-block pe-0 py-auto align-top ms-n4 clearfix"
    >
      <i :class="iconClass"></i>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "../../css/header.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBarButton",
  props: {
    alias: {
      type: String,
      required: false,
    },
    target: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
    },
    currentPage: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    path: window.location.pathname,
    isNavShowing: false,
  }),
  methods: {
    getButtonClass(targetPage: string): string {
      const baseClass =
        "nav-link btn-tznav text-center fw-bold shadow py-auto px-0 d-flex flex-row";

      if (targetPage === this.currentPage) {
        return `${baseClass} active`;
      } else {
        return baseClass;
      }
    },
    getButtonAriaCurrent(targetPage: string): "page" | "false" {
      if (targetPage === this.currentPage) {
        return "page";
      } else {
        return "false";
      }
    },
  },
  computed: {
    iconClass(): string {
      return `${this.icon} float-end`;
    },
    buttonHref(): string {
      return this.url || `${this.target}.html`;
    },
  },
});
</script>