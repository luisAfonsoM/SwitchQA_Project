/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { AxiosResponse } from 'axios';
import Users from './Users';
import { AEndpoint } from './abstracts/AEndpoint';

export default class Posts extends AEndpoint {
  constructor() {
    super('/posts', 'posts');
  }

  public async getPopularPosts(): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: '/popular' });
  }

  public async getUnpopularPosts(): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: '/unpopular' });
  }

  public async getNewPosts(): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: '/recent' });
  }

  public async createPost(postBody, accessToken): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: '/',
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: postBody,
    });
  }

  public async getPost(postSlug): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: `?slug=${postSlug}` });
  }

  public async upVotePost(accessToken, getPostBySlug): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `/upvote`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: getPostBySlug,
    });
  }

  public async downVotePost(accessToken, getPostBySlug): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `/downvote`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: getPostBySlug,
    });
  }

  public getSlug(response, postBody, regBody) {
    for (const i of response.data.posts) {
      if (i.title == postBody.title && i.memberPostedBy.user.username == regBody.username) {
        if (i.text == postBody.text || i.link == postBody.link) {
          return i.slug;
        }
      }
    }
  }

  public static getRandomTitle(): string {
    return Users.getRandomString(7);
  }

  public static getRandomText(): string {
    return Users.getRandomString(25);
  }

  public static getRandomLink(): string {
    return `http://${Users.getRandomString(7)}69.com`;
  }
}
