import React from 'react';
import '../styles/DeleteButton.sass';

interface DeleteButtonProps {
  onClick: () => void;
  text: string;
  style?: any;
  intent?: 'negative';
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => (
  <button className={`delete-button ${props.intent}`} onClick={props.onClick}>
    {props.text}
  </button>
);

export default DeleteButton;
