import React from "react";
interface Props {}

const TesteLista = (props: Props) => {
  const items = ["Gil Vicente", "Porto", "Benfica"];
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default TesteLista;
