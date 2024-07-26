import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
import { bootstrap } from '../../modules/forum/repos';

const posts = new Posts();
const users = new Users();
const comments = new Comments();

describe('US008 - SSDs flow tests based on Acceptance Criteria', (): void => {
  let regBody;
  let regBodyTwo;
  let postCommentBody;
  let getInitialScore;
  let replyContent;
  let response;
  let accessToken: string;
  let accessTokenTwo: string;
  let slugPost: string;

  beforeAll(async () => {
    regBody = {
      email: 'broa_de_mel@gmail.com',
      username: 'josemaria',
      password: 'password',
    };

    regBodyTwo = {
      email: 'agataoficial@gmail.com',
      username: 'agatacantora',
      password: 'password',
    };

    await users.post(regBody);
    await users.post(regBodyTwo);

    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;

    const postBody = {
      title: 'Passear contigo, amar e ser feliz',
      postType: 'text',
      text: 'O que mais quero da vida, ter amor e muito amor pra dar',
      link: '',
    };

    response = await posts.createPost(postBody, accessToken);
    slugPost = posts.getSlug(await posts.getNewPosts(), postBody, regBody);
  });

  describe('SSD Alternative 1 - Member upvotes comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody = {
        comment: 'ter amor e muito amor pra amar',
      };

      await comments.createComment(slugPost, postCommentBody, accessToken);

      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });

    test('Verify upvote success', async () => {
      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);

      expect(response.status).toBe(200);
      expect(response.statusText).toBe('OK');
    });

    test('Check the +1 increment on score in post page', async () => {
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points + 1);
      expect(response.status).toBe(200);
    });

    test('Check the +1 increment on score in comment page', async () => {
      await comments.sleep(150);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points + 1);
      expect(scoreAfterVote.status).toBe(200);
    });
  });

  describe('SSD Alternative 2 - Member downvotes comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody = {
        comment: 'Passear contigo, amar e ser feliz, mas que importa que se diga',
      };

      await comments.createComment(slugPost, postCommentBody, accessToken);
      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });

    test('Verify downvote success', async () => {
      await comments.sleep(150);

      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);

      expect(response.status).toBe(200);
      expect(response.statusText).toBe('OK');
    });

    test('Check the -1 decrement on score in post page', async () => {
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points - 1);
      expect(response.status).toBe(200);
    });

    test('Check the -1 decrement on score in comment page', async () => {
      await comments.sleep(150);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points - 1);
      expect(scoreAfterVote.status).toBe(200);
    });
  });

  describe('SSD Alternative 3 - Member upvotes a previously upvoted comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment = 'Que amar assim é a brincar, vem amor, vem passear';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });

    test("Check that there wasn't a increment on score in post page", async () => {
      await comments.sleep(150);

      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points + 1);
    });

    test("Check that there wasn't a increment on score in comment page", async () => {
      await comments.sleep(150);

      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points + 1);
    });
  });

  describe('SSD Alternative 4 - Member downvotes a previously downvoted comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment = 'Vem ver como a tarde está linda e como é tão bom ficarmos sós';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });

    test("Check that there wasn't a decrement on score in post page", async () => {
      await comments.sleep(150);

      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points - 1);
    });

    test("Check that there wasn't a decrement on score in comment page", async () => {
      await comments.sleep(150);

      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points - 1);
    });
  });

  describe('SSD Alternative 5 - Member changes upvote to downvote', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment =
        'Se o dia acabar o amor não finda porque há muito amor dentro de nós';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });
    test('Check the +1 increment followed by a -1 decrement on score in post page', async () => {
      await comments.sleep(150);

      await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points);
    });
    test('Check the +1 increment followed by a -1 decrement on score in comment page', async () => {
      await comments.sleep(150);

      await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(scoreAfterVote.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points);
    });
  });

  describe('SSD Alternative 6 - Member changes downvote to upvote', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment =
        'Hoje eu estou feliz por estar contigo, cedo o Sol começou a brilhar';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);

      accessTokenTwo = response.data.accessToken;
    });
    test('Check the +1 increment followed by a -1 decrement on score in post page', async () => {
      await comments.sleep(150);

      await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points);
    });
    test('Check the +1 increment followed by a -1 decrement on score in comment page', async () => {
      await comments.sleep(150);

      await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(scoreAfterVote.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points);
    });
  });

  describe('SSD Alternative 8 - Member upvotes a reply to a comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment = 'Santo António já se acabou, o São Pedro está-se acabar';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      replyContent = {
        comment: 'São João, São João, dá cá um balão para eu brincar',
      };
      const commentInfo = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      await comments.reply(commentInfo.commentId, slugPost, replyContent, accessToken);
      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );

      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);
      accessTokenTwo = response.data.accessToken;
    });

    test('Verify upvote on reply success', async () => {
      await comments.sleep(150);

      response = await comments.upVoteComment(accessTokenTwo, getInitialScore.commentId);

      expect(response.status).toBe(200);
      expect(response.statusText).toBe('OK');
    });

    test('Check the +1 increment on reply score in post page', async () => {
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points + 1);
      expect(response.status).toBe(200);
    });

    test('Check the +1 increment on reply score in comment page', async () => {
      await comments.sleep(150);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points + 1);
      expect(scoreAfterVote.status).toBe(200);
    });
  });

  describe('SSD Alternative 9 - Member downvotes a reply to a comment', () => {
    let scoreAfterVote;

    beforeAll(async () => {
      postCommentBody.comment =
        'São João, santo Bonito, bem bonito que ele é, bem bonito que ele é';

      await comments.createComment(slugPost, postCommentBody, accessToken);

      replyContent = {
        comment: 'Com os seus caracóis de oiro, e o seu cordeirinho ao pé',
      };
      const commentInfo = await comments.getCommentData(
        await comments.getComments(slugPost),
        postCommentBody.comment,
        regBody,
      );
      await comments.reply(commentInfo.commentId, slugPost, replyContent, accessToken);
      getInitialScore = await comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );

      response = await users.postLogin(regBodyTwo.username, regBodyTwo.password);
      accessTokenTwo = response.data.accessToken;
    });

    test('Verify upvote on reply success', async () => {
      await comments.sleep(150);

      response = await comments.downVoteComment(accessTokenTwo, getInitialScore.commentId);

      expect(response.status).toBe(200);
      expect(response.statusText).toBe('OK');
    });

    test('Check the -1 increment on reply score in post page', async () => {
      await comments.sleep(150);

      scoreAfterVote = comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );

      expect(scoreAfterVote.points).toBe(getInitialScore.points - 1);
      expect(response.status).toBe(200);
    });

    test('Check the -1 increment on reply score in comment page', async () => {
      await comments.sleep(150);

      response = await comments.getCommentData(
        await comments.getComments(slugPost),
        replyContent.comment,
        regBody,
      );
      scoreAfterVote = await comments.getComment(response.commentId);

      expect(scoreAfterVote.data.comment.points).toBe(getInitialScore.points - 1);
      expect(scoreAfterVote.status).toBe(200);
    });
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
