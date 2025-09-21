import { test } from '../../_fixtures/fixtures';

test('Create article with unauthorized user', async ({
  articlesApi,
  testDataDirector,
}) => {
  const a = testDataDirector.article.buildDefault(0);

  const payload = {
    title: a.title,
    description: a.description,
    body: a.text,
    tagList: [],
  };

  const token = '';
  const response = await articlesApi.createArticle(payload, token);

  await articlesApi.assertUnauthorizedResponseCode(response);
});
