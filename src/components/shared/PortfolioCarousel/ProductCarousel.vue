<template>
  <div class="col-7 carousel slide d-inline-block">
    <div class="carousel-inner">
      <div
        v-for="n in product.images.length"
        :key="n - 1"
        :ref="`slide${n - 1}`"
        :class="getCarouselItemClass(n - 1)"
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
  }),
  beforeMount() {
    this.switchNextButtonHover(false);
    this.switchPrevButtonHover(false);
  },
  methods: {
    prevImageSlide(ev : Event) {
      if (--this.currentImageSlideIndex < 0) {
        this.currentImageSlideIndex = this.product.images.length - 1;
      }
      
      if(ev !== undefined && ev !== null) {
        ev.preventDefault();
      }
    },
    nextImageSlide(ev : Event) {
      if (++this.currentImageSlideIndex >= this.product.images.length) {
        this.currentImageSlideIndex = 0;
      }

      if(ev !== undefined && ev !== null) {
        ev.preventDefault();
      }
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