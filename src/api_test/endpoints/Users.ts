import { AxiosResponse } from 'axios';

/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { AEndpoint } from './abstracts/AEndpoint';

export default class Users extends AEndpoint {
  constructor() {
    super('/users', 'users');
  }

  /**
   * This method is used to login, using the REST API.
   * For the moment, the username and password are hardcoded.
   *
   * @returns the result of the post request. If sucessful, the response will contain an access token and refresh token.
   */
  public async postLogin(userName, password: string): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: '/login',
      data: { username: userName, password: password },
    });
  }


  public async userDetails(username:string, accessToken:string):Promise<AxiosResponse>{
    return this.restClient.sendGet({
      route: '/info/'+username,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }



  public async getMe(accessToken: string): Promise<AxiosResponse> {
    return this.restClient.sendGet({
      route: '/me',
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public async post(regBody): Promise<AxiosResponse> {
    return this.restClient.sendPost({ route: '/', data: regBody });
  }




  public async postLogout(accessToken: string): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: '/logout',
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public async delete(accessToken: string, userId): Promise<AxiosResponse> {
    return this.restClient.sendDelete({
      route: '/' + userId,
      data: { userId: userId },
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public static getRandomString(length: number): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }


  public static getRandomEmail(): string {
    return `${Users.getRandomString(5)}1@gmail.com`;
  }

  public static getRandomUsername(): string {
    return `${Users.getRandomString(6)}1${Users.getRandomString(2)}`;
  }

  public async getUserWithMoreCommentsPosts (accessToken:string) : Promise<AxiosResponse> {
    return this.restClient.sendGet({
      route: "/rank",
      headers: { Authorization: accessToken}
    })
  }

  /**
   * Fetches various statistics for posts and comments by date.
   *
   * @param {string} date - The date for which to fetch statistics.
   * @param {string} accessToken - The access token for authorization.
   * @returns {Promise<AxiosResponse>} - The result of the get request.
   */
  public async getStatisticsByDate(date: string, statType: string, accessToken: string): Promise<AxiosResponse> {
    return this.restClient.sendGet({
      route: `/statistics/${date}/${statType}`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
