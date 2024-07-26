import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';

const posts = new Posts();
const users = new Users();
const comments = new Comments();
let accessToken: string;
let slugPost;
let postCommentBody;
let regBody;
let commentData;
jest.setTimeout(20000);

import { bootstrap } from '../../modules/forum/repos';

describe('US005 - visitor views comments and their data according to AC', (): void => {
  beforeAll(async (): Promise<void> => {
    regBody = {
      email: 'mordor@baggend.tt',
      username: 'Thorin',
      password: 'rivendell',
    };

    await users.post(regBody);
    const createUser = await users.postLogin(regBody.username, regBody.password);

    accessToken = createUser.data.accessToken;

    const postBody = {
      title: 'Short cuts make long delays',
      postType: 'text',
      text: 'The wise speak only of what they know.',
      link: '',
    };

    await posts.createPost(postBody, accessToken);
    await comments.sleep(1000);
    const orderPostsByNew = await posts.getNewPosts();
    await comments.sleep(1000);
    slugPost = await posts.getSlug(orderPostsByNew, postBody, regBody);
    await comments.sleep(1000);
    postCommentBody = {
      comment: 'Theres some good in this world, Mr. Frodo… and its worth fighting for',
    };
    await comments.createComment(slugPost, postCommentBody, accessToken);
    await comments.sleep(1000);
    const commentList = await comments.getComments(slugPost);
    await comments.sleep(1000);
    const commentInfo = await comments.getCommentData(commentList, postCommentBody.comment, regBody);
    await comments.sleep(1000);
    commentData = await comments.getComment(commentInfo.commentId);
  });

  test('comment text should be Theres some good in this world, Mr. Frodo… and its worth fighting for', () => {
    expect(commentData.data.comment.text).toBe(postCommentBody.comment);
  });
  test('username should be the same as regBody.username', () => {
    expect(commentData.data.comment.member.user.username).toBe(regBody.username);
  });
  test('mandatory key values exist', () => {
    expect(commentData.data.comment).toHaveProperty('postSlug');
    expect(commentData.data.comment).toHaveProperty('commentId');
    expect(commentData.data.comment).toHaveProperty('parentCommentId');
    expect(commentData.data.comment).toHaveProperty(['member', 'reputation'], 0);
    expect(commentData.data.comment).toHaveProperty('createdAt');
    expect(commentData.data.comment).toHaveProperty('childComments');
    expect(commentData.data.comment).toHaveProperty('postTitle');
    expect(commentData.data.comment).toHaveProperty('points');
    expect(commentData.data.comment).toHaveProperty('wasUpvotedByMe');
    expect(commentData.data.comment).toHaveProperty('wasDownvotedByMe');
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
