import { Result, left, right} from "../../../../shared/core/Result";
import { IUserRepo } from "../../repos/userRepo";
import { AppError } from "../../../../shared/core/AppError";
import { GetStatisticsByDateDTO } from "./GetStatisticsByDateDTO";
import { UseCase } from "../../../../shared/core/UseCase";

export class GetStatisticsByDate implements UseCase<GetStatisticsByDateDTO, Promise <any>> {

    private userRepo: IUserRepo;

    constructor(userRepo : IUserRepo) {
        this.userRepo = userRepo;
    }

    async execute(request: GetStatisticsByDateDTO): Promise<any> {
        const { date, statType } = request;
    
        try {
            // Update the method to handle statType
            const statistics = await this.userRepo.getStatistics(date, statType); 
    
            return right(Result.ok<any>(statistics));
        } catch (err) {
            return left(new AppError.UnexpectedError(err));
        }
    }
}