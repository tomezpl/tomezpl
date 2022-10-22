export class ProductSlide {
    title: string;
    images: Array<string>;
    brief: string;
  
    constructor(title = "", images = new Array<string>(), brief = "") {
      this.title = title;
      this.images = images;
      this.brief = brief;
    }
  }