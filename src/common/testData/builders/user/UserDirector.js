import { UserBuilder } from './UserBuilder';

export class UserDirector {
  constructor() {
    this.builder = new UserBuilder();
  }

  buildUser() {
    this.builder.reset();
    this.builder.setUsername();
    this.builder.setEmail();
    this.builder.setPassword();
    return this.builder.getProduct();
  }

  buildWithEmptyEmail() {
    this.builder.reset();
    this.builder.setUsername();
    this.builder.setEmail('');
    this.builder.setPassword();
    return this.builder.getProduct();
  }

  buildWithEmptyPassword() {
    this.builder.reset();
    this.builder.setUsername();
    this.builder.setEmail();
    this.builder.setPassword('');
    return this.builder.getProduct();
  }

  buildWithEmptyUsername() {
    this.builder.reset();
    this.builder.setUsername('');
    this.builder.setEmail();
    this.builder.setPassword();
    return this.builder.getProduct();
  }
}
