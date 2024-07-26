import { DeleteUserDTO } from './DeleteUserDTO';
import { DeleteUserErrors } from './DeleteUserErrors';
import { Either, Result, left, right } from '../../../../shared/core/Result';
import { AppError } from '../../../../shared/core/AppError';
import { IUserRepo } from '../../repos/userRepo';
import { UseCase } from '../../../../shared/core/UseCase';
import { IPostRepo } from '../../../forum/repos/postRepo';
import { ICommentRepo } from '../../../forum/repos/commentRepo';
import { MemberRepo } from '../../../forum/repos/implementations/sequelizeMemberRepo';

type Response = Either<
  | AppError.UnexpectedError
  | DeleteUserErrors.UserNotFoundError
  | DeleteUserErrors.UserHasContentError,
  Result<void>
>;
export class DeleteUserUseCase implements UseCase<DeleteUserDTO, Promise<Response>> {
  private userRepo: IUserRepo;
  private postRepo: IPostRepo;
  private commentRepo: ICommentRepo;
  private memberRepo: MemberRepo;

  constructor(
    userRepo: IUserRepo,
    postRepo: IPostRepo,
    memberRepo: MemberRepo,
    commentRepo: ICommentRepo,
  ) {
    this.userRepo = userRepo;
    this.postRepo = postRepo;
    this.memberRepo = memberRepo;
    this.commentRepo = commentRepo;
  }

  public async execute(request: DeleteUserDTO): Promise<any> {
    try {
      const userId = request.userId;
      const user = await this.userRepo.getUserByUserId(request.userId);
      const memberFound = !!user === true;
      if (!memberFound) {
        return left(new DeleteUserErrors.UserNotFoundError());
      }

      const member = await this.memberRepo.getMemberByUserId(userId);
      const memberId = member.memberId.id.toString();
      const hasPosts = await this.postRepo.hasPostsByMemberId(memberId);
      const hasComments = await this.commentRepo.hasCommentsByMemberId(memberId);
      if (hasPosts || hasComments) {
        return left(new DeleteUserErrors.UserHasContentError());
      }

      user.delete();

      await this.userRepo.save(user);

      return right(Result.ok<void>());
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
