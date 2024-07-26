import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
let posts: Posts;
let users: Users;
let comments: Comments;
let accessToken: string;
let response;
let slugPost;
const limitCharacters = 'a'.repeat(10001);
jest.setTimeout(30000);

import { bootstrap } from '../../modules/forum/repos';

describe('US004 - Create a comment without field validation', () => {
  describe.each`
    comment            | StatusCode | StatusText
    ${''}              | ${500}     | ${'Internal Server Error'}
    ${'D'}             | ${500}     | ${'Internal Server Error'}
    ${'<body></body>'} | ${500}     | ${'Internal Server Error'}
    ${limitCharacters} | ${500}     | ${'Internal Server Error'}
    ${2}               | ${500}     | ${'Internal Server Error'}
  `(`Comment creation attempt with $comment`, ({ comment, StatusCode, StatusText }) => {
    beforeAll(async (): Promise<void> => {
      posts = new Posts();
      users = new Users();
      comments = new Comments();

      const regBody = {
        email: 'diapasao@gmail.com',
        username: 'diapasao',
        password: 'password',
      };
      await users.post(regBody);
      await comments.sleep(1000);
      response = await users.postLogin(regBody.username, regBody.password);
      await comments.sleep(1000);
      accessToken = response.data.accessToken;

      const postBody = {
        title: 'Um homem trabalha uma vida inteira',
        postType: 'text',
        text: 'Para um dia regressar',
        link: '',
      };
      response = await posts.createPost(postBody, accessToken);
      await comments.sleep(1000);
      response = await posts.getNewPosts();
      await comments.sleep(1000);
      slugPost = posts.getSlug(response, postBody, regBody);

      const postCommentBody = {
        comment: comment,
      };
      await comments.sleep(1000);
      response = await comments.createComment(slugPost, postCommentBody, accessToken);
    });

    test(`statusCode should be ${StatusCode} `, () => {
      expect(response.status).toBe(StatusCode);
    });
    test(`statusText should be ${StatusText}`, () => {
      expect(response.statusText).toBe(StatusText);
    });

    it('Verify that when a comment is created the number of comments increases by one', async (): Promise<void> => {
      const initialPostInfo = await posts.getPost(slugPost);
      const initialComments = initialPostInfo.data.post.numComments;
      const postCommentBodyTwo = {
        comment: 'The praise of the praiseworthy is above all rewards',
      };
      await comments.createComment(slugPost, postCommentBodyTwo, accessToken);
      const afterCommentPostInfo = await posts.getPost(slugPost);
      const afterComments = afterCommentPostInfo.data.post.numComments;

      expect(afterComments).toBe(initialComments + 1);
    });
    it('Verify that when a comment is created the number of comments increases by one using the getComments function', async (): Promise<void> => {
      const responseComments = await comments.getComments(slugPost);
      await comments.sleep(1000);
      const initialComments = responseComments.data.comments.length;
      const postCommentBody3 = {
        comment: 'Faithless is he that says farewell when the road darkens.',
      };
      await comments.createComment(slugPost, postCommentBody3, accessToken);
      await comments.sleep(1000);
      const afterCommentResponse = await comments.getComments(slugPost);
      await comments.sleep(1000);
      const afterComments = afterCommentResponse.data.comments.length;

      expect(afterComments).toBe(initialComments + 1);
    });
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
