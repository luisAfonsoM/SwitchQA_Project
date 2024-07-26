import { bootstrap } from '../../modules/forum/repos';

describe('Inject data into db', () => {
  beforeAll(async () => {
    await bootstrap.deleteDB();
  });
  it('should inject data into db', async () => {
    //await bootstrap.bootstrapDataToDb();
    await bootstrap.acceptanceBootrapSetup();
  });
});
