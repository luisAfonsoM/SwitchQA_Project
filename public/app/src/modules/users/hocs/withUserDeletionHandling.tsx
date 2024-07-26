import React from 'react';
import { UsersState } from '../redux/states';
import { IUserOperators } from '../redux/operators';
import { toast } from 'react-toastify';

interface withUserDeletionHandlingProps extends IUserOperators {
  users: UsersState;
  history: any;
}

function withUserDeletionHandling(WrappedComponent: any) {
  class HOC extends React.Component<withUserDeletionHandlingProps, any> {
    constructor(props: withUserDeletionHandlingProps) {
      super(props);
    }

    handleDeleteUser(userId: string) {
      this.props.deleteUser(userId);
    }

    /* afterSuccessfulDeletion(prevProps: withUserDeletionHandlingProps) {
      const currentProps: withUserDeletionHandlingProps = this.props;
      if (currentProps.users.isDeletingUserSuccess && !prevProps.users.isDeletingUserSuccess) {
        setTimeout(() => { this.props.history.push('/') }, 3000);
        this.props.logout();
        return toast.success("User deleted successfully! 🎉", {
          autoClose: 3000
        });
      }
    } */

    afterSuccessfulDeletion(prevProps: withUserDeletionHandlingProps) {
      const currentProps: withUserDeletionHandlingProps = this.props;
      if (currentProps.users.isDeletingUserSuccess && !prevProps.users.isDeletingUserSuccess) {
        setTimeout(() => {
          this.props.history.push('/');
          // Show toast for logout after redirect
          setTimeout(() => {}, 500); 
          this.props.logout();
        }, 3000);
        
        return toast.success("User deleted successfully! 🎉", {
          autoClose: 3000
        });
      }
    }
    

    afterFailedDeletion(prevProps: withUserDeletionHandlingProps) {
      const currentProps: withUserDeletionHandlingProps = this.props;
      if (currentProps.users.isDeletingUserFailure && !prevProps.users.isDeletingUserFailure) {
        const error = currentProps.users.error;
        return toast.error(`Oops! Couldn't delete user. 🙁`, {
          autoClose: 3000
        });
      }
    }

    componentDidUpdate(prevProps: withUserDeletionHandlingProps) {
      console.log('componentDidUpdate called')
      this.afterSuccessfulDeletion(prevProps);
      this.afterFailedDeletion(prevProps);
    }

    render() {
      return (
        <WrappedComponent
          deleteUser={(id: string) => this.handleDeleteUser(id)}
          {...this.props}
        />
      );
    }
  }
  return HOC;
}

export default withUserDeletionHandling;
