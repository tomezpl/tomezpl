<template>
  <button
    ref="btn"
    data-bs-toggle="popover"
    :title="popoverTitle"
    :data-bs-content="popoverText"
    data-bs-trigger="manual"
    container="body"
    type="button"
    class="btn flex-fill bg-gradient"
    :onmouseout="mouseLeftPopover"
    :onblur="blurPopover"
    :onfocus="focusPopover"
    :onmouseover="showPopover"
  >
    <slot v-if="imgSrc === null || imgSrc === undefined" :onmouseover="showPopover"></slot>
    <img v-else :src="imgSrc" :onmouseover="showPopover" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Popover } from 'bootstrap';
import { hide } from "@popperjs/core";

export default defineComponent({
  name: "ButtonWithPopover",
  props: {
    imgSrc: {
      type: String,
      default: null,
    },
    popoverTitle: {
      type: String,
      default: null,
    },
    popoverText: {
      type: String,
      default: null,
    }
  },
  data: () => ({
    popover: {},
    focused: false
  }),
  methods: {
    blurPopover() {
        this.focused = false;
        this.hidePopover();
    },
    focusPopover() {
        this.focused = true;
        this.showPopover();
    },
    mouseLeftPopover(ev: MouseEvent) {
        // Ignore mouseout for child nodes.
        if((ev.relatedTarget as Node === this.$refs.btn as HTMLButtonElement) || ((this.$refs.btn as HTMLButtonElement).contains(ev.relatedTarget as Node) === false)) {
            this.hidePopover();
        } 
    },
    hidePopover() {
        if(this.focused === false) {
            (this.popover as Popover).hide();
        }
    },
    showPopover() {
        (this.popover as Popover).show();
    }
  },
  mounted() {
    this.popover = new Popover(this.$refs.btn as HTMLButtonElement);
  }
});
</script>