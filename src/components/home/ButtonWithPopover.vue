<template>
  <button
    ref="btn"
    data-bs-toggle="popover"
    :title="popoverTitle"
    :data-bs-content="popoverText"
    data-bs-custom-class="tech-experience-popover"
    data-bs-trigger="manual"
    type="button"
    class="btn flex-fill bg-gradient"
    :onmouseout="mouseLeftPopover"
    :onblur="blurPopover"
    :onfocus="focusPopover"
    :onmouseover="showPopover"
  >
    <div class="w-100" v-if="iconIsCustomFunction" v-html="icon()" />
    <img v-else :src="icon" :onmouseover="showPopover" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Popover } from "bootstrap";

export default defineComponent({
  name: "ButtonWithPopover",
  props: {
    icon: null,
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
    focused: false,
    hidden: true
  }),
  computed: {
    iconIsCustomFunction() : boolean {
      return this.icon instanceof Function;
    }
  },
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
      console.log(ev);
      // Ignore mouseout for child nodes.
      if (
        (ev.target as Node) === (this.$refs.btn as HTMLButtonElement) &&
        (this.$refs.btn as HTMLButtonElement).contains(
          ev.relatedTarget as Node
        ) === false
      ) {
        this.hidePopover();
      }
    },
    hidePopover() {
      if (this.focused === false) {
        this.focused = false;
        console.log('hide');
        (this.popover as Popover).hide();
        this.hidden = true;
      }
    },
    showPopover() {
      console.log('show');
      if(this.hidden === true) {
        (this.popover as Popover).show();
        this.hidden = false;
      }
    },
  },
  mounted() {
    this.popover = new Popover(this.$refs.btn as HTMLButtonElement);
  },
});
</script>