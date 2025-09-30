import "./Card.css";
import { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeyPress";

const Card = (props) => {
  const [isFront, setIsFront] = useState(true);

  useOnKeyPress(() => setIsFront(!isFront), " ");

  const handleClick = () => {
    setIsFront(!isFront);
  };

  const text = isFront ? props.front : props.back;

  return (
    <>
      <div className={`card ${props.difficulty}`} onClick={handleClick}>
        {text}
      </div>
    </>
  );
};

export default Card;