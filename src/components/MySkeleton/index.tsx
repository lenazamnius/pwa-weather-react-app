import React from 'react';
import { withStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const StyledSkeleton = withStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    borderRadius: '4px',
  },
})(Skeleton);

interface Props {
  width: number,
  height: number,
}

const MySkeleton: React.FC<Props> = ({ width, height }) => {

  return (
    <StyledSkeleton
      variant='rect'
      animation='wave'
      width={width}
      height={height}
    />
  );
};

export default MySkeleton;