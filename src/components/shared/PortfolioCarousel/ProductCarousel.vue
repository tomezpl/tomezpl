<template>
  <div class="col-7 carousel slide d-inline-block" ref="carousel">
    <div class="carousel-inner">
      <div
        v-for="n in product.images.length"
        :key="n - 1"
        :ref="`slide${n - 1}`"
        class="carousel-item"
      >
        <div
          class="d-block w-100 tz-portfolio-product-slide-image"
          :style="getInlineStyleForImage(n - 1)"
        >
          <div class="h-100 clearfix">
            <div
              class="
                float-start
                col-1
                h-100
                tz-portfolio-product-slide-image-button
                d-flex
                align-items-center
              "
            >
              <div class="mx-auto">
                <a href="#" @click="prevImageSlide">
                  <i
                    :class="`bi ${prevButtonIcon} text-light`"
                    @mouseenter="() => switchPrevButtonHover(true)"
                    @mouseleave="() => switchPrevButtonHover(false)"
                  ></i>
                </a>
              </div>
            </div>
            <div
              class="
                float-end
                col-1
                h-100
                tz-portfolio-product-slide-image-button
                d-flex
                align-items-center
              "
            >
              <div class="mx-auto">
                <a href="#" @click="nextImageSlide">
                  <i
                    :class="`bi ${nextButtonIcon} text-light`"
                    @mouseenter="() => switchNextButtonHover(true)"
                    @mouseleave="() => switchNextButtonHover(false)"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-5 d-inline-block ps-3 align-top">
    <h1>{{ product.title }}</h1>
    <p>
      {{ product.brief }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/product_slide.scss";
</style>

<script lang="ts">
import { ProductSlide } from "@/types/ProductSlide";
import { defineComponent } from "vue";
import { Carousel } from 'bootstrap';

export default defineComponent({
  name: "ProductCarousel",
  props: {
    product: {
      type: ProductSlide,
      default: null,
    },
  },
  data: () => ({
    currentImageSlideIndex: 0,
    prevButtonIcon: "",
    nextButtonIcon: "",
    carousel: null
  }),
  beforeMount() {
    this.switchNextButtonHover(false);
    this.switchPrevButtonHover(false);
  },
  mounted() {
    if(this.$refs.slide0 !== null && this.$refs.slide0 !== undefined) {
      (this.$refs.slide0 as HTMLElement).className += " active";
    }
    this.carousel = new Carousel(this.$refs.carousel as HTMLDivElement) as any;
    (this.carousel as any).pause();
  },
  methods: {
    prevImageSlide(ev : Event) {
      (this.carousel as any).prev();
      (this.carousel as any).pause();
        ev.preventDefault();
    },
    nextImageSlide(ev : Event) {
      (this.carousel as any).next();
      (this.carousel as any).pause();
        ev.preventDefault();
    },
    getCarouselItemClass(imageIndex: number) {
      let baseClass = "carousel-item";

      if (imageIndex === this.currentImageSlideIndex) {
        baseClass += " active";
      }

      return baseClass;
    },
    getInlineStyleForImage(imageIndex: number) {
      return `background-image: url('${this.product.images[imageIndex]}')`;
    },
    switchNextButtonHover(isHovered: boolean) {
      if (isHovered === true) {
        this.nextButtonIcon = "bi-arrow-right-circle-fill";
      } else {
        this.nextButtonIcon = "bi-arrow-right-circle";
      }
    },
    switchPrevButtonHover(isHovered: boolean) {
      if (isHovered === true) {
        this.prevButtonIcon = "bi-arrow-left-circle-fill";
      } else {
        this.prevButtonIcon = "bi-arrow-left-circle";
      }
    },
  },
});
</script>