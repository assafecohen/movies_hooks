import React from 'react';
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';
const Grid = ({ header, children }) => {
  return (
    <div>
      <StyledGrid>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
      </StyledGrid>
    </div>
  );
};

export default Grid;
