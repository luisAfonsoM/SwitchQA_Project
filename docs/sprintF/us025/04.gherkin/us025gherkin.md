##  US 025 - Display color yellow on date text on Recent Posts Filter

**As a Member**,

**I want to** As a member, when I look at the recent posts, posts older than two days and newer than seven days should have the date in yellow text

**so that** I can keep track of posts activity in DDD Forum.

--- 
&nbsp;

## `Feature:`: Display color yellow on date text on Recent Posts Filter

#### `Scenario:` 1 - Post created 3 days ago from current date should have yellow text
  **Given** the member logs in on the web page
  **When** the option to sort by new is selected
  **And** there is a post title "Yellow Post 3 days ago"
  **Then** the date text should be yellow

#### `Scenario:` 2 - Post created 6 days ago from current date should have yellow text

   **Given** the member logs on the web page
   **When** select the option to sort by new 
   **And** there is a post with title "Yellow Post 6 days ago"
   **Then** the date text should appear yellow

#### `Scenario:` 3 - Post created 4 days ago from current date should not have yellow text

   **Given** the member is logged in on the index
   **When** the member logs out 
   **And** selects the option to sort posts by new
   **Then** a post with title "Yellow Post 4 days ago" should NOT display yellow

### Scenario implementation example:

```Typescript
BeforeAll(async () => {
    await us025seed();
  });

const pages: any = {
  login: loginPage,
  submitPost: submitPost,
  postDetails: postDetails,
  indexPage: indexPage,
};

const member = {
  username: "RecentPosts",
  password: "RecentPosts",
};

const loginMember = async () => {
  await pages.login.open();
  await pages.login.login(member.username, member.password);
};

// 1 - Post created 3 days ago from current date should have yellow background
Given("the member logs in on the webppage", async () => {
  await loginMember();
});

When("the option to sort by new is selected", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});
When("there is a post title {string}", async (titleOne:string) => {
  await pages.indexPage.getPostByTitle(titleOne);
});

Then("the date text should be yellow", async () => {
    async (title:string,) => {
        const expectedColor = "#daa520"; // The hex code for golden yellow;
        await pages.indexPage.assertDateMetaColor(
          title,
         expectedColor
        );
        await browser.pause(2000);
      }
});

// Scenario: 2 - Post created 6 days ago from current date should have yellow background
Given("the member logs on the web page", async () => {
  await loginMember();
});

When("select the option to sort by new", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});
When("there is a post with title {string}", async (titleTwo:string) => {
  await pages.indexPage.getPostByTitle(titleTwo);
});

Then("the date text should appear yellow", async () => {
    async (title:string,) => {
        const expectedColor = "#daa520"; // The hex code for golden yellow;
        await pages.indexPage.assertDateMetaColor(
          title,
         expectedColor
        );
        await browser.pause(2000);
      }
});
  // Scenario: 3 - Post created 4 days ago from current date should have yellow background
Given("the member is logged in on the index", async () => {
    await loginMember();
  });
  When("the member logs out", async () => {
    await browser.pause(2000);
    await pages.indexPage.clickLogout();
    await browser.pause(10000);
  });

When("selects the option to sort posts by new", async () => {
  await pages.indexPage.clickFilterButton("New");
  await browser.pause(2000);
});

Then("a post with title {string} should NOT display yellow", async (title:string) => {
  const expectedColor = "#000000"; 

  await pages.indexPage.getPostByTitle(title);

  await pages.indexPage.assertDateMetaColor(title, expectedColor);

});