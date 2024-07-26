import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
import { bootstrap } from '../../modules/forum/repos';

let users: Users;
let posts: Posts;
let accessToken: string;
let postInfo;
const slugObject = {
  slug: '',
};
let response;
const comments = new Comments();
const regBody = {
  email: 'votepost@gmail.com',
  username: 'voteposttest',
  password: 'voteposttest',
};
const postBody = {
  title: 'Terminator',
  postType: 'link',
  text: '',
  link: 'joinMeIfYouWannaLive.pt',
};

describe('(SSD) - Alternative 1 - Member upvotes a post', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    postInfo = await posts.getPost(slugObject.slug);
    //!!!if i want this to work, otherwise comment next two lines
    //await posts.downVotePost(accessToken, slugObject);
    //await comments.sleep(2000);
  });

  it('Upvote a post', async () => {
    const response = await posts.upVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(1);
  });
});

describe('(SSD) - Alternative 2 - Member downvotes a post', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    postInfo = await posts.getPost(slugObject.slug);
  });

  it('SSD2 - Downvote a post', async () => {
    const response = await posts.downVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(-1);
  });
});

describe('(SSD) - Alternative 3 - Member tries to upvote a previously upvoted post', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    await posts.upVotePost(accessToken, slugObject);
    postInfo = await posts.getPost(slugObject.slug);
  });

  it('SSD3 - Upvote a previously upvoted post', async () => {
    const response = await posts.upVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(1);
  });
});

describe('(SSD) - Alternative 4 - Member tries to downvote a previously downvote post', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    await posts.downVotePost(accessToken, slugObject);
    postInfo = await posts.getPost(slugObject.slug);
  });

  it('SSD4 - Downvote a previously downvoted post', async () => {
    const response = await posts.downVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(1);
  });
});

describe('(SSD) - Alternative 5 - Member changes an upvote to a downvote', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    await posts.upVotePost(accessToken, slugObject);
    postInfo = await posts.getPost(slugObject.slug);
  });

  it('SSD5 - Downvote a previously upvoted post', async () => {
    const response = await posts.downVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(0);
  });
});

describe('(SSD) - Alternative 6 - Member changes a downvote to an upvote', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    await posts.createPost(postBody, accessToken);

    // Fetch the most recent posts & post points
    const recentPostsResponse = await posts.getNewPosts();
    slugObject.slug = posts.getSlug(recentPostsResponse, postBody, regBody);
    await posts.downVotePost(accessToken, slugObject);
    postInfo = await posts.getPost(slugObject.slug);
  });

  it('SSD6 - Upvote a previously downvoted post', async () => {
    const response = await posts.upVotePost(accessToken, slugObject);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    postInfo = await posts.getPost(slugObject.slug);
    expect(postInfo.data.post.points).toBe(0);
  });
});
