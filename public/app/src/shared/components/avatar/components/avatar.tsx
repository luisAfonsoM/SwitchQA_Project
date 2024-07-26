import React from 'react';
import '../styles/avatar.sass';

interface AvatarProps {
  image: string;
  onClick: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ image, onClick }) => (
  <div className="avatar" onClick={onClick}>
    <img src={image} alt="Avatar" />
  </div>
);

export default Avatar;
