/*
Password Generator: https://bcrypt-generator.com/
member_id/user_id/post_id/vote_id Generator: https://www.uuidgenerator.net/
Post Slug: 1234567-Seven-numbers-and-title-separeted-by-hyfen
*/

/*Insert Data Table: base_user*/
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("0e9d4aea-3542-4032-88f9-813619017fae", "luisafonso@dddforum.com", "LuísAfonso", "$2a$12$lNPmuH//UkzRTFTIBi/Ybu5YRYAuKnO36jtEtGiSdoGx7Gmu5g8ju", "2023-06-26 11:00:00", "2023-06-26 11:00:00");
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("1771eddd-a493-407c-b75a-491e0407087f", "natalilucas@dddforum.com", "NataliLucas", "$2a$12$YDqWZjeFaTp5f1xCAww.CeQ1lEm0gi46O28OjWZU5vg71Rl.RT2La", "2023-06-27 11:00:00", "2023-06-27 11:00:00");
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("4370b417-413e-4915-baa5-495f3b9e3d5f", "nunopinto@dddforum.com", "NunoPinto", "$2a$12$wUHyIEjMkAb1PsqdRaFv0u7x9/rh99rOz.Kr6We9LRLMpICdXVfVa", "2023-06-28 11:00:00", "2023-06-28 11:00:00");
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("86412d32-3688-474b-bfcc-54b65ceca860", "ricardocerqueira@dddforum.com", "RicardoCerqueir", "$2a$12$71tWDLZoO5zs9i465bXWMu8CfyBmNStdwXh.HorWjRe5.LkaV59SW", "2023-06-29 11:00:00", "2023-06-29 11:00:00");
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("575a8c2e-29aa-4b80-95e5-c86d14b62fb9", "ritacastro@dddforum.com", "RitaCastro", "$2a$12$1jEeogE4fQPi46CSVl0nEeJ.Xm6d3w8g0q8eWTFU.LIeHe9igRc1a", "2023-06-30 11:00:00", "2023-06-30 11:00:00");
INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("709d1165-f57a-4fc7-9b64-d1abf342f1a2", "pauloteixeira@dddforum.com", "PauloTeixeira", "$2a$12$Dx.PoHBusG40YJKdyz85W.zZ/XMZMe1pSxdYkXeb2Cyrsy1VaFZSS", "2023-07-01 11:00:00", "2023-07-01 11:00:00");

/*Insert Data Table: member*/
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "0e9d4aea-3542-4032-88f9-813619017fae", 0, "2023-06-26 11:00:00", "2023-06-26 11:00:00");
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "1771eddd-a493-407c-b75a-491e0407087f", 0, "2023-06-27 11:00:00", "2023-06-27 11:00:00");
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "4370b417-413e-4915-baa5-495f3b9e3d5f", 0, "2023-06-28 11:00:00", "2023-06-28 11:00:00");
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("73621c4d-139e-45cb-b3ea-52433283ec5a", "86412d32-3688-474b-bfcc-54b65ceca860", 0, "2023-06-29 11:00:00", "2023-06-29 11:00:00");
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "575a8c2e-29aa-4b80-95e5-c86d14b62fb9", 0, "2023-06-30 11:00:00", "2023-06-30 11:00:00");
INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("3ded78b6-094e-401c-bf10-df10ee51accf", "709d1165-f57a-4fc7-9b64-d1abf342f1a2", 0, "2023-07-01 11:00:00", "2023-07-01 11:00:00");

/*Insert Data Table: post*/
INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "text", "TypeScript", "<p>More info here www.typescriptlang.org</p>", "1111111-TypeScript", "60", "2023-06-26 11:30:00", "2023-06-26 11:30:00");
INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "link", "GitHub", "www.github.com" , "2222222-GitHub", "50",  "2023-06-27 11:30:00", "2023-06-27 11:30:00");
INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "text", "PlantUML", "<p>More info here https://plantuml.com/</p>", "3333333-PlantUML", "40", "2023-06-28 11:30:00", "2023-06-28 11:30:00");
INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "link", "Cucumber", "https://cucumber.io", "4444444-Cucumber", "30", "2023-06-29 11:30:00", "2023-06-29 11:30:00");
INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "text", "Docker", "<p>More info here https://hub.docker.com/</p>", "5555555-Docker", "20", "2023-06-30 11:30:00", "2023-06-30 11:30:00");
INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("bccbecce-6c75-4c52-9603-f277f88bb137", "3ded78b6-094e-401c-bf10-df10ee51accf", "link", "Postman", "www.postman.com", "6666666-Postman", "10", "2023-07-01 11:30:00", "2023-07-01 11:30:00");

/*Insert Data Table: post_vote*/
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("d2d97243-2cfd-4bf4-b7a5-dbb2e3538be8", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "UPVOTE", "2023-06-26 11:35:00", "2023-06-26 11:35:00");
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("9ff93b39-ff75-43bd-892b-9921611d4882", "27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "UPVOTE", "2023-06-27 11:35:00", "2023-06-27 11:35:00");
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("302f0c58-6ff5-4cc1-a716-1b000263495d", "9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "UPVOTE", "2023-06-28 11:35:00", "2023-06-28 11:35:00");
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("13aef126-18ab-401e-ae02-9953f620bb9f", "72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "UPVOTE", "2023-06-29 11:35:00", "2023-06-29 11:35:00");
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("83b178ba-454d-4769-a4ca-7f65f3db190b", "2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "UPVOTE", "2023-06-30 11:35:00", "2023-06-30 11:35:00");
INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("03eb0c90-df31-4013-a71e-c53891b8f715", "bccbecce-6c75-4c52-9603-f277f88bb137", "3ded78b6-094e-401c-bf10-df10ee51accf", "UPVOTE", "2023-07-01 11:35:00", "2023-07-01 11:35:00");
