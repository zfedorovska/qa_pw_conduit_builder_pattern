import { UserDirector } from './user/UserDirector';
import { ProfileDirector } from './profile/ProfileDirector';
import { ArticleDirector } from './article/ArticleDirector';


export class TestDataDirector {
  constructor() {
    this.user = new UserDirector();
    this.profile = new ProfileDirector();
    this.article = new ArticleDirector();
  }
}

