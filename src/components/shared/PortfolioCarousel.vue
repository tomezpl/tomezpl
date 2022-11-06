<template>
  <div class="col-12">
    <div ref="portfolioCarousel" id="portfolioCarousel" class="col-12 carousel slide">
      <div class="carousel-inner">
        <div
          v-for="n in products.length"
          :ref="`product${n - 1}`"
          class="carousel-item h-100"
          :key="n - 1"
        >
          <ProductCarousel :id="`portfolioCarouselProduct${n - 1}`" :ref="`portfolioCarouselProduct${n - 1}`" :product="getProduct(n-1)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductSlide } from "../../types/ProductSlide";
import ProductCarousel from "./PortfolioCarousel/ProductCarousel.vue";

export default defineComponent({
  name: "PortfolioCarousel",
  components: {
    ProductCarousel
  },
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
    /*this.products.forEach((val, productIndex) => {
      (val as ProductSlide).images.forEach((val, slideIndex) => {
        const currentImageSlide = this.$refs[`product${productIndex}_slide${slideIndex}`] as HTMLElement;
        currentImageSlide.addEventListener(
          "slid.bs.carousel",
          () => {this.currentSlide = slideIndex; this.currentProduct = productIndex; currentImageSlide }
        );
      });
    });*/
    const firstProduct = this.$refs["product0"];
    console.log(firstProduct);
    if (firstProduct !== null && firstProduct !== undefined) {
      const firstProductSlide = this.$refs["product0_slide0"];
      if (firstProductSlide !== null && firstProductSlide !== undefined) {
        (firstProductSlide as HTMLElement).classList.add("active");
      }
      (firstProduct as HTMLElement).classList.add("active");
    }
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
        return new ProductSlide("", [], []);
      }
    },
  },
});
</script>