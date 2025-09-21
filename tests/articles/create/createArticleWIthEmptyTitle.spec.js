import { test } from '../../_fixtures/fixtures';

test('Create article with empty title', async ({
  registeredUser,
  articlesApi,
  testDataDirector,
}) => {
  const a = testDataDirector.article.buildDefault(0);

  const payload = {
    title: null,               // force empty title
    description: a.description,
    body: a.text,
    tagList: [],
  };

  const response = await articlesApi.createArticle(payload, registeredUser.token);

  await articlesApi.assertInternalServerErrorResponseCode(response);
});
