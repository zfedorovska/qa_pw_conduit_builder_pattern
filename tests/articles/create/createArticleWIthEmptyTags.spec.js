import { test } from '../../_fixtures/fixtures';

test('Create article with empty tags', async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const a = testDataDirector.article.buildDefault(0);

  const payload = {
    title: a.title,
    description: a.description,
    body: a.text,
    tagList: [], // explicitly empty
  };

  const response = await articlesApi.createArticle(payload, registeredUser.token);

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertResponseBodyContainsSlug(response);
  await articlesApi.assertArticleTitleHasCorrectValue(response, payload.title);
  await articlesApi.assertArticleDescriptionHasCorrectValue(response, payload.description);
  await articlesApi.assertArticleBodyHasCorrectValue(response, payload.body);
  await articlesApi.assertArticleTagsHasCorrectValue(response, payload.tagList);
});
