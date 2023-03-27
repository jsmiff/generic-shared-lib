import React from "react";
import { add } from "../../lib/index.js";

interface ButtonProps {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  const result = add(2, 3);
  console.log(result);
  return <button>{ children }</button>;
};

export default Button;
