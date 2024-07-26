
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/StatisticsAccessHover.sass"

interface StatisticsAccessHoverProps {
  isHover: boolean; 
}

const StatisticsAccessHover: React.FC<StatisticsAccessHoverProps> = ({ isHover }) => {
  return isHover ? (
    <div className="statistics-access-hover">
      <p>
        Want to access statistics? You need to sign up
        <Link to="/login"> Here</Link>
      </p>
    </div>
  ) : null;
};

export default StatisticsAccessHover;
