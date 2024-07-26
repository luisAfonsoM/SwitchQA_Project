import * as actionCreators from '../actionCreators';
import { usersService } from '../../services';

function getMemberDetails(username: string): any {
  return async (dispatch: any, getState?: any) => {
    return async (dispatch: any) => {
      dispatch(actionCreators.gettingMemberDetails(username));

      const result = await usersService.getMemberDetails(username);

      if (result.isLeft()) {
        const error: string = result.value;
        dispatch(actionCreators.gettingMemberDetailsFailure(error));
      } else {
        dispatch(actionCreators.gettingMemberDetails(result));
      }
    };
  };
}

export { getMemberDetails };
