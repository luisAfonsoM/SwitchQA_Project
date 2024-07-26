import { User } from '../domain/user';
import { UserEmail } from '../domain/userEmail';
import { UserName } from '../domain/userName';

export interface IUserRepo {
  exists(userEmail: UserEmail): Promise<boolean>;
  getUserByUserId(userId: string): Promise<User>;
  getUserByUserName(userName: UserName | string): Promise<User>;
  getPostsCommentsByUsername(userName: string): Promise<User>;
  getUserWithMoreCommentsPosts(): Promise<User>;
  getUserInfo(userName: string): Promise<{ userByUsername: User; userWithMoreComments: User }>;
  save(user: User): Promise<void>;
  getStatistics(date: string, statType: string): Promise<{
    [key: string]: any; // Dynamic key type to accommodate different stat types
  }>;
}
