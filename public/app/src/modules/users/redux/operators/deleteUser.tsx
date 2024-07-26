import * as actionCreators from '../actionCreators'
import { usersService } from '../../services';


/**
 * Deletes a user by their userId.
 *
 * @param {string} userId - The ID of the user to delete.
 * @returns {Function} A Redux Thunk function that dispatches actions based on deletion success or failure.
 * @async
 */
function deleteUser(userId: string) {
  return async (dispatch: any, getState?: any) => {
    dispatch(actionCreators.deletingUser());

    const result = await usersService.deleteUser(userId);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.deletingUserFailure(error));
      return false; 
    } else {
      dispatch(actionCreators.deletingUserSuccess());
      return true; 
    }
  };
}

export { deleteUser };
