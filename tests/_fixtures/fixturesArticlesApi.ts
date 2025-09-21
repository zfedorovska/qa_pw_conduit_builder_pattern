import { test as base } from '@playwright/test';
import { ArticlesApi } from '../../src/api/endpoints/ArticlesApi';

type ArticlePayload = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

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
    const article = testDataDirector.article().withTags(0).build();
    await use(article);
  },

  // Exactly one tag
  articleWithOneTag: async ({}, use) => {
    const article = testDataDirector.article().withTags(1).build();
    await use(article);
  },
});
