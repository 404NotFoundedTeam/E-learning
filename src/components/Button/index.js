import React from 'react';
import Button from '@mui/material/Button';

const style = {
  contained: "!bg-[#FA541C] !rounded-lg",
  outlined: "!border-[#dddddd] hover:!border-[black] !text-black !rounded-lg",
}

const MainButton = ({ variant, children, className, ...props }) => {
  return (
    <Button variant={variant} className={(className ? className : '') + " " + style[variant]} {...props}>{children}</Button>
  );
}

export default MainButton;
