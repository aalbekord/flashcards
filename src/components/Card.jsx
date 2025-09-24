import "./Card.css"
import { useState } from 'react'
const Card = (props) => {

  const [isFront, setIsFront] = useState(true)

  function handleClick() {
    setIsFront(!isFront)
  }

  const text = isFront ? props.front : props.back

  return (
    <>
      <div className={`card ${props.difficulty}`} onClick={handleClick}>{text}</div>
    </>
  )
}

export default Card;