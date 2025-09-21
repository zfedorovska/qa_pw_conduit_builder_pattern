import { test } from '../../_fixtures/fixtures';

test.use({ usersNumber: 2 });

let slug;
let payload;

test.beforeEach(async ({ registeredUsers, articlesApi, testDataDirector }) => {
  const a = testDataDirector.article.buildWithOneTag();
  payload = {
    title: a.title,
    description: a.description,
    body: a.text,
    tagList: a.tags,
  };

  const response = await articlesApi.createArticle(payload, registeredUsers[0].token);
  await articlesApi.assertSuccessResponseCode(response);

  slug = await articlesApi.parseSlugFromResponse(response);
});

test('Get an article created by user1 by authorized user 2', async ({
  articlesApi,
  registeredUsers,
}) => {
  const response = await articlesApi.getArticleBySlug(slug, registeredUsers[1].token);

  await articlesApi.assertSuccessResponseCode(response);
  await articlesApi.assertResponseBodyContainsSlug(response);
  await articlesApi.assertArticleTitleHasCorrectValue(response, payload.title);
  await articlesApi.assertArticleDescriptionHasCorrectValue(response, payload.description);
  await articlesApi.assertArticleBodyHasCorrectValue(response, payload.body);
  await articlesApi.assertArticleTagsHasCorrectValue(response, payload.tagList);
});
