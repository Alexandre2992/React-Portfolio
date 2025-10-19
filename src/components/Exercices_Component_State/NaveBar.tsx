import React from "react";

interface Props {
  cartItemsCount: number;
}
const NaveBar = ({ cartItemsCount }: Props) => {
  return <div>Nave Bar:{cartItemsCount}</div>;
};

export default NaveBar;
