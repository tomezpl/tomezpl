<template>
  <div class="col-12">
    <div ref="portfolioCarousel" id="portfolioCarousel" class="col-12">
      <div class="carousel-inner">
        <div
          v-for="n in products.length"
          :ref="`product${n - 1}`"
          class="carousel-item"
          :key="n - 1"
        >
          <div :ref="`portfolioCarouselProduct${n-1}`" :id="`portfolioCarouselProduct${n-1}`" class="col-7">
            <div class="carousel-inner">
              <div
                :ref="`product${n - 1}_slide${m - 1}`"
                v-for="m in getProduct(n - 1).images.length"
                :key="m - 1"
                class="carousel-item"
              >
                <img
                  :src="getCarouselSlideImage(n - 1, m - 1)"
                  class="d-block w-100"
                />
              </div>
            </div>
            <a
        class="carousel-control-prev"
        :data-bs-target="`#portfolioCarouselProduct${n-1}`"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        :data-bs-target="`#portfolioCarouselProduct${n-1}`"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
          </div>
          <div class="col-5">
            <h1>{{ getProduct(n - 1).title }}</h1>
            <p>
              {{ getProduct(n - 1).brief }}
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        data-bs-target="#portfolioCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        data-bs-target="#portfolioCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductSlide } from "../../types/ProductSlide";

export default defineComponent({
  name: "PortfolioCarousel",
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasProducts(): boolean {
      return (
        this.products instanceof Array &&
        this.products !== undefined &&
        this.products !== null
      );
    },
  },
  data: () => ({
    currentSlide: 0,
    currentProduct: 0,
  }),
  mounted() {
    console.log(this.$refs);
    this.products.forEach((val, productIndex) => {
      (val as ProductSlide).images.forEach((val, slideIndex) => {
        (this.$refs[`product${productIndex}_slide${slideIndex}`] as HTMLElement).addEventListener(
          "slid.bs.carousel",
          () => {this.currentSlide = slideIndex; this.currentProduct = productIndex; }
        );
      });
    });
    const firstProduct = this.$refs["product0"];
    console.log(firstProduct);
    if (firstProduct !== null && firstProduct !== undefined) {
      const firstProductSlide = this.$refs["product0_slide0"];
      if (firstProductSlide !== null && firstProductSlide !== undefined) {
        (firstProductSlide as HTMLElement).classList.add("active");
      }
      (firstProduct as HTMLElement).classList.add("active");
    }

    (this.$refs.portfolioCarousel as HTMLElement).classList.add('carousel', 'slide');
    (this.$refs.portfolioCarousel as HTMLElement).setAttribute('data-bs-ride', 'carousel');
    this.products.forEach((val, index) => {
      (this.$refs[`portfolioCarouselProduct${index}`] as HTMLElement).classList.add('carousel', 'slide');
      (this.$refs[`portfolioCarouselProduct${index}`] as HTMLElement).setAttribute('data-bs-ride', 'carousel');
    });
  },
  methods: {
    getCarouselSlideClass(productIndex = -1, slideIndex = -1) {
      const baseClass = "carousel-item";

      if (
        slideIndex === this.currentSlide &&
        productIndex === this.currentProduct
      ) {
        return `${baseClass} active`;
      }

      return baseClass;
    },
    getCarouselSlideImage(productIndex: number, imageIndex: number): string {
      return (this.products[productIndex] as ProductSlide).images[imageIndex];
    },
    productHasImages(productIndex: number): boolean {
      return (
        (this.products[productIndex] as ProductSlide).images instanceof Array &&
        (this.products[productIndex] as ProductSlide).images !== null &&
        (this.products[productIndex] as ProductSlide).images !== undefined
      );
    },
    getProduct(productIndex: number): ProductSlide {
      if (
        this.products[productIndex] !== undefined &&
        this.products[productIndex] !== null &&
        this.products[productIndex] instanceof ProductSlide
      ) {
        return this.products[productIndex] as ProductSlide;
      } else {
        return new ProductSlide("", [], "");
      }
    },
  },
});
</script>