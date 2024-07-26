
import React from 'react'
import { Button } from '../../../../../shared/components/button'
import { useHistory } from 'react-router-dom';

interface ProfileButtonProps {
  isLoggedIn: boolean;
  username: string
  onLogout: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = (props) => {
  const history = useHistory();

  const goToProfile = () => {
    history.push(`/member/${props.username}`);
  }
  return props.isLoggedIn ? (
    <Button 
      text={
        <span>
          <u onClick={goToProfile}>{props.username}</u> 
          {` / `}
          <u onClick={props.onLogout}>logout</u>
        </span>
      }
      onClick={() => {}}
    />
  ) : (
    <Button 
      text="Join" 
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.location.href = "/join"
        }
      }}
    />
  )
}

export default ProfileButton;





