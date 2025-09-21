import { ArticleBuilder } from './ArticleBuilder';

export class ArticleDirector {
  constructor() {
    this.builder = new ArticleBuilder();
  }

  buildDefault(tagsNumber = 0) {
    this.builder.reset()
      .setTitle()
      .setDescription()
      .setText()
      .setTagsCount(tagsNumber);
    return this.builder.getProduct();
  }

  buildWithEmptyBody() {
    this.builder.reset()
      .setTitle()
      .setDescription()
      .setText('')
      .setTags([]);
    return this.builder.getProduct();
  }

  buildWithEmptyTitle() {
    this.builder.reset()
      .setTitle('')
      .setDescription()
      .setText()
      .setTags([]);
    return this.builder.getProduct();
  }

  buildWithEmptyTags() {
    this.builder.reset()
      .setTitle()
      .setDescription()
      .setText()
      .setTags([]);
    return this.builder.getProduct();
  }

  buildWithOneTag() {
    this.builder.reset()
      .setTitle()
      .setDescription()
      .setText()
      .setTagsCount(1);
    return this.builder.getProduct();
  }

  buildWithTags(tagsNumber) {
    return this.buildDefault(tagsNumber);
  }
}
