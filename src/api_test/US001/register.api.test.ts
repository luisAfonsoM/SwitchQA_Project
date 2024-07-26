import Users from '../endpoints/Users';

const users = new Users();
let response;

describe('Register an account fields validation', () => {
  describe.each`
    email                           | username              | password           | StatusCode | StatusText
    ${'grupodoistests1@gmail.com'}  | ${'g2'}               | ${'dummyPassword'} | ${200}     | ${'OK'}
    ${'grupodoistests2@gmail.com'}  | ${'UsernameMAAChar'}  | ${'dummyPassword'} | ${200}     | ${'OK'}
    ${'grupodoistests3@gmail.com'}  | ${'dummyUser'}        | ${'MinPass'}       | ${200}     | ${'OK'}
    ${'gruposdoistests3@gmail.com'} | ${'dummyUser'}        | ${'MinPass'}       | ${409}     | ${'Conflict'}
    ${'grupodoistests3@gmail.com'}  | ${'dummyUsers'}       | ${'MinPass'}       | ${409}     | ${'Conflict'}
    ${'grupodoistests4gmail.com'}   | ${'dummyUser1'}       | ${'dummyPass1'}    | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests4@gmail'}      | ${'dummyUser2'}       | ${'dummyPass2'}    | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests4@.com'}       | ${'dummyUser3'}       | ${'dummyPass3'}    | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests5@gmail.com'}  | ${'c'}                | ${'dummyPass4'}    | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests5@gmail.com'}  | ${'Usernames16Chars'} | ${'dummyPass5'}    | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests6@gmail.com'}  | ${'Usernames1'}       | ${'dummy'}         | ${500}     | ${'Internal Server Error'}
    ${''}                           | ${'Usernames2'}       | ${'dummy'}         | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests7@gmail.com'}  | ${''}                 | ${'dummy'}         | ${500}     | ${'Internal Server Error'}
    ${'grupodoistests8@gmail.com'}  | ${'Usernames3'}       | ${''}              | ${500}     | ${'Internal Server Error'}
  `(
    `Account creation attempt with $email, $username and $password`,
    ({ email, username, password, StatusCode, StatusText }) => {
      beforeAll(async (): Promise<void> => {
        const regBody  = {
          email: email,
          username: username,
          password: password,
        };
        response = await users.post(regBody);
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
