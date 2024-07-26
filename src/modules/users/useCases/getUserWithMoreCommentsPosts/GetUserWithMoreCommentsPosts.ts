import { Result, left, right} from "../../../../shared/core/Result";
import { IUserRepo } from "../../repos/userRepo";
import { AppError } from "../../../../shared/core/AppError";
import { UseCase } from "../../../../shared/core/UseCase";

export class GetUserWithMoreCommentsPosts implements UseCase<void, Promise <any>> {

    private userRepo: IUserRepo;

    constructor(userRepo : IUserRepo) {
        this.userRepo = userRepo;
    }

    async execute(): Promise<any> {
    
        try {
            const memberWithMostCommentsPosts = await this.userRepo.getUserWithMoreCommentsPosts();

            return right(Result.ok<any>(memberWithMostCommentsPosts));
        } catch (err) {
            return left(new AppError.UnexpectedError(err));
        }
    }
}