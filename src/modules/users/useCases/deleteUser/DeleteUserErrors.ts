import { UseCaseError } from '../../../../shared/core/UseCaseError';
import { Result } from '../../../../shared/core/Result';

export namespace DeleteUserErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `User not found`,
      } as UseCaseError);
    }
  }

  /**
   * UserHasContentError is thrown when an operation can't proceed 
   * because the user already has associated content.
   * @extends {Result<UseCaseError>}
   */
  export class UserHasContentError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `User has content.`,
      } as UseCaseError);
    }
  }
}
