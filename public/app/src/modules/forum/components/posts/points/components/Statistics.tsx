// Statistics.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatisticsAccessHover from './StatisticsAccessHover';

interface StatisticsProps {
  isLoggedIn: boolean;
}

const Statistics: React.FC<StatisticsProps> = ({ isLoggedIn }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="statistics-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={isLoggedIn ? "/statistics" : "#"} className="statistics-link">
        statistics
      </Link>
      {!isLoggedIn && isHover && (
        <StatisticsAccessHover isHover={isHover} />
      )}
    </div>
  );
};

export default Statistics;