import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [isHearted, setIsHearted] = useState(false);

  const toogle = () => {
    setIsHearted(!isHearted);
    if (isHearted === true) console.log("fact liked");
  };

  if (isHearted === true)
    //=== (Strict Equality):Compares both value and type without type coercion. == (Loose Equality):Compares only values, performing type coercion (e.g.,"true" == true is true because the string "true" is coerced to a boolean)

    return (
      <AiOutlineHeart
        color="#ff6b81"
        style={{ display: "block" }}
        size={40}
        onClick={toogle}
      ></AiOutlineHeart>
    );

  return (
    <AiFillHeart
      color="#ff6b81"
      style={{ display: "block" }}
      size={40}
      onClick={toogle}
    ></AiFillHeart>
  );
};

export default Like;
