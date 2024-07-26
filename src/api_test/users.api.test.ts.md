/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";

import Users from "./endpoints/Users";
import { getUserByUserName } from "../modules/users/useCases/getUserByUserName";
import Posts from "./endpoints/Posts";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone: config.environmnetConfig.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone,
});

let users: Users;
let posts: Posts;

let accessToken: string;
let refreshToken: string;

describe("Users endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    
    users = new Users();
    posts = new Posts();

    log.debug("1. Users Base url: " + users.getBaseUrl());
  });

  it("Post - Create User", async (): Promise<void> => {
    const regBody: any = {
      email: "email@email.com",
      username: "asdasd",
      password: "password",
    };
    const response = await users.post(regBody);

    expect(response.status).toBe(200);
  });

  it("Post Login", async (): Promise<void> => {
    //TODO criar variaveis, reorganizar o codigo - expect no fim
   
    let username = "asdasd";
    let password = "password"
    
    const response = await users.postLogin(username, password);
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;

    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
  });

  it("Get Me", async (): Promise<void> => {
    log.debug("Access token: " + accessToken);

    const response = await users.getMe(accessToken);
    
    expect(response.status).toBe(200);
    expect(response.data.user).toBeDefined();
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("asdasd");
  });

  it("Post Logout", async (): Promise<void> => {
    
    const response = await users.postLogout(accessToken);
    
    expect(response.status).toBe(200);
  });
});
