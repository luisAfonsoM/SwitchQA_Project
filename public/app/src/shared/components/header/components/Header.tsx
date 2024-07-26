import React, { useState } from 'react';
import { Logo } from '..';
import '../styles/Header.sass';
import { Link } from 'react-router-dom';
import { Points } from '../../../../modules/forum/components/posts/points';
import Statistics from '../../../../modules/forum/components/posts/points/components/Statistics';

interface HeaderProps {
  title: string;
  subtitle?: string;
  isUpvotable?: boolean;
  onUpvoteClicked?: () => void;
  onDownvoteClicked?: () => void;
  points?: number;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [isStatHovered, setIsStatHovered] = useState(false);

  return (
    <div className="header">
      <Logo />
      {props.isUpvotable && (
        <Points
          onUpvoteClicked={() =>
            props.onUpvoteClicked ? props.onUpvoteClicked() : ''
          }
          onDownvoteClicked={() =>
            props.onDownvoteClicked ? props.onDownvoteClicked() : ''
          }
          points={props.points as number}
          isLoggedIn={props.isLoggedIn || false}
        />
      )}
      <div className="content-container">
        <h1>{props.title}</h1>
        <p>
          <b>{props.subtitle}</b>
        </p>
        <div className="header-links">
          <Link to="/submit" id="submitLink">
            submit
          </Link>
          <Link to="/statistics" id="statisticsLink">
            statistics
          </Link>
          <div
            className="statistics-container"
            onMouseEnter={() => setIsStatHovered(true)}
            onMouseLeave={() => setIsStatHovered(false)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
