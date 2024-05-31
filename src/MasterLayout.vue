<template>
  <div class="container-fluid p-0 d-flex flex-row">
    <SideBar :show="isSideBarShowing" :currentPage="internalName" />
    <div class="w-100">
      <div ref="header">
        <Header
          @set-sidebar-showing="setSidebarShowing"
          :currentPage="internalName"
          :bg-alpha="currentAlpha"
        >
          <div ref="headerSlot"><slot name="headerBody" /></div>
          <template #currentPageTitle>{{ pageTitle }}</template>
        </Header>
      </div>
      <div
        id="body"
        ref="body"
        class="row min-vh-100 side-bg pt-5 tz-brand-border m-0"
      >
        <div class="col-lg-1 d-lg-block d-none" />
        <div class="col-lg-10 col-md-12 px-0 px-lg-2"><slot></slot></div>
        <div class="col-lg-1 d-lg-block d-none" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./css/styles.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "MasterLayout",
  components: {
    Header,
    SideBar,
  },
  props: {
    pageTitle: {
      type: String,
      default: "Tomasz Zając",
    },
    internalName: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    isSideBarShowing: false,
    currentAlpha: 0,
  }),
  methods: {
    setSidebarShowing(isShowing: boolean) {
      console.log(isShowing);
      this.isSideBarShowing = isShowing;
    },
    getTopBarAlpha(): number {
      const header =
        this.$refs.header !== undefined && this.$refs.header !== null
          ? (this.$refs.header as HTMLElement)
          : null;

      const headerSlot =
        ('headerBody' in this.$slots ) &&  this.$refs.headerSlot !== undefined && this.$refs.headerSlot !== null
          ? (this.$refs.headerSlot as HTMLElement)
          : null;
  
      const headerSlotHeight = headerSlot !== null ? headerSlot.offsetHeight : (header?.offsetTop || 1);
      // console.log(headerSlotHeight);
      const maxOffset =
        header !== null ? headerSlotHeight : 1;
      // console.log(`Max offset: ${maxOffset}, ${header?.offsetHeight}, ${headerSlot}`);

      return Math.max(0, Math.min(maxOffset, window.scrollY)) / maxOffset;
    },
  },
  mounted() {
    addEventListener("scroll", (ev) => {
      console.log(`${window.scrollY} vs ${(this.$refs.body as HTMLElement).offsetTop}`);
      console.log(this.getTopBarAlpha());
      this.currentAlpha = this.getTopBarAlpha();
    });
  },
});
</script>
