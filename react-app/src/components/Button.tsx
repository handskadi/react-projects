import { ReactNode } from "react";

interface ButtonProps {
  children: string;
  color?: string;
  onClick: () => void;
}

export const Button = ({
  children,
  color = "primary",
  onClick,
}: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
