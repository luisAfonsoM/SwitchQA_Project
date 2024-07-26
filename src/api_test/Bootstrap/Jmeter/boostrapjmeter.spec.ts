import { bootstrap } from '../../../modules/forum/repos';
import * as fs from 'fs';

/**
 * This test is used to inject data into the database
 * before running the JMeter tests.
 * Run npm run setup:jmeter to set the enviroment
 */
describe('Inject data into db', () => {
  beforeAll(async () => {
    await bootstrap.deleteDB();
  });
  it('should inject data into db to prepare Jmeter test scenario', async () => {
    //await bootstrap.bootstrapDataToDb();
    // Read queries from the specified file
    const filePath = 'src/api_test/Bootstrap/Jmeter/jmeterScenerio.sql';
    const queriesFromFile = fs.readFileSync(filePath, 'utf8').split(';');
    // Remove empty strings from the array
    const queries = queriesFromFile.filter(query => query.trim() !== '');
    // Call the method to execute the queries
    await bootstrap.executeCustomQueries(queries);
  });
});
