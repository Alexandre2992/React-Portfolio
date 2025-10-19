import React, { useState } from "react";
import style from "./ButtonTest.module.css";

interface Props {
  //text: string;
  children: string;
  color: string;
  onOpen: () => void;
}

const ButtonTest = ({ children, color, onOpen }: Props) => {
  //const [clicked, setClicked] = useState(false);

  return (
    <button className={"btn btn-" + color} type="button" onClick={onOpen}>
      {children}
    </button>
  );
};

export default ButtonTest;
//className={[styles.btn, styles["btn-" + color]].join(" ")} isto é para dar o styling com o ficheiro CSS criado por mim
