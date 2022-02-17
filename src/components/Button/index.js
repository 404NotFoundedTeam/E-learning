import React from 'react';
import Button from '@mui/material/Button';

const MainButton = ({ variant, children, ...props }) => {
  return (
    <Button variant={variant} {...props}>{children}</Button>
  );
}

export default MainButton;
