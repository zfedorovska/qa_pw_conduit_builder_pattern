import { test } from '../../_fixtures/fixtures';

test('Create article with empty body', async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const a = testDataDirector.article.buildDefault(0);

  const payload = {
    title: a.title,
    description: a.description,
    body: null,       // force empty body for 422
    tagList: [],      // no tags
  };

  const response = await articlesApi.createArticle(payload, registeredUser.token);

  await articlesApi.assertUnprocessableEntityResponseCode(response);
});
