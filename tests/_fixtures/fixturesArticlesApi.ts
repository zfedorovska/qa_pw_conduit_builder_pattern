import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';
import { TestDataDirector } from '../../src/common/testData/builders/TestDataDirector';

type ArticlePayload = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

const testDataDirector = new TestDataDirector();

export const test = base.extend<{
  articlesApi: ArticlesApi;
  articleWithoutTags: ArticlePayload;
  articleWithOneTag: ArticlePayload;
}>({
  articlesApi: async ({ request }, use) => {
    const client = new ArticlesApi(request);
    await use(client);
  },

  // No tags
  articleWithoutTags: async ({}, use) => {
    const article = testDataDirector.article.buildWithEmptyTags();
    await use(article);
  },

  // Exactly one tag
  articleWithOneTag: async ({}, use) => {
    const article = testDataDirector.article.buildWithTagsCount(1);
    await use(article);
  },
});
