import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <button className="alert alert-primary">{children}</button>;
};

export default Alert;
