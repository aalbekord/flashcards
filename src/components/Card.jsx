import "./Card.css"
import { useState, useEffect} from 'react'
const Card = (props) => {

  const [isFront, setIsFront] = useState(true)

  function handleClick() {
    setIsFront(!isFront)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') {
        setIsFront(!isFront);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isFront]);

  const text = isFront ? props.front : props.back

  return (
    <>
      <div className={`card ${props.difficulty}`} onClick={handleClick}>{text}</div>
    </>
  )
}

export default Card;