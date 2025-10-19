import { ReactNode } from "react";

interface Props {
  children: string;
}
const Dismissing = ({ children }: Props) => {
  return (
    <button className="btn-close" data-bs-dismiss="alert" aria-label="Close">
      {children}
    </button>
  );
};

export default Dismissing;
