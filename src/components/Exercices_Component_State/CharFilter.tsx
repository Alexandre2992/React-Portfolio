import React, { useState } from "react";

interface Props {
  children: string;
  sizeText?: number;
}

const CharFilter = ({ children, sizeText = children.length }: Props) => {
  //sizeText = children.length just to initialize the variable sizeText
  const [showText, setShowText] = useState(false);

  const toogleText = () => {
    setShowText(!showText);
  };

  if (showText === true)
    return (
      <div>
        {children}
        <button className="btn btn-primary" type="button" onClick={toogleText}>
          Less
        </button>
      </div>
    );

  return (
    <div>
      {children.slice(0, sizeText) + (sizeText < children.length ? "..." : "")}
      <button className="btn btn-primary" type="button" onClick={toogleText}>
        More
      </button>
    </div>
  );
};

export default CharFilter;
//<button className="btn btn-primary" type="button">
