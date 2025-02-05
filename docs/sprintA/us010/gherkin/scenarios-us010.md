## `Feature:` View Member Profile

**_As a member,_**

**_I want to_** view member information including username, email, number of posts made, number of comments written, and the member with the greatest number of comments along with their number of comments,

**_so that_** I can keep track of my activity on the platform and see who the most active member is.

---

### `Background:`

_Given a registered member is logged into the platform_

---

<!-- Test ID: 1011 | AC: AC1, AC2 -->

#### `Scenario:` Display Member's Own Profile Information

**Given** a logged-in member with one post and one comment

**When** I click on the member page button

**Then** I should see the member's username and email displayed

**And** the count of posts and comments should be visible

<br>

<!-- Test ID: 1022 | AC: AC1, AC2 -->

#### `Scenario:` View Another Member's Profile Information

**Given** I am logged in as a member

**When** I navigate to the profile page of "<other_member_username>" via a post <postId> link

**Then** I should see the other member's username and <email> displayed

**And** the count of posts: <posts> and comments: <comments> for the other member should be visible

| `other_member_username` | `email`                            | `posts` | `comments` | `postId` |
| ----------------------- | ---------------------------------- | ------- | ---------- | -------- |
| LuísAfonso              | luisafonso@dddforum.com            | 1       | 4          | 0        |
| AmbrosioDoChoco         | ambrosiodoschocolates@dddforum.com | 2       | 6          | 14       |

<br>

<!-- Test ID: 1032 | AC: AC1 -->

#### `Scenario:` View Profile Information of Newly Registered User

**Given** I am newly registered user in the Forum

**When** I navigate to my profile page

**Then** I should see the user's username and email displayed

**And** the count of posts and comments empty

<br>

<!-- Test ID: 1023 | AC: AC3 -->

#### `Scenario:` Identify the member with the Greatest Number of Comments

**Given** the member is logged in the platform

**When** the member enters a member page

**Then** the username of that member with the greatest number of comments is displayed.

<br>
<!-- Test ID: 1044 | AC: AC4 -->

#### `Scenario:` Display the Number of Comments for the Top Commenter

**Given** the member is logged in the platform

**When** the member enters a member page

**Then** the number of comments made by the top commenter is displayed

___

### Scenario implementation example:

```Typescript
Given("I am newly registered user in the Forum", async () => {
  await utils.pages.registerPage.open();
  await utils.pages.registerPage.register(utils.member2.email, utils.member2.username, utils.member2.password);
});

When("I navigate to my profile page", async () => {
  await utils.pages.memberPage.loggedMemberProfile();
});

Then("I should see the user's username and email displayed", async () => {
  const actualUsername = await utils.pages.memberPage.memberName.getText();
  const actualEmail = await utils.pages.memberPage.memberEmail.getText();

  await expect(actualUsername).toBe(utils.member2.username);
  await expect(actualEmail).toBe(utils.member2.email);
});

Then("the count of posts and comments empty", async () => {
  const amountOfPostsExist = await utils.pages.memberPage.numberOfPosts.getText();
  const amountOfCommentsExist = await utils.pages.memberPage.numberOfComments.getText();

  await expect(amountOfPostsExist).toBe("");
  await expect(amountOfCommentsExist).toBe("");
});

``````
---

```Typescript utlis.ts usage:```
```Typescript 
const member2 = { username: faker.internet.userName(), email: faker.internet.email(mDetails), password: faker.internet.password() };
```
&nbsp;

## API Testing


```Typescript
  it('should have the same name as the logged in user', async () => {
    //A
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    //A
    const response = await users.userDetails(data.username, data.accessToken);

    //A
    expect(response.status).toEqual(200);
    expect(response.data.user.userByUsername.username).toBe(data.username);
  });
  ```