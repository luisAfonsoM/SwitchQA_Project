import { GetPostsCommentsByUsername } from "./GetPostsCommentsByUsername";
import { GetPostsCommentsByUsernameController } from "./GetPostsCommentsByUsernameController";
import { userRepo } from "../../repos";

const getPostsCommentsByUsername = new GetPostsCommentsByUsername(userRepo);

const getPostsCommentsByUsernameController = new GetPostsCommentsByUsernameController(getPostsCommentsByUsername,)

export {
    getPostsCommentsByUsername,
    getPostsCommentsByUsernameController
};