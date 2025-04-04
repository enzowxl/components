import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: ButtonProps) => {
  return <button {...props}></button>;
};
