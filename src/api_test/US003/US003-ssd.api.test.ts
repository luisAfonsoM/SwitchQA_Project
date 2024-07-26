import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';

const posts = new Posts();
const comments = new Comments();
jest.setTimeout(20000);
import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US003 - View posts and their data based on (SSD1) AC', () => {
  let viewPostText;
  let viewPostLink;

  const postBodyText = {
    title: 'Dream TeSTer',
    postType: 'text',
    link: '',
    text: '<p>Dream Tester very good heavy metal band</p>',
    slug: '1616161-Dream-TeSTer',
    totalComments: 6,
    points: -200,
    createdAt: '2023-06-26T00:31:00.000Z',
    username: 'AmbrosioDoChoco',
  };

  const postBodyLink = {
    title: 'GitHub',
    postType: 'link',
    link: 'www.github.com',
    text: '',
    slug: '2222222-GitHub',
    totalComments: 0,
    points: 90,
    createdAt: '2023-06-27T11:30:00.000Z',
    username: 'NatalyLucas',
  };

  describe('Validate TEXT POST DATA', () => {
    beforeAll(async () => {
      viewPostText = await posts.getPost(postBodyText.slug);
      await comments.sleep(1000);
    });
    test('view post request should return 200', () => {
      expect(viewPostText.status).toBe(200);
    });
    test('title should be This is my postBodyText title', () => {
      expect(viewPostText.data.post.title).toBe(postBodyText.title);
    });
    test('<p>Dream Tester very good heavy metal band</p>', () => {
      expect(viewPostText.data.post.text).toBe(postBodyText.text);
    });
    test('username should be AmbrosioDoChoco', () => {
      expect(viewPostText.data.post.memberPostedBy.user.username).toBe(postBodyText.username);
    });
    test('type should be text', () => {
      expect(viewPostText.data.post.type).toBe(postBodyText.postType);
    });
    test('link should be undefined', () => {
      expect(viewPostText.data.post.link).toBe(postBodyText.link);
    });
    test('points should be -200', () => {
      expect(viewPostText.data.post.points).toBe(postBodyText.points);
    });
    test('number of comments should be 6', () => {
      expect(viewPostText.data.post.numComments).toBe(postBodyText.totalComments);
    });
  });

  describe('view Post link data', () => {
    it('Get post Link data', async (): Promise<void> => {
      viewPostLink = await posts.getPost(postBodyLink.slug);
      await comments.sleep(1000);
      expect(viewPostLink.status).toBe(200);
    });

    test('title should be This is my postBodyText title', () => {
      expect(viewPostLink.data.post.title).toBe(postBodyLink.title);
    });
    test('text undefinied', () => {
      expect(viewPostLink.data.post.text).toBe(postBodyLink.text);
    });
    test('username should be NatalyLucas', () => {
      expect(viewPostLink.data.post.memberPostedBy.user.username).toBe(postBodyLink.username);
    });
    test('type should be link', () => {
      expect(viewPostLink.data.post.type).toBe(postBodyLink.postType);
    });
    test('link should be www.github.com', () => {
      expect(viewPostLink.data.post.link).toBe(postBodyLink.link);
    });
    test('points should be 90', () => {
      expect(viewPostLink.data.post.points).toBe(postBodyLink.points);
    });
    test('number of comments should be 0', () => {
      expect(viewPostLink.data.post.numComments).toBe(postBodyLink.totalComments);
    });
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
