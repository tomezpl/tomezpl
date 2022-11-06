export class ProductSlide {
    title: string;
    images: Array<string>;
    brief: Array<string>;

    constructor(title = "", images = new Array<string>(), brief = new Array<string>()) {
      this.title = title;
      this.images = images;
      this.brief = brief;
    }

    static make(title = "", images = new Array<string>(), brief = "") : ProductSlide {
      return new ProductSlide(title, images, [brief]);
    }
  }