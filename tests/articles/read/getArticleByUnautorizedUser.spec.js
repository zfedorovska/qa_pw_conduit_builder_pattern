import { test } from '../../_fixtures/fixtures';

let slug;
let payload;

test.beforeEach(async ({ registeredUser, articlesApi, testDataDirector }) => {
  const a = testDataDirector.article.buildWithOneTag();
  payload = {
    title: a.title,
    description: a.description,
    body: a.text,
    tagList: a.tags,
  };

  const response = await articlesApi.createArticle(payload, registeredUser.token);
  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test('Get an article by unauthorized user', async ({ articlesApi }) => {
  const response = await articlesApi.getArticleBySlug(slug, '');

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertResponseBodyContainsSlug(response);
  await articlesApi.assertArticleTitleHasCorrectValue(response, payload.title);
  await articlesApi.assertArticleDescriptionHasCorrectValue(response, payload.description);
  await articlesApi.assertArticleBodyHasCorrectValue(response, payload.body);
  await articlesApi.assertArticleTagsHasCorrectValue(response, payload.tagList);
});
