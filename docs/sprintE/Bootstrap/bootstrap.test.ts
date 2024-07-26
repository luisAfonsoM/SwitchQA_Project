import { bootstrap } from '../../modules/forum/repos';
import Users from '../endpoints/Users';

let response: any;
let users: Users;

let regBody: any = {
  email: 'bootstrap@king.lotr',
  username: 'bootrstraper',
  password: 'bootboot',
  accessToken: '',
};

describe('Inject data into db', () => {
  beforeAll(async () => {
    users = new Users();

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);

    regBody.accessToken = response.data.accessToken;

    module.exports = regBody;
  });

  it('invoke bootstrapDataToDb() function', async () => {
    await bootstrap.bootstrapDataToDb();
  });
});
