import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';



const users = new Users();
const posts = new Posts();
let accessToken: string;
let response;
const overChar = 'a'.repeat(86);
const overChar1 = 'b'.repeat(10000);
const overChar2 = 'c'.repeat(10001);
import { bootstrap } from '../../modules/forum/repos';

describe('US002 - Create a Post fields validation', () => {
  describe.each`
    title                                  | postType           | text                                                          | link           | StatusCode | StatusText
    ${''}                                  | ${'text'}          | ${'One ring to rule them all'}                                | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Text 0 chars Status Code 500'}      | ${'text'}          | ${''}                                                         | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Text 2 chars Status Code 500'}      | ${'text'}          | ${'12'}                                                       | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Text 19 chars Status Code 500'}     | ${'text'}          | ${'1111111111111111119'}                                      | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Text 20 chars Status Code 200'}     | ${'text'}          | ${'11111111111111111120'}                                     | ${''}          | ${200}     | ${'OK'}
    ${'Text 10000 chars Status Code 200'}  | ${'text'}          | ${overChar1}                                                  | ${''}          | ${200}     | ${'OK'}
    ${'Text 10001 chars! Status Code 500'} | ${'text'}          | ${overChar2}                                                  | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Gandalf the grey!'}                 | ${''}              | ${'One Ring to find them'}                                    | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'A'}                                 | ${'text'}          | ${'One Ring to bring them all and in the darkness bind them'} | ${''}          | ${500}     | ${'Internal Server Error'}
    ${overChar}                            | ${'text'}          | ${'The white tower'}                                          | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'Rohan will answer'}                 | ${'text'}          | ${'R'}                                                        | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'A wizzard is never late'}           | ${'link'}          | ${''}                                                         | ${''}          | ${500}     | ${'Internal Server Error'}
    ${'my precious!!'}                     | ${'link'}          | ${''}                                                         | ${'.pt'}       | ${500}     | ${'Internal Server Error'}
    ${'Legolas the elf'}                   | ${'link'}          | ${''}                                                         | ${'Who knows'} | ${500}     | ${'Internal Server Error'}
    ${"Helm's deep battle!"}               | ${'link'}          | ${''}                                                         | ${'ole.12'}    | ${500}     | ${'Internal Server Error'}
    ${'Gimli the dwarf'}                   | ${'link and text'} | ${'The dark lord returns'}                                    | ${'shire.org'} | ${500}     | ${'Internal Server Error'}
    ${'The Lord of the Rings'}             | ${'text'}          | ${'Rohin charge the uruk kai'}                                | ${''}          | ${200}     | ${'OK'}
    ${'The Rings of Power'}                | ${'text'}          | ${'Rohin charge the uruk kai'}                                | ${''}          | ${200}     | ${'OK'}
  `(
    `Post creation attempt with $title, $postType, $text, $link`,
    ({ title, postType, text, link, StatusCode, StatusText }) => {
      beforeAll(async (): Promise<void> => {
        const regBody = {
          email: 'aragorn@king.lotr',
          username: 'gondorian',
          password: 'minasTirith',
        };
        await users.post(regBody);
        response = await users.postLogin('gondorian', 'minasTirith');
        accessToken = response.data.accessToken;
        await users.getMe(accessToken);

        const postBody = {
          title: title,
          postType: postType,
          text: text,
          link: link,
        };
        response = await posts.createPost(postBody, accessToken);
      });
      test(`statusCode should be ${StatusCode} `, () => {
        expect(response.status).toBe(StatusCode);
      });

      test(`statusText should be ${StatusText}`, () => {
        expect(response.statusText).toBe(StatusText);
      });
    },
  );
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
