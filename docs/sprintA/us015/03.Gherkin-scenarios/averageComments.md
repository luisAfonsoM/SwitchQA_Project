## US015- Average Comments per Day

**As a Member**,

**I want to** view users information, including: username, email, number of posts made, number of comments written, and the user with the greatest number of comments along their number of comments,

**so that** I can keep track of my activity on the platform and see who the most active user is.

--- 
&nbsp;

## `Feature:`: View Average Comments Per Day

#### `Scenario:` Member submits valid date
  **Given** the member is on the statistics page
  **When** the member enters a valid date in the format "2023-06-26"
  **And** the member clicks the submit button
  **Then** the system should calculate and display the "Result: 5.0" rounded with one decimal

#### `Scenario:` Member submits data with no records

  **Given** the Member is on the Statistics Page
  **When** the member enters a valid date in the format "1994-11-21" with no existing comments and posts
  **And** member clicks the submit button
  **Then** the system should display a "Result: No data found" message

#### `Scenario:` Member submits invalid data

  **Given** The member is on statistics page
  **When** the member enters an invalid date "2023-1-"
  **And** The member clicks submit
  **Then** the system should display a flash message "Inserted date is not valid, please refresh and try again 😎"
  **And** the system should not display any result: "Result:"

#### `Scenario:` Member submits valid data and refreshes results

  **Given** The Member is on The Statistics Page
  **When** the member enters a valid date in the format "2023-06-26"
  **And** The Member Clicks the submit button
  **And** the member clicks the refresh button
  **Then** both date fields and result fields are empty

  ___

### Scenario implementation example:

```Typescript
Given("the Member is on the Statistics Page", async () => {
  await utils.pages.login.open();
  await utils.pages.login.login(utils.member.username, utils.member.password);

  utils.newPageLoading(utils.mainPage);

  await utils.pages.statistics.loggedMemberStatistics();
});

When("the member enters a valid date in the format {string} with no existing comments and posts", async (date) => {
  utils.newPageLoading(utils.statisticsPage);

  await utils.pages.statistics.enterDate(utils.dateBox.averageComments, date);
});

When("member clicks the submit button", async () => {
  await utils.pages.statistics.clickSubmit(utils.dateBox.averageComments);
});

Then("the system should display a {string} message", async (errorMessage) => {
  const result = await utils.pages.statistics.getResultTextContent(utils.dateBox.averageComments);
  expect(result).toBe(errorMessage);
});
```

---

```Typescript utlis.ts usage:```

* pages
* waitForFlash()
* newPageLoading()

&nbsp;

## API Testing

```Typescript 
  it('test average comments per day', async () => {
    //A
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    //A
    const response = await users.getStatisticsByDate(data.date, data.accessToken);

    //A
    expect(response.status).toEqual(200);
    expect(response.data.statistics.averageCommentsByDate[0].average_comments_per_post).toBe('5.0');
  });
  ```

  