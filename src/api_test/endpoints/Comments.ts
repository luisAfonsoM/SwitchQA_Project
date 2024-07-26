import { AxiosResponse } from 'axios';
import { AEndpoint } from './abstracts/AEndpoint';

export default class Comments extends AEndpoint {
  constructor() {
    super('/comments', 'comments');
  }

  public async createComment(postSlug, postCommentBody, accessToken): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `?slug=${postSlug}`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: postCommentBody,
    });
  }

  public async reply(commentId, postSlug, comment, accessToken): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `/${commentId}/reply?slug=${postSlug}`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: comment,
    });
  }

  public async getComments(postSlug): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: `?slug=${postSlug}` });
  }

  public async getComment(commentId): Promise<AxiosResponse> {
    return this.restClient.sendGet({ route: `/${commentId}` });
  }

  public async upVoteComment(accessToken, commentId): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `/${commentId}/upvote`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public async downVoteComment(accessToken, commentId): Promise<AxiosResponse> {
    return this.restClient.sendPost({
      route: `/${commentId}/downvote`,
      headers: {
        Authorization: accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public getCommentData(response, comment, regBody) {
    let commentData;

    for (const i of response.data.comments) {
      if (i.text == comment && i.member.user.username == regBody.username) {
        commentData = {
          commentId: i.commentId,
          username: i.member.user.username,
          parentCommentId: i.parentCommentId,
          points: i.points,
        };
        return commentData;
      }
    }
  }

  public async sleep(delay: number) {
    return await new Promise((f) => setTimeout(f, delay));
  }
}
