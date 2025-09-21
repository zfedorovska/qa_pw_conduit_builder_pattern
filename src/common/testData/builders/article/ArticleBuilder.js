import { faker } from '@faker-js/faker';

export class ArticleBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this._article = { title: '', description: '', text: '', tags: [] };
    return this;
  }

  setTitle(value = faker.lorem.words(5)) {
    this._article.title = value;
    return this;
  }

  setDescription(value = faker.lorem.sentence(4)) {
    this._article.description = value;
    return this;
  }

  setText(value = faker.lorem.sentences(2)) {
    this._article.text = value;
    return this;
  }

  setTags(tags = []) {
    this._article.tags = Array.isArray(tags) ? tags : [];
    return this;
  }

  setTagsCount(count = 0) {
    const n = Math.max(0, Number(count) || 0);
    this._article.tags = Array.from({ length: n }, () => faker.lorem.word());
    return this;
  }

  getProduct() {
    return { ...this._article };
  }
}
