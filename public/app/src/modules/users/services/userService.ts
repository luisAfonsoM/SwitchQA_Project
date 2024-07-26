import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { right, left } from '../../../shared/core/Either';
import { Result } from '../../../shared/core/Result';
import { APIResponse } from '../../../shared/infra/services/APIResponse';
import { LoginDTO } from '../dtos/loginDTO';
import { User } from '../models/user';
import { IAuthService } from './authService';
import { MemberDetails } from '../../forum/models/MemberDetails';

export interface IUsersService {
  getCurrentUserProfile(): Promise<User>;
  createUser(
    email: string,
    username: string,
    password: string
  ): Promise<APIResponse<void>>;
  login(username: string, password: string): Promise<APIResponse<LoginDTO>>;
  logout(): Promise<APIResponse<void>>;
  deleteUser(userId: string): Promise<APIResponse<void>>;
  getMemberDetails(username: string): Promise<APIResponse<MemberDetails>>;
  getUserWithMoreCommentsPosts(): Promise<object>;
  getPostsCommentsByUsername(username: string): Promise<object>;
}

export class UsersService extends BaseAPI implements IUsersService {
  constructor(authService: IAuthService) {
    super(authService);
  }

  async getCurrentUserProfile(): Promise<User> {
    const response = await this.get('/users/me', null, {
      authorization: this.authService.getToken('access-token')
    });
    return response.data.user as User;
  }

  public async logout(): Promise<APIResponse<void>> {
    try {
      await this.post('/users/logout', null, null, {
        authorization: this.authService.getToken('access-token')
      });
      this.authService.removeToken('access-token');
      this.authService.removeToken('refresh-token');
      return right(Result.ok<void>());
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }

  async login(
    username: string,
    password: string
  ): Promise<APIResponse<LoginDTO>> {
    try {
      const response = await this.post('/users/login', { username, password });
      const dto: LoginDTO = response.data as LoginDTO;
      this.authService.setToken('access-token', dto.accessToken);
      this.authService.setToken('refresh-token', dto.refreshToken);
      return right(Result.ok<LoginDTO>(dto));
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }

  async createUser(
    email: string,
    username: string,
    password: string
  ): Promise<APIResponse<void>> {
    try {
      await this.post('/users', { email, username, password });
      return right(Result.ok<void>());
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }

  async deleteUser(userId: string): Promise<APIResponse<void>> {
    try {
      const accessToken = this.authService.getToken('access-token');
      await this.delete(
        '/users/' + userId,
        { userId: userId },
        {
          Authorization: accessToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      );
      return right(Result.ok<void>());
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }

  async getMemberDetails(
    username: string
  ): Promise<APIResponse<MemberDetails>> {
    try {
      const accessToken = this.authService.getToken('access-token');

      let response = await this.get(
        '/users/' + username,
        { username: username },
        {
          Authorization: accessToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      );

      return right(Result.ok<MemberDetails>(response));
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }
  public async getUserWithMoreCommentsPosts() {
    const response = await this.get(`/users/rank`, null, {
      authorization: this.authService.getToken('access-token')
    });
    return response.data.user as object;
  }

  public async getPostsCommentsByUsername(username: string) {
    const response = await this.get(`/users/info/${username}`, null, {
      authorization: this.authService.getToken('access-token')
    });
    return response.data.user as object;
  }
  public async getStatistics(date: string, statType: string) {
    const response = await this.get(
      `/users/statistics/${date}/${statType}`,
      null,
      {
        authorization: this.authService.getToken('access-token')
      }
    );
    console.log("this is getStatistics method", response.data.statistics);
    return response.data.statistics as object;
  }
}
