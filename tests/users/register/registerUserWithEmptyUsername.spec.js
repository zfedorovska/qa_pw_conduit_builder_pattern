import { test } from '../../_fixtures/fixtures';
import { EMPTY_USERNAME_MESSAGE } from '../../../src/constants/authErrorMessages';

test('Register user with empty username', async ({ usersApi, testDataDirector }) => {
  const user = testDataDirector.user.buildWithEmptyUsername();
  const response = await usersApi.registerNewUser(user);

  await usersApi.assertUnprocessableEntityResponseCode(response);
  await usersApi.assertErrorMessageInResponseBody(response, EMPTY_USERNAME_MESSAGE, 'username');
});
