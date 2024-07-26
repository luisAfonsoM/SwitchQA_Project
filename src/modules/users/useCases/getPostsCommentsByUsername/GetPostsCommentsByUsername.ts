import { Result, left, right} from "../../../../shared/core/Result";
import { IUserRepo } from "../../repos/userRepo";
import { AppError } from "../../../../shared/core/AppError";
import { GetPostsCommentsByUsernameDTO } from "./GetPostsCommentsByUsernameDTO";
import { UseCase } from "../../../../shared/core/UseCase";

export class GetPostsCommentsByUsername implements UseCase<GetPostsCommentsByUsernameDTO, Promise <any>> {

    private userRepo: IUserRepo;

    constructor(userRepo : IUserRepo) {
        this.userRepo = userRepo;
    }

    async execute(request: GetPostsCommentsByUsernameDTO): Promise<any> {
        const { username} = request;
    
        try {
            const memberInfo = await this.userRepo.getUserInfo(username);

            return right(Result.ok<any>(memberInfo));
        } catch (err) {
            return left(new AppError.UnexpectedError(err));
        }
    }
}