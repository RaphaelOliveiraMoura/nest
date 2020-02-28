import { Test, TestingModule } from '@nestjs/testing';

import UserService from '../services/user.service';
import UserController from './user.controller';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  it('should return a list of users', () => {
    const users = userController.index();
    expect(Array.isArray(users)).toBe(true);
  });
});
