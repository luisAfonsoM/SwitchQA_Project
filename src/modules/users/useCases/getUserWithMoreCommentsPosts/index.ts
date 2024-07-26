import { GetUserWithMoreCommentsPosts } from './GetUserWithMoreCommentsPosts';
import { userRepo } from '../../repos';
import { GetUserWithMoreCommentsPostsController } from './GetUserWithMoreCommentsPostsController';

const getUserWithMoreCommentsPosts = new GetUserWithMoreCommentsPosts(userRepo);

const getUserWithMoreCommentsPostsController = new  GetUserWithMoreCommentsPostsController(getUserWithMoreCommentsPosts);

export { getUserWithMoreCommentsPosts, getUserWithMoreCommentsPostsController };
