import { getUserProfile } from './getUserProfile';
import { login } from './login';
import { logout } from './logout';
import { createUser } from './createUser';
import { deleteUser } from './deleteUser';

import { getMemberDetails } from './getMemberDetails';

export interface IUserOperators {
  getUserProfile(): void;
  login(username: string, password: string): void;
  logout(): void;
  createUser(email: string, username: string, password: string): void;
  deleteUser(userId: string): void;
  getMemberDetails(username: string): any;
}

export {
  getUserProfile,
  login,
  logout,
  createUser,
  deleteUser,
  getMemberDetails
};
