import { DeleteUserUseCase } from './DeleteUserUseCase';
import { DeleteUserController } from './DeleteUserController';
import { userRepo } from '../../repos';
import { postRepo } from '../../../forum/repos';
import { memberRepo } from '../../../forum/repos';
import { commentRepo } from '../../../forum/repos';

const deleteUserUseCase = new DeleteUserUseCase(userRepo, postRepo, memberRepo, commentRepo);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
