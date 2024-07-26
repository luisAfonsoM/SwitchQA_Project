# DB Bootstrap and Data Creation

## Bootstrap Class

The `Bootstrap` class provide method to insert and delete data into the database according to the application's needs for testing. It simplifies the setup process and improves test performance by eliminating the need for extensive test preparation.

The database is bootstrapped with essential, this includes the insertion of __posts, comments, votes, and registered users.__

### Method: `bootstrapDataToDb()`

The `bootstrapDataToDb` method is responsible for inserting test data into the database. It plays a crucial role in setting up the database with predefined data required for testing.

```typescript
public async bootstrapDataToDb(): Promise<string> {
  const bootstrapDb = this.models.Comment;

  await bootstrapDb.sequelize.query(
    `INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("0e9d4aea-3542-4032-88f9-813619017fae", "luisafonso@dddforum.com", "LuísAfonso", "$2a$12$lNPmuH//UkzRTFTIBi/Ybu5YRYAuKnO36jtEtGiSdoGx7Gmu5g8ju", "2023-06-26 11:00:00", "2023-06-26 11:00:00")`,
  );
}
```

### Method: `deleteDB()`

The `deleteDB` method is responsible for deleting all content from the database tables after all tests have been executed. It ensures a clean slate for each test run, preventing data conflicts between test cases.

```typescript
public async deleteDB(): Promise<void> {
  const bootstrapDb = this.models.Comment;
  await bootstrapDb.sequelize.query(`DELETE from base_user`);
  await bootstrapDb.sequelize.query(`DELETE from comment`);
  await bootstrapDb.sequelize.query(`DELETE from comment_vote`);
  await bootstrapDb.sequelize.query(`DELETE from member`);
  await bootstrapDb.sequelize.query(`DELETE from post`);
  await bootstrapDb.sequelize.query(`DELETE from post_vote`);
}
```
---  
## Strategies

* __TEST RUN:__ The `Bootstrap` class should be invoked before running the test suite to ensure that the database is properly populated with required data. This ensures that the test cases have access to the necessary data without extensive preparation.

```typescript
    await runner.run([
      () => CREATE_BASE_USER(),
      () => CREATE_MEMBER(),
      () => CREATE_POST(),
      () => CREATE_COMMENT(),
      () => CREATE_POST_VOTE(),
      () => CREATE_COMMENT_VOTE(),
    ]);

    await bootstrap.bootstrapDataToDb();
  },
```
```typescript
const testScripts = [
  `jest src/api_test/US010/us010-ssd.api.test.ts`, 
  `jest src/api_test/US009/us009-ssd.api.test.ts`,
  // EXPECTED SEQUENCE HERE
];

testScripts.forEach((testScript) => {
  console.log(`Running: ${testScript}`);
  try {
    const result = spawnSync(testScript, { stdio: 'inherit', shell: true });

    if (result.status !== 0) {
      console.error(`Test script failed: ${testScript}`);
    }
  } catch (error) {
    console.error(`Error running test script: ${testScript}`);
    console.error(error);
  }
});
```

disadvantages

* __TEST SUITE:__ The Bootstrap Technique in this test suite streamlines testing by inserting essential data into the database before the suite and deleting it afterward. This ensures a consistent environment, aids in test isolation, and identifies potential database-related issues. The implementation involves the methods:`bootstrapDataToDb()` `deleteDB()` . 


```typescript
beforeAll(async () => {
    await bootstrap.bootstrapDataToDb();
});

//ADD TESTS HERE

afterAll(async () => {
    await bootstrap.deleteDB();
});
```

_TODO: add specific inputs in eacf of the test suites_

---

## Summary of the bootstrap data:

**Users:**
1. Luís Afonso
2. Nataly Lucas
3. Nuno Pinto
4. Ricardo Cerqueira
5. Rita Castro
6. Paulo Teixeira
7. Maria do Aço
8. Tony do Rock
9. Ze Porqueiro
10. João Nabica
11. Joaquim do Grelo
12. Ana Aqui Bobo
13. Ana Bela Rego
14. Paulo Bordel
15. Ambrosio do Chocolates

**Posts:**
1. Title: "Este é o comentário do Paulo" (Type: link)
2. Title: "TypeScript" (Type: text)
3. Title: "GitHub" (Type: link)
4. Title: "PlantUML" (Type: text)
5. Title: "Cucumber" (Type: link)
6. Title: "Docker" (Type: text)
7. Title: "Godsmack" (Type: text)
8. Title: "Metallica" (Type: text)
9. Title: "Megadeath" (Type: text)
10. Title: "Black Sabbath" (Type: text)
11. Title: "Iron Maiden" (Type: text)
12. Title: "ACDC" (Type: text)
13. Title: "Pink Floyd" (Type: text)
14. Title: "Guns and Roses" (Type: text)
15. Title: "Dream Theater" (Type: text)
16. Title: "Dream Tester" (Type: text)

**Comments and score:**
1. Comment on post "Este é o comentário do Paulo"
Member: Paulo Teixeira
Text: "Comentario insert numero 1"
Points: 1

2. Comment on post "Este é o comentário do Paulo"
Member: Paulo Teixeira
Text: "Comentario insert numero 2"
Points: 1

3. Comment on post "GitHub"
Member: Ricardo Cerqueira
Text: "Great platform for collaborative software development."
Points: 5

4. Comment on post "GitHub"
Member: Rita Castro
Text: "I use GitHub every day. It's a fantastic tool."
Points: 3

5. Comment on post "Cucumber"
Member: Nuno Pinto
Text: "Cucumber is awesome for behavior-driven development."
Points: 4

6. Comment on post "Cucumber"
Member: Maria do Aço
Text: "I've had great experiences using Cucumber for testing."
Points: 3

